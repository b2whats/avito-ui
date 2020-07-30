import { dsl, ComponentTheme, Slot } from '@avito/core'
import { SegmentButtonProps } from './contract'

export type SegmentButtonTheme = ComponentTheme<SegmentButtonProps, {
  Group: Slot
  Button: Slot
  Slide: Slot
}>

export const segmentButtonTheme = dsl.theme<SegmentButtonTheme>()
  .defaultProps({
    size: 'm',
  })
  .slot('Group', slot => ({
    borderRadius: 5,
    bg: 'gray4',
    p: 4,
    height: slot.mapped('size', { s: 32, m: 44, l: 50 }),
  }))
  .slot('Button', {
    focus: true,
    borderRadius: 5,
    color: 'gray48',
    colorChecked: 'black',
    colorDisabled: 'gray24',
  })
  .slot('Slide', {
    borderRadius: 5,
    bg: 'white',
  })
  .build()
