import { Slot, ComponentTheme, TextProps, StackProps, BoxProps, dsl } from '@avito/core'
import { ListItemProps } from './contract'

export type ListItemTheme = ComponentTheme<ListItemProps, {
  ListItem: Slot<StackProps>
  Before: Slot<BoxProps>
  StackText: Slot<StackProps>
  Label: Slot<TextProps>
  Link: Slot<TextProps>
  Caption: Slot<TextProps>
  After: Slot<BoxProps>
}>

export const listItemTheme = dsl.theme<ListItemTheme>()
  .defaultProps({
    beforeTreshold: 82,
    afterTreshold: 82,
  })
  .slot('ListItem', slot => [
    {
      pt: 10,
      pb: 12,
      px: 16,
      spacing: 16,
      valign: 'middle',
      minHeight: 52,
    },
    slot.if('onClick', {
      bgActive: 'gray4',
    }),
  ])
  .slot('StackText', {
    spacing: 2,
  })
  .slot('Label', slot => [
    {
      size: 'm',
    },
    slot.if('disabled', {
      color: 'gray48',
    }),
  ])
  .slot('Caption', slot => [
    {
      size: 's',
      color: 'gray40',
    },
    slot.if('disabled', {
      color: 'gray32',
    }),
  ])
  .slot('Link', {
    size: 's',
  })
  .build()
