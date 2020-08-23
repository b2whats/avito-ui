import { useStore } from 'effector-react'
import { useState, useRef } from 'react'
import * as helpers from './components'
import { ProfilePlayground } from './components/ProfilePlayground'
import { StyleguideStore } from './store'

for (const name in helpers) {
  global[name] = helpers[name]
}

global['useState'] = useState
global['useRef'] = useRef
global['useStore'] = useStore
global['StyleguideStore'] = StyleguideStore
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

const is = (value: any) => value != null
const has = (object: object, prop: string | number) => Object.prototype.hasOwnProperty.call(object, prop)
const isNumber = (value: any) => {
  if (typeof value === 'string' && (value.endsWith('.') || value === '')) {
    return false
  }

  return value - value === 0
}
const isObject = (value: any) => value && value.constructor && value.constructor === Object
const assoc = (prop: string, value: any, object: {}) => {
  var result = {...object}

  result[prop] = value
  return result
}
global['isNumber'] = isNumber
global['updateObject'] = (path: string, value: any) => (target: any[] | object) => {
  const stack = Array.isArray(path) ? path : path.split('.')

  var idx = stack[0]
  if (stack.length > 1) {
    var nextObj = (is(target) && has(target, idx)) ? target[idx] : isNumber(stack[1]) ? [] : {}
    stack.shift()
    value = global['updateObject'](stack, value)(nextObj)
  }
  if (isNumber(idx) && Array.isArray(target)) {
    var arr = [...target]
    arr[idx] = value

    return arr
  } else {
    return assoc(idx, value, target)
  }
}

global['propsToText'] = <T extends { children: any }>(name: string, props: T, mapProps: (props: T) => T) => {
  let result = []

  if (name) {
    result.push(`<${name}`)
  }

  if (mapProps) {
    props = mapProps(props)
  }

  for (let [key, value] of Object.entries(props)) {
    if (!is(value)) continue
    if (value === '') continue
    if (key === 'children') continue

    if (typeof value === 'string') {
      result.push(`${key}='${value}'`)
      continue
    }
    if (key === 'disabled' && value === false) {
      continue
    }
    if (typeof value === 'number' || value === false) {
      result.push(`${key}={${value}}`)
      continue
    }
    if (value === true) {
      result.push(key)
      continue
    }
    if (Array.isArray(value) || isObject(value)) {
      value = JSON.stringify(value)
    }

    result.push(`${key}={${value}}`)
  }
  if (name) {
    result.push('>')
  }

  if (props.children) {
    result.push('\n\r\t' + props.children + '\n\r')
  }

  if (name) {
    result.push(`</${name}>`)
  }

  return result.join(' ')
}
