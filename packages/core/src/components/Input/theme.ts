import { Slot, ComponentTheme } from '../../styled-system/'
import { dsl } from '../../theme'
import { CrossIcon } from '../Icon/'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'
import { InputProps } from './contract'

export type InputTheme = ComponentTheme<InputProps, {
  IconBefore: Slot<IconProps>,
  InputField: Slot,
  Prefix: Slot<TextProps>,
  Input: Slot,
  Postfix: Slot<TextProps>,
  IconAfter: Slot<IconProps>,
}, {
  deletePlaceholderOnFocus: boolean,
}>

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