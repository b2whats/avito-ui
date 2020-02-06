import { ComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { ToggleProps } from './contract'
import { TextProps } from '../Text/contract'

export type ToggleTheme = {
  scheme: {
    Toggle: SchemeType<ToggleProps>,
    Switch: SchemeType<ToggleProps>,
    Label: SchemeType<ToggleProps, TextProps>,
  },
}

export const toggleTheme: ComponentTheme<ToggleTheme> = (_, override) => {
  const scheme: ToggleTheme['scheme'] = {
    Toggle: {},
    Switch: {},
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
  }

  return {
    scheme,
  }
}
