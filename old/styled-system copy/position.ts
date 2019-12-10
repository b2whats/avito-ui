export type Position = {
  /** Позиционирование элемента */
  position?: 'static' | 'relative' | 'absolute' | 'fixed',
  /** Верхняя позиция */
  top?: number,
  /** Правая позиция */
  right?: number,
  /** Нижняя позиция */
  bottom?: number,
  /** Левая позиция */
  left?: number,
}

const computedPosition = (value: number) => value > 1 ? `${value}px` : `${value * 100}%`

export const position = ({ position, top, right, bottom, left }: Position): string => {
  let css = ''

  position && (css += `position: ${position};`)
  typeof top === 'number' && (css += `top: ${computedPosition(top)};`)
  typeof right === 'number' && (css += `right: ${computedPosition(right)};`)
  typeof bottom === 'number' && (css += `bottom: ${computedPosition(bottom)};`)
  typeof left === 'number' && (css += `left: ${computedPosition(left)};`)

  return css
}