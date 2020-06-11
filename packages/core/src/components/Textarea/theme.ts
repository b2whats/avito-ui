import { Slot, ComponentTheme } from '../../styled-system/'
import { CrossIcon } from '../Icon/'
import { IconProps } from '../Icon/contract'
import { TextareaProps } from './contract'

export type TextareaTheme = ComponentTheme<TextareaProps, {
  Textarea: Slot,
  IconClear: Slot<IconProps>,
}, {
  deletePlaceholderOnFocus: boolean,
}>

export const textareaTheme: TextareaTheme = {
  deletePlaceholderOnFocus: true,
  defaultProps: {
    variant: 'primary',
    size: 'm',
  },
  scheme: {
    IconClear: {
      component: CrossIcon,
      props: {
        color: 'gray28',
        area: 10,
        visible: props => Boolean(props.clearable),
        size: props => props.size,
      },
    },
    Textarea: {
      style: {
        focus: true,
        lineHeight: 'normal',
        minHeight: props => props.size,
      },
    },
  },
}
