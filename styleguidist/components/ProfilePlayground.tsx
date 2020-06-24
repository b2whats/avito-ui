import React, { ReactNode, Profiler, ProfilerProps, useState, useCallback, useEffect, useReducer } from 'react'
import { quantile } from 'simple-statistics'
import { profiler } from '@avito/core'

interface ProfileProps extends ProfilerProps {
  render: (key: any) => ReactNode
  count?: number
}


const BatchProfiler = React.memo(({ rev, count = 100, render, ...pass }: ProfileProps & { rev: number }) => (
  rev
    ? <Profiler {...pass}>{(new Array(count)).fill(0).map((e, i) => render(i))}</Profiler>
    : null
))
BatchProfiler.displayName = 'BatchProfiler'

export const ProfilePlayground = ({ runCount = 100, ...props }: Omit<ProfileProps, 'onRender'> & { runCount?: number }) => {
  const [rev, setState] = useState(1)
  const updateTypes = {
    remount() {
      setState(0)
      setTimeout(() => setState(1), 100)
    },
    noopRerender() {
      setState(rev + 1)
    },
  }
  const [{ stats, countdown, updater }, dispatch] = useReducer((state, action) => {
    const [lastStat, ...oldStats] = state.stats
    switch (action.type) {
      case 'start':
        const nextStats = [{ updater: action.updater, data: [] }]
          .concat(lastStat || [])
          .concat(oldStats)
        return {
          ...state,
          stats: nextStats,
          countdown: action.countdown,
          updater: action.updater,
        }
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
  const startBench = (updater: keyof typeof updateTypes, runCount = 1) => {
    requestAnimationFrame(() => {
      profiler.clearOwnEntries()
      dispatch({ type: 'start', countdown: runCount, updater })
    })
  }

  const onRender = useCallback(((
    id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
    phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
    actual, // время, затраченное на рендер зафиксированного обновления
    base // предполагаемое время рендера всего поддерева без кеширования
  ) => {
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
      <button onClick={() => startBench('noopRerender')}>re-render</button>
      <button onClick={() => startBench('remount')}>remount</button>
      <button onClick={() => startBench('remount', runCount)}>bench</button>

      <Stats data={stats} />

      <div style={{ height: '200px', overflow: 'auto' }}>
        <BatchProfiler {...props} rev={rev} onRender={onRender} />
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
