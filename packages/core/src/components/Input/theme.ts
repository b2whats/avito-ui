import { SchemeType } from '../../styled-system/'
import { dsl } from '../../theme'
import { InputProps } from './contract'
import { CrossIcon } from '../Icon/'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'

export type InputTheme = {
  defaultProps: Partial<InputProps>,
  deletePlaceholderOnFocus: boolean,
  scheme: {
    IconBefore: SchemeType<InputProps, IconProps>,
    InputField: SchemeType<InputProps>,
    Prefix: SchemeType<InputProps, TextProps>,
    Input: SchemeType<InputProps>,
    Postfix: SchemeType<InputProps, TextProps>,
    IconAfter: SchemeType<InputProps, IconProps>,
  },
}

export const inputTheme: InputTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
  },
  deletePlaceholderOnFocus: true,
  scheme: {
    IconBefore: {
      props: {
        color: 'gray28',
      },
      size: dsl.propMap('size', {
        s: 's',
        m: 's',
        l: 'm',
      } as const),
    },
    IconAfter: {
      props: {
        color: 'gray28',
      },
      clearable: {
        component: CrossIcon,
        props: {
          area: 10,
        },
      },
      size: dsl.propMap('size', {
        s: 's',
        m: 's',
        l: 'm',
      } as const),
    },
    Prefix: {
    },
    Postfix: {
      props: {
        ml: 4,
      },
    },
    InputField: {},
    Input: {
      style: {
        focus: true,
      },
      size: dsl.styleMap('height', {
        s: 's',
        m: 'm',
        l: 'l',
      } as const),
    },
  },
}