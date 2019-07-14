import { palette } from './palette'
import { sizes } from './sizes'
import { variance } from './variance'
import { font } from './font'
import { spaces } from './spaces'

export const tokens = {
  font,
  spaces,
  variance,
  palette,
  sizes,
}

export type Tokens = typeof tokens
