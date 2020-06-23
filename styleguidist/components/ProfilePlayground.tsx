import React, { ReactNode, Profiler, ProfilerProps, useState, useCallback, useMemo, useEffect, useReducer } from 'react'
import { quantile, sampleStandardDeviation } from 'simple-statistics'
import { Stack } from '@avito/web-components'

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

const describeExperiment = (stats: any) => {
  const data = stats.data.map(stat => stat.actual)
  return data.length ? {
    updater: stats.updater,
    median: quantile(data, 0.5).toFixed(2),
    q05: quantile(data, 0.05).toFixed(2),
    q95: quantile(data, 0.95).toFixed(2),
    std: data.length >= 2 ? sampleStandardDeviation(data).toFixed(2) : NaN,
    count: data.length,
  } : {}
}

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
        return lastStat ? {
          ...state,
          countdown: state.countdown - 1,
          stats: [{ ...lastStat, data: [...lastStat.data, action.stat] }, ...oldStats],
        } : state
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
    dispatch({ type: 'start', countdown: runCount, updater })
  }

  const onRender = useCallback(((
    id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
    phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
    actual, // время, затраченное на рендер зафиксированного обновления
    base // предполагаемое время рендера всего поддерева без кеширования
  ) => {
    dispatch({ type: 'iter', stat: { actual, base } })
  }) as ProfilerProps['onRender'], [])

  return (
    <div>
      <button onClick={() => startBench('noopRerender')}>re-render</button>
      <button onClick={() => startBench('remount')}>remount</button>
      <button onClick={() => startBench('remount', runCount)}>bench</button>

      {stats.map((experiment, i) => <div key={i}>{JSON.stringify(describeExperiment(experiment))}</div>)}

      <Stack column spacing='s' height={200} scroll>
        <BatchProfiler {...props} rev={rev} onRender={onRender} />
      </Stack>
    </div>
  )
}
