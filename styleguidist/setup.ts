import { useStore } from 'effector-react'
import { useState, useRef } from 'react'
import * as helpers from './components'
import { ProfilePlayground } from './components/ProfilePlayground'
import { ThemeStore } from './store'

for (const name in helpers) {
  global[name] = helpers[name]
}

global['useState'] = useState
global['useRef'] = useRef
global['useStore'] = useStore
global['ThemeStore'] = ThemeStore
global['ProfilePlayground'] = ProfilePlayground

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
