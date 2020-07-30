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
  .slot('Group', slot => [
    {
      style: {
        bg: 'gray4',
      },
    },
    slot.switch('size', {
      s: {
        style: {
          borderRadius: 5,
          height: 32,
          p: 4,
        },
      },
      m: {
        style: {
          borderRadius: 5,
          height: 44,
          p: 4,
        },
      },
      l: {
        style: {
          borderRadius: 5,
          height: 50,
          p: 4,
        },
      },
    }),
  ])
  .slot('Button', {
    style: {
      focus: true,
      borderRadius: 5,
      color: 'gray48',
      colorChecked: 'black',
      colorDisabled: 'gray24',
    },
  })
  .slot('Slide', {
    style: {
      borderRadius: 5,
      bg: 'white',
    },
  })
  .build()
