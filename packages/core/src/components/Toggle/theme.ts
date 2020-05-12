import { SchemeType } from '../../styled-system/'
import { ToggleProps } from './contract'
import { TextProps } from '../Text/contract'
import { IconProps } from '../Icon/contract'

export type ToggleTheme<Props = ToggleProps> = {
  defaultProps?: Partial<Props>,
  scheme: {
    Toggle: SchemeType<Props>,
    Switch: SchemeType<Props>,
    Icon: SchemeType<Props, IconProps>,
    Label: SchemeType<Props, TextProps>,
  },
}

export const toggleTheme: ToggleTheme = {
  defaultProps: {
    labelPosition: 'end',
    size: 'm',
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
    },
  },
}