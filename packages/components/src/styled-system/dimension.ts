export type Dimensions = {
  /** Ширина блока */
  width?: number,
  /** Максимальная ширина блока */
  maxWidth?: number,
  /** Минимальная ширина блока */
  minWidth?: number,
  /** Высота блока */
  height?: number,
  /** Минимальная высота блока */
  minHeight?: number,
  /** Максимальная высота блока */
  maxHeight?: number,
}

const computedWidth = (value: number) => value > 1 ? `${value}px` : `${value * 100}%`

export const dimension = ({ width, minWidth, maxWidth, height, minHeight, maxHeight }: Dimensions): string => {
  let css = ''

  width && (css += `width: ${computedWidth(width)};`)
  minWidth && (css += `min-width: ${computedWidth(minWidth)};`)
  maxWidth && (css += `max-width: ${computedWidth(maxWidth)};`)
  height && (css += `height: ${computedWidth(height)};`)
  minHeight && (css += `min-height: ${computedWidth(minHeight)};`)
  maxHeight && (css += `max-height: ${computedWidth(maxHeight)};`)

  return css
}