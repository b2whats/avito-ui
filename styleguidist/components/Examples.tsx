import { useStore } from 'effector-react'
import React from 'react'
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples/Examples'
import { StyleguideStore } from '../store'
import { filterMarkdown } from '../utils'

export default function PlatformExamples(props: any) {
  const { platform } = useStore(StyleguideStore)

  return <Examples {...props} examples={filterMarkdown(props.examples, platform)} />
}
