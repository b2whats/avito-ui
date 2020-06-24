import React, { ReactNode, Profiler, ProfilerProps, useState, useCallback, useEffect, useReducer } from 'react'
import { quantile } from 'simple-statistics'
import { profiler } from '@avito/core'

interface ProfileProps extends ProfilerProps {
  render: (key: any, props: object) => ReactNode
  count?: number
  componentProps: object
}


const BatchProfiler = React.memo(({
  rev, count = 100, render, componentProps, ...pass
}: ProfileProps & { rev: number }) => (
  rev
    ? <Profiler {...pass}>{(new Array(count)).fill(0).map((e, i) => render(i, componentProps))}</Profiler>
    : null
))
BatchProfiler.displayName = 'BatchProfiler'

export const ProfilePlayground = ({ runCount = 100, ...props }: Omit<ProfileProps, 'onRender'> & { runCount?: number }) => {
  const [{ rev, componentProps }, setState] = useState({ rev: 1, componentProps: {} })
  const updateTypes = {
    remount() {
      setState({ rev: 0, componentProps })
      setTimeout(() => setState({ rev: 1, componentProps }), 100)
    },
    noopRerender() {
      setState({ rev: rev + 1, componentProps })
    },
    padingDrift() {
      setState({ rev, componentProps: { ...componentProps, pl: (componentProps.pl || 0) + 1 } })
    },
    paddingToggle() {
      setState({ rev, componentProps: { ...componentProps, pl: 5 * Number(!componentProps.pl) } })
    },
    callbackShred() {
      setState({ rev, componentProps: { ...componentProps, onClick: () => {} } })
    },
  }
  const [{ stats, countdown, updater }, dispatch] = useReducer((state, action) => {
    const [lastStat, ...oldStats] = state.stats
    switch (action.type) {
      case 'start':
        return {
          ...state,
          stats: [{ updater: state.updater, data: [] }, ...(lastStat || []), ...oldStats],
          countdown: action.countdown,
        }
      case 'setUpdater':
        return { ...state, updater: action.updater }
      case 'iter':
        if (!lastStat || !state.countdown) return state
        return {
          ...state,
          countdown: state.countdown - 1,
          stats: [{ ...lastStat, data: [...lastStat.data, action.stat] }, ...oldStats],
        }
    }
    return state
  }, {
    countdown: 0,
    stats: [],
    updater: 'remount',
  })

  useEffect(() => {
    if (countdown) updateTypes[updater]()
  }, [countdown, updater])
  const startBench = (runCount = 1) => {
    requestAnimationFrame(() => {
      profiler.clearOwnEntries()
      dispatch({ type: 'start', countdown: runCount })
    })
  }

  const onRender = useCallback(((id,phase, actual) => {
    profiler.start('layout')
    requestAnimationFrame(() => {
      setTimeout(() => {
        profiler.end('layout')
        const internals = {}
        profiler.getOwnEntries().forEach(entry => {
          internals[entry.name] = (internals[entry.name] || 0) + entry.duration
        })
        profiler.clearOwnEntries()
        dispatch({ type: 'iter', stat: { actual, ...internals } })
      })
    })
  }) as ProfilerProps['onRender'], [])

  return (
    <div>
      <select value={updater} onChange={e => dispatch({ type: 'setUpdater', updater: e.target.value })}>
        {Object.keys(updateTypes).map(updater => <option key={updater} value={updater}>{updater}</option>)}
      </select>
      <button onClick={() => startBench()}>once</button>
      <button onClick={() => startBench(runCount)}>bench</button>

      <Stats data={stats} />

      <div style={{ height: '200px', overflow: 'auto' }}>
        <BatchProfiler {...props} rev={rev} componentProps={componentProps} onRender={onRender} />
      </div>
    </div>
  )
}

function Stats({ data }) {
  return (
    <div style={{ height: '200px', overflow: 'auto' }}>
      {data.filter(stat => stat.data.length).map((experiment, i) => {
        const { updater, count, variables } = describeExperiment(experiment)
        return (
          <div key={i}>
            {updater}, {count} runs:
            <table>
              {variables.map(({ name, stat }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td style={{ textAlign: 'right' }}>{stat.median.toFixed(2)}</td>
                  <td style={{ textAlign: 'right' }}>{stat.q025.toFixed(2)}</td>
                  <td style={{ textAlign: 'right' }}>{stat.q975.toFixed(2)}</td>
                </tr>
              ))}
            </table>
          </div>
        )
      })}
    </div>
  )
}


function describeExperiment(stats: { data: { actual: number }[], updater: string }) {
  return {
    updater: stats.updater,
    variables: keyUnion(stats.data).map(name => ({
      name,
      stat: describeVar(stats.data.map(observation => observation[name] || 0)),
    })).sort((stat1, stat2) => stat2.stat.median - stat1.stat.median),
    count: stats.data.length,
  }
}

function describeVar(varStat: any[]) {
  return {
    median: quantile(varStat, 0.5),
    q025: quantile(varStat, 0.025),
    q975: quantile(varStat, 0.975),
  }
}

function keyUnion(data: object[]) {
  const keys = new Set<string>()
  data.forEach(item => Object.keys(item).forEach(key => keys.add(key)))
  return Array.from(keys)
}
