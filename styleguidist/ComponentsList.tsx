import React from 'react'
import DefaultComponentsList from 'react-styleguidist/lib/client/rsg-components/ComponentsList/ComponentsListRenderer'

export default function ComponentsList(props: any) {
  const items = props.items.sort((a: any, b: any) => {
    return +(a.name > b.name) || -(a.name < b.name)
  })

  return <DefaultComponentsList items={items} />
}