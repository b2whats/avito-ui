import { PositionerProps } from './contract'

export type PositionerTheme = {
  defaultProps?: Partial<PositionerProps>,
  transitions: {
    fade: object
  },
}

export const positionerTheme: PositionerTheme = {
  defaultProps: {
    delay: 0,
    strategy: 'absolute',
    placement: 'bottom',
  },
  transitions: {
    fade: {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    },
  },
}