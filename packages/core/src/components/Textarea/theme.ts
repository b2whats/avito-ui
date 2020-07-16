import { Slot, ComponentTheme } from '../../styled-system/'
import { IconProps } from '../Icon/contract'
import { CrossIcon } from '../Icon/icons/'
import { TextareaProps } from './contract'

export type TextareaTheme = ComponentTheme<TextareaProps, {
  Textarea: Slot
  IconClear: Slot<IconProps>
}>

export const textareaTheme: TextareaTheme = {
  defaultProps: {
    variant: 'primary',
    size: 'm',
    deletePlaceholderOnFocus: true,
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
