import { Slot, ComponentTheme } from '../../styled-system/'
import { dsl } from '../../theme'
import { IconProps } from '../Icon/contract'
import { CrossIcon } from '../Icon/icons/'
import { TextareaProps } from './contract'

export type TextareaTheme = ComponentTheme<TextareaProps, {
  Textarea: Slot
  IconClear: Slot<IconProps>
}>

export const textareaTheme = dsl.theme<TextareaTheme>()
  .defaultProps({
    variant: 'primary',
    size: 'm',
    deletePlaceholderOnFocus: true,
  })
  .slot('IconClear', {
    component: CrossIcon,
    color: 'gray28',
    area: 10,
    visible: props => Boolean(props.clearable),
    size: props => props.size,
  })
  .slot('Textarea', {
    focus: true,
    valign: 'top',
    lineHeight: 'normal',
    minHeight: props => props.size,
  })
  .build()
