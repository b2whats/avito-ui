import { ComponentTheme } from '../../theme'
import { SchemeType } from '../../styled-system'
import { ListItemProps } from './contract'
import { TextProps } from '../Text/contract'
import { StackProps, BoxProps } from '../Layout/contract'

export type ListItemTheme = {
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

export const listItemTheme: ComponentTheme<ListItemTheme> = (_, override) => {
  const scheme: ListItemTheme['scheme'] = {
    ListItem: {
      props: {
        pt: 10,
        pb: 12,
        px: 16,
        space: 16,
        valign: 'middle',
      },
      style: {
        backgroundColorActive: 'gray4',
      },
    },
    Before: {
      props: {

      },
    },
    StackText: {
      props: {
        space: 2,
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
  }

  return {
    scheme,
  }
}