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
  .slot('ListItem', {
    props: {
      pt: 10,
      pb: 12,
      px: 16,
      spacing: 16,
      valign: 'middle',
      minHeight: 52,
    },
    onClick: {
      props: {
        bgActive: 'gray4',
      },
    },
  })
  .slot('Before', {
    props: {

    },
  })
  .slot('StackText', {
    props: {
      spacing: 2,
    },
  })
  .slot('Label', {
    props: {
      size: 'm',
    },
    disabled: {
      props: {
        color: 'gray48',
      },
    },
  })
  .slot('Caption', {
    props: {
      size: 's',
      color: 'gray40',
    },
    disabled: {
      props: {
        color: 'gray32',
      },
    },
  })
  .slot('Link', {
    props: {
      size: 's',
    },
  })
  .slot('After', {
    props: {

    },
  })
  .build()
