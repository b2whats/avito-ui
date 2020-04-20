import React from 'react'
import { observer } from 'mobx-react-lite'
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples/Examples'
import { filterMarkdown } from '../utils'
import { store } from '../store'

export default observer(function PlatformExamples(props: any) {
  return <Examples {...props} examples={filterMarkdown(props.examples, store.theme)} />
})
