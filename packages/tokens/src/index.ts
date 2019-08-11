import merge from 'deepmerge'

import { palette } from './palette'
import { sizes } from './sizes'
import { variants } from './variants'
import { font } from './font'
import { spaces } from './spaces'
import { breakpoints } from './breakpoints'
import { focus } from './focus'
import { shadows } from './shadows'

export const tokens = {
  font,
  focus,
  spaces,
  variants,
  palette,
  sizes,
  breakpoints,
  shadows,
}

export type Tokens = typeof tokens
export const createTokens = (override: Partial<Tokens>) => merge(tokens, override)

