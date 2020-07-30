import { dsl, IconTheme } from '@avito/core'

export const iconTheme = dsl.theme<IconTheme>()
  .slot('Icon', slot => slot.if(props => props.size === 'l', {
    style: {
      height: 28,
    },
  }))
  .build()
