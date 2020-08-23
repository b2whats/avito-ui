import { ComponentTheme, Slot } from '../../styled-system'
import { dsl } from '../../theme'
import { BoxProps, StackProps } from '../Layout'
import { TextProps } from '../Text/'
import { MeterProps } from './contract'

export type MeterTheme = ComponentTheme<MeterProps, {
  Meter: Slot<StackProps>
  Progress: Slot<BoxProps>
  ProgressActive: Slot<BoxProps>
  Label: Slot<TextProps>
  Caption: Slot<TextProps>
  Content: Slot<TextProps>
}>

export const meterTheme = dsl.theme<MeterTheme>()
  .defaultProps({
    size: 'm',
    value: 0,
  })
  .mapProps(({ value, dynamic }) => {
    if (!dynamic || value === undefined) return

    const range = [...dynamic, 1]
    const variants = ['success', 'warning', 'error'] as const

    return {
      variant: variants[range.findIndex(rangeValue => value <= rangeValue)],
    }
  })
  .slot('Meter', slot => [
    {
      spacing: slot.mapped('size', { s: 6, m: 8 }),
    },
  ])
  .slot('Progress', slot => [
    {
      shape: 'pill',
      overflow: 'hidden',
      block: true,
      color: 'black',
      position: 'relative',
      height: slot.mapped('size', { s: 10, m: 20 }),
      align: 'center',
      valign: 'middle',
    },
    slot.switch('variant', {
      success: {
        bg: 'green100',
      },
      warning: {
        bg: 'orange100',
      },
      error: {
        bg: slot.mapped('size', { s: 'red200', m: 'red100' }),
      },
    }),
    slot.if(props => props.disabled, {
      bg: 'gray4',
    }),
  ])
  .slot('ProgressActive', slot => [
    {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
    },
    slot.switch('variant', {
      success: {
        bg: slot.mapped('size', { s: 'green500', m: 'green200' }),
      },
      warning: {
        bg: slot.mapped('size', { s: 'orange700', m: 'orange500' }),
      },
      error: {
        bg: slot.mapped('size', { s: 'red500', m: 'red300' }),
      },
    }),
    slot.if(props => props.disabled, {
      bg: 'gray16',
    }),
  ])
  .slot('Label', slot => [
    {
      size: props => props.size,
      ml: slot.mapped('size', { s: 2, m: 4 }),
      color: 'black',
    },
  ])
  .slot('Caption', slot => [
    {
      size: props => props.size,
      mr: slot.mapped('size', { s: 2, m: 4 }),
      ml: 'auto',
      color: 'gray44',
    },
  ])
  .slot('Content', {
    position: 'relative',
    size: 's',
    color: 'black',
  })
  .build()
