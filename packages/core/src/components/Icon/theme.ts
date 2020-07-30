import { ComponentTheme, Slot } from '../../styled-system/'
import { dsl } from '../../theme'
import { BaseIconProps } from './contract'

export type IconTheme = ComponentTheme<BaseIconProps, {
  Icon: Slot
}>

export const iconTheme = dsl.theme<IconTheme>()
  .slot('Icon', slot => [
    slot.switch('size', {
      s: {
        style: {
          height: 16,
        },
      },
      m: {
        style: {
          height: 20,
        },
      },
      l: {
        style: {
          height: 24,
        },
      },
      xl: {
        style: {
          height: 28,
        },
      },
    }),
    slot.switch('variant', {
      primary: {
        style: {
          color: 'blue500',
        },
      },
      secondary: {
        style: {
          color: 'gray52',
        },
      },
      error: {
        style: {
          color: 'red500',
        },
      },
      success: {
        style: {
          color: 'green500',
        },
      },
      warning: {
        style: {
          color: 'yellow500',
        },
      },
    }),
  ])
  .build()
