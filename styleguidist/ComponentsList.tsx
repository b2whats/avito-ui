import React from 'react'
import DefaultComponentsList from 'react-styleguidist/lib/client/rsg-components/ComponentsList/ComponentsListRenderer'
import { platformFromPath } from './utils'
import { ThemeStore } from './store'
import { useStore } from 'effector-react'

export default function ComponentsList(props: any) {
  const theme = useStore(ThemeStore)

  // only sort components
  const useSort = props.items.some((e: any) => e.hasExamples)
  const items = useSort ? props.items.sort((a: any, b: any) => {
    return +(a.name > b.name) || -(a.name < b.name)
  }).filter((item: any) => {
    const platform = platformFromPath(item.filepath)
    return platform === 'universal' || platform === theme.platform
  }) : props.items

  return <DefaultComponentsList items={items} />
}
