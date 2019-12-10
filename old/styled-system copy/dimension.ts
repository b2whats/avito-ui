import { Tokens } from '../theme/'

type Width = number
type Height = 's' | 'm' | 'l' | number

export type Dimensions = {
  /** Тип отображения элемента */
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex',
  /** Блочное поведение */
  block?: boolean,
  /** Строчное поведение */
  inline?: boolean,
  /** Ширина блока */
  width?: Width,
  /** Максимальная ширина блока */
  maxWidth?: Width,
  /** Минимальная ширина блока */
  minWidth?: Width,
  /** Высота блока */
  height?: Height,
  /** Минимальная высота блока */
  minHeight?: Height,
  /** Максимальная высота блока */
  maxHeight?: Height,
}

type DimensionsProps = {
  theme: Tokens,
} & Dimensions

const computedWidth = (value: Width) => value > 1 ? `${value}px` : `${value * 100}%`
const computedHeight = (value: Height, sizes: Tokens['dimension']['rowHeight']): string => {
  if (typeof value === 'string') {
    return sizes[`${value}_height`]
  } else {
    return value > 1 ? `${value}px` : `${value * 100}%`
  }
}

const mapBlock = (display?: string) => (display ? {
  block: 'block',
  inline: 'block',
  'inline-block': 'block',
  'flex': 'flex',
  'inline-flex': 'flex',
}[display] : 'block')

const mapInline = (display?: string) => (display ? {
  block: 'inline-block',
  inline: 'inline',
  'inline-block': 'inline-block',
  'flex': 'inline-flex',
  'inline-flex': 'inline-flex',
}[display] : 'inline-block')


export const dimension = ({ width, minWidth, maxWidth, height, minHeight, maxHeight, display, block, inline, theme: { dimension } }: DimensionsProps): string => {
  let css = ''

  display && (css += `display: ${display};`)
  block && (css += `display: ${mapBlock(display)}; width: 100%;`)
  inline && (css += `display: ${mapInline(display)};`)

  width && (css += `width: ${computedWidth(width)};`)
  minWidth && (css += `min-width: ${computedWidth(minWidth)};`)
  maxWidth && (css += `max-width: ${computedWidth(maxWidth)};`)
  height && (css += `height: ${computedHeight(height, dimension.rowHeight)};`)
  minHeight && (css += `min-height: ${computedHeight(minHeight, dimension.rowHeight)};`)
  maxHeight && (css += `max-height: ${computedHeight(maxHeight, dimension.rowHeight)};`)

  return css
}