import { TransitionFrom, TransitionTo } from 'react-spring'
import { PositionerProps } from './contract'

export type TransitionProps<T = boolean> = {
  initial: TransitionFrom<T>,
  from: TransitionFrom<T>,
  enter: TransitionTo<T>,
  leave: TransitionTo<T>,
}

export type PositionerTheme = {
  defaultProps?: Partial<PositionerProps>,
  transitions: {
    fade: TransitionProps
  },
}

export const positionerTheme: PositionerTheme = {
  defaultProps: {
    delayIn: 100,
    delayOut: 100,
    strategy: 'absolute',
    placement: 'bottom',
  },
  transitions: {
    fade: {
      initial: { opacity: 1 },
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    },
  },
}