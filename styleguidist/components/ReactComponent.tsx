import React from 'react'
import { observer } from 'mobx-react-lite'
import ReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent'
import getInfoFromHash from 'react-styleguidist/lib/client/utils/getInfoFromHash'
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown'
import styled from '@avito/core/styled-system/'
import { store } from '../store'
import { platformFromPath } from '../utils'

// Прячем неподдерживаемые платформой компоненты
export default observer((props: any) => {
  const platform = platformFromPath(props.component.filepath)
  if (platform !== 'universal' && store.theme !== platform) {
    // Прячем в списке компонентов
    if (!getInfoFromHash(window.location.hash).targetName) {
      return null
    }

    // Явное сообщение на отдельной странице неподдерживаемого компонента (/#/SegmentButton)
    const message = `##${ props.component.visibleName }\nNot supported on ${ store.theme } — try another platform.`
    return <Markdown text={message} />
  }
  return <ReactComponent { ...props } />
})
