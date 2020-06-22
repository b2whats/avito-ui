import { Slot, ComponentTheme } from '../../styled-system/'
import { CrossIcon } from '../Icon/'
import { IconProps } from '../Icon/contract'
import { TextProps } from '../Text/contract'
import { InputProps } from './contract'

export type InputTheme<Props = InputProps> = ComponentTheme<Props, {
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
        size: ({ size }) => size === 'l' ? 'm' : 's',
      },
    },
    IconAfter: {
      props: {
        color: 'gray28',
      },
      clearable: {
        component: CrossIcon,
        props: {
          area: 10,
          size: ({ size }) => size === 'l' ? 'm' : 's',
        },
      },
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
        height: ({ size }) => size,
      },
    },
  },
}
