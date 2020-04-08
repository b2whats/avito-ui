import React from 'react'
import { Icon } from '@avito/mobile-components'
import DefaultComponentsList from 'react-styleguidist/lib/client/rsg-components/ComponentsList/ComponentsListRenderer'

const embedIcon = (text: string, icon: string) => <>{text} <Icon name={ icon } /></> 
export default function ComponentsList(props: any) {
  const items = props.items.sort((a: any, b: any) => {
    return +(a.name > b.name) || -(a.name < b.name)
  }).map((item: any) => {
    if (/web-components/.test(item.filepath)) {
      return { ...item, visibleName: embedIcon(item.visibleName, 'web') }
    }
    if (/mobile-components/.test(item.filepath)) {
      return { ...item, visibleName: embedIcon(item.visibleName, 'mobile') }
    }
    return item
  })

  return <DefaultComponentsList items={items} />
}