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
        borderRadius: 5,
        bg: 'gray4',
        p: 4,
      },
    },
    slot.switch('size', {
      s: {
        style: {
          height: 32,
        },
      },
      m: {
        style: {
          height: 44,
        },
      },
      l: {
        style: {
          height: 50,
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
