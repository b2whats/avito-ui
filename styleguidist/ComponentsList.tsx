import React from 'react'
import { observer } from 'mobx-react-lite'
import DefaultComponentsList from 'react-styleguidist/lib/client/rsg-components/ComponentsList/ComponentsListRenderer'
import { platformFromPath } from './utils'
import { store } from './store'

export default observer(function ComponentsList(props: any) {
  const items = props.items.sort((a: any, b: any) => {
    return +(a.name > b.name) || -(a.name < b.name)
  }).filter((item: any) => {
    const platform = platformFromPath(item.filepath)
    return platform === 'universal' || platform === store.theme
  })

  return <DefaultComponentsList items={items} />
})
