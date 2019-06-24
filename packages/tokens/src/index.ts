import { palette } from './palette'
import { sizes } from './sizes'
import { variance } from './variance'

export const tokens = {
  fontSize: '15px',
  variance,
  palette,
  sizes,
}

export type Tokens = typeof tokens
