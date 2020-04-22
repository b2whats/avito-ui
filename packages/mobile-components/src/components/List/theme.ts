import { SchemeType } from '@avito/core'
import { ListItemProps } from './contract'
import { TextProps } from '@avito/core'
import { StackProps, BoxProps } from '@avito/core'

export type ListItemTheme = {
  beforeTreshold: number,
  afterTreshold: number,
  scheme: {
    ListItem: SchemeType<ListItemProps, StackProps>,
    Before: SchemeType<ListItemProps, BoxProps>,
    StackText: SchemeType<ListItemProps, StackProps>,
    Label: SchemeType<ListItemProps, TextProps>,
    Link: SchemeType<ListItemProps, TextProps>,
    Caption: SchemeType<ListItemProps, TextProps>,
    After: SchemeType<ListItemProps, BoxProps>,
  },
}

export const listItemTheme: ListItemTheme = {
  beforeTreshold: 82,
  afterTreshold: 82,
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