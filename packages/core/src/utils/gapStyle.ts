import type { Tokens } from '@avito/tokens'
import type { Colors } from '../styled-system'

export type GapOptions = {
  gap?: boolean
  gapSize?: number
  gapColor?: Colors
}

export function gapStyle(options: GapOptions, palette: Tokens['palette']) {
  // passing gap size or color enables gap
  const { gap = (options.gapSize || options.gapColor) } = options
  if (!gap) return ''
  const { gapSize = 2, gapColor = 'white' } = options
  return `box-shadow: 0 0 0 ${ gapSize }px ${ palette[gapColor] || gapColor };`
}
