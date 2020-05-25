import React from 'react'
import ReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent'
import getInfoFromHash from 'react-styleguidist/lib/client/utils/getInfoFromHash'
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown'
import { ThemeStore } from '../store'
import { useStore } from 'effector-react'
import { platformFromPath } from '../utils'

// Прячем неподдерживаемые платформой компоненты
const ReactComponentWrapper = (props: any) => {
  const store = useStore(ThemeStore)

  const platform = platformFromPath(props.component.filepath)
  if (platform !== 'universal' && store.platform !== platform) {
    // Прячем в списке компонентов
    if (!getInfoFromHash(window.location.hash).targetName) {
      return null
    }

    // Явное сообщение на отдельной странице неподдерживаемого компонента (/#/SegmentButton)
    const message = `##${ props.component.visibleName }\nNot supported on ${ store.platform } — try another platform.`
    return <Markdown text={message} />
  }
  return <ReactComponent { ...props } />
}

export default ReactComponentWrapper