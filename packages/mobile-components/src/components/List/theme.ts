import { Slot, ComponentTheme, TextProps, StackProps, BoxProps } from '@avito/core'
import { ListItemProps } from './contract'

export type ListItemTheme = ComponentTheme<ListItemProps, {
  ListItem: Slot<StackProps>,
  Before: Slot<BoxProps>,
  StackText: Slot<StackProps>,
  Label: Slot<TextProps>,
  Link: Slot<TextProps>,
  Caption: Slot<TextProps>,
  After: Slot<BoxProps>,
}>

export const listItemTheme: ListItemTheme = {
  defaultProps: {
    beforeTreshold: 82,
    afterTreshold: 82,
  },
  scheme: {
    ListItem: {
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
    },
    Before: {
      props: {

      },
    },
    StackText: {
      props: {
        spacing: 2,
      },
    },
    Label: {
      props: {
        size: 'm',
      },
      disabled: {
        props: {
          color: 'gray48',
        },
      },
    },
    Caption: {
      props: {
        size: 's',
        color: 'gray40',
      },
      disabled: {
        props: {
          color: 'gray32',
        },
      },
    },
    Link: {
      props: {
        size: 's',
      },
    },
    After: {
      props: {

      },
    },
  },
}
