import { useState } from 'react'
import { useStore } from 'effector-react'
import * as helpers from './components'
import { ThemeStore } from './store'

for (const name in helpers) {
  global[name] = helpers[name]
}

global['useState'] = useState
global['useStore'] = useStore
global['ThemeStore'] = ThemeStore

global['copyText'] = (text: string) => {
  const textNode = document.createElement('textarea')
  textNode.value = text
  textNode.style.position = 'absolute'
  textNode.style.left = '-9999px'
  document.body.appendChild(textNode)
  textNode.select()
  document.execCommand('copy')
  document.body.removeChild(textNode)
}