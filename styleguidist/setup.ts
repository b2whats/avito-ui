import { useState } from 'react'
import * as helpers from './components'

for (const name in helpers) {
  global[name] = helpers[name]
}

global['useState'] = useState

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