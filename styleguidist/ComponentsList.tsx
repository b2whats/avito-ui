import React from 'react'
import { observer } from 'mobx-react-lite'
import DefaultComponentsList from 'react-styleguidist/lib/client/rsg-components/ComponentsList/ComponentsListRenderer'
import { platformFromPath } from './utils'
import { store } from './store'

export default observer(function ComponentsList(props: any) {
  // only sort components
  const useSort = props.items.some((e: any) => e.hasExample)
  const items = useSort ? props.items.sort((a: any, b: any) => {
    return +(a.name > b.name) || -(a.name < b.name)
  }).filter((item: any) => {
    const platform = platformFromPath(item.filepath)
    return platform === 'universal' || platform === store.platform
  }) : props.items

  return <DefaultComponentsList items={items} />
})
