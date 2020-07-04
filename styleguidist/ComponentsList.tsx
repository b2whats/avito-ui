import { useStore } from 'effector-react'
import React from 'react'
import DefaultComponentsList from 'react-styleguidist/lib/client/rsg-components/ComponentsList/ComponentsListRenderer'
import { StyleguideStore } from './store'
import { platformFromPath } from './utils'

export default function ComponentsList(props: any) {
  const theme = useStore(StyleguideStore)

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
