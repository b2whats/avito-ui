import React from 'react'
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples/Examples'
import { filterMarkdown } from '../utils'
import { ThemeStore } from '../store'
import { useStore } from 'effector-react'

export default function PlatformExamples(props: any) {
  const store = useStore(ThemeStore)

  return <Examples {...props} examples={filterMarkdown(props.examples, store.platform)} />
}
