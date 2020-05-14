import { SchemeType } from '../../styled-system/'
import { ToggleProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'

export type ToggleTheme = {
  defaultProps?: Partial<ToggleProps>,
  scheme: {
    Toggle: SchemeType<ToggleProps>,
    Switch: SchemeType<ToggleProps>,
    Icon: SchemeType<ToggleProps, IconProps>,
    Label: SchemeType<ToggleProps, TextProps>,
  },
}

export const toggleTheme: ToggleTheme = {
  defaultProps: {
    labelPosition: 'end',
  },
  scheme: {
    Toggle: {},
    Switch: {},
    Icon: {},
    Label: {
      props: {
        size: 'm',
      },
      disabled: {
        props: {
          color: 'gray48',
        },
      },
      labelPosition: {
        start: {
          props: {
            mr: 16,
          },
        },
        end: {
          props: {
            ml: 16,
          },
        },
      },
    },
  },
}