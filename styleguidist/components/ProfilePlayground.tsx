import React, { ReactNode, Profiler, ProfilerProps, useState, useCallback } from 'react'
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

export const ProfilePlayground = (props: Omit<ProfileProps, 'onRender'>) => {
  const [rev, setState] = useState(1)
  const [stats, setStatsObject] = useState<any>(null)
  const setStats: ProfilerProps['onRender'] = (
    id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
    phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
    actualDuration, // время, затраченное на рендер зафиксированного обновления
    baseDuration, // предполагаемое время рендера всего поддерева без кеширования
    startTime, // когда React начал рендерить это обновление
    commitTime, // когда React зафиксировал это обновление
    interactions // Множество «взаимодействий» для данного обновления
  ) => setStatsObject({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions })
  const remount = () => {
    setState(0)
    setTimeout(() => setState(1), 100)
  }

  return (
    <div>
      <button onClick={() => setState(rev + 1)}>re-render</button>
      <button onClick={remount}>remount</button>
      {stats && (
        <div>
          {stats.phase}:&nbsp;
          {stats.actualDuration.toFixed(2)}ms&nbsp;
          ({stats.baseDuration.toFixed(2)} base)
        </div>) }
      <Stack column spacing='s' height={200} scroll>
        <BatchProfiler {...props} rev={rev} onRender={useCallback(setStats, [])} />
      </Stack>
    </div>
  )
}
