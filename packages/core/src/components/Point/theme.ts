import { ComponentTheme, Slot } from '../../styled-system'
import { dsl } from '../../theme'
import { PointProps } from './contract'

export type PointTheme = ComponentTheme<PointProps, { Point: Slot }>

const sizes = { s: 6, m: 8, l: 12 }
export const pointTheme = dsl.theme<PointTheme>()
  .defaultProps({
    size: 'm',
    variant: 'error',
  })
  .mapProps((props) => ({
    // specifying anything gap-related enables gap
    gapSize: (props.gap || props.gapColor) ? 2 : 0,
    gapColor: (props.gap || props.gapSize) ? 'white' : undefined,
    // show by default if count missing or positive
    show: !('count' in props) || Number(props.count) > 0,
    ...props,
    size: sizes[props.size!] || props.size,
  }))
  .slot('Point', slot => [
    {
      cursor: 'inherit',
      zIndex: 2,
      shape: 'circle',
      valignSelf: 'middle',
      width: props => props.size,
      height: props => props.size,
      bg: slot.mapped('variant', {
        primary: 'blue500',
        secondary: 'gray24',
        success: 'green600',
        warning: 'orange700',
        error: 'red500',
      }, 'black'),
      mx: props => props.pulse ? 0.75 * (props.size as number) : 0,
    },
  ])
  .build()
