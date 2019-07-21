import { palette } from './palette'
import { sizes } from './sizes'
import { variants } from './variants'
import { font } from './font'
import { spaces } from './spaces'
import { breakpoints } from './breakpoints'
import { focus } from './focus'

export const tokens = {
  font,
  focus,
  spaces,
  variants,
  palette,
  sizes,
  breakpoints,
}

export type Tokens = typeof tokens
