import { useStore } from 'effector-react'
import React from 'react'
import ReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent'
import { StyleguideStore } from '../store'
import { platformFromPath } from '../utils'

// Прячем неподдерживаемые платформой компоненты
const ReactComponentWrapper = (props: any) => {
  const { platform } = useStore(StyleguideStore)

  if (!['universal', platform].includes(platformFromPath(props.component.filepath))) {
    return null
  }
  return <ReactComponent {...props} />
}

export default ReactComponentWrapper
