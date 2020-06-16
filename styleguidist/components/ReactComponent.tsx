import React from 'react'
import ReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent'
import { ThemeStore } from '../store'
import { useStore } from 'effector-react'
import { platformFromPath } from '../utils'

// Прячем неподдерживаемые платформой компоненты
const ReactComponentWrapper = (props: any) => {
  const theme = useStore(ThemeStore)

  const platform = platformFromPath(props.component.filepath)
  if (platform !== 'universal' && theme.platform !== platform) {
    return null
  }
  return <ReactComponent { ...props } />
}

export default ReactComponentWrapper