import { ComponentTheme, Slot } from '../../styled-system'
import { dsl } from '../../theme'
import { PointProps } from './contract'

export type PointTheme = ComponentTheme<PointProps, { Point: Slot }>

const sizes = { s: 6, m: 8, l: 12 }
export const pointTheme = dsl.theme<PointTheme>()
  .defaultProps({
    size: 'm',
  })
  .mapProps((props) => ({
    // specifying anything gap-related enables gap
    gapSize: (props.gap || props.gapColor) ? 2 : 0,
    gapColor: (props.gap || props.gapSize) ? 'white' : undefined,
    // show by default if count missing or positive
    show: !('count' in props) || Number(props.count) > 0,
    ...props,
  }))
  .slot('Point', slot => [
    {
      cursor: 'inherit',
      zIndex: 2,
      shape: 'circle',
      width: slot.mapped('size', sizes, size => size),
      height: slot.mapped('size', sizes, size => size),
      bg: 'red500',
      valignSelf: 'middle',
    },
  ])
  .build()
