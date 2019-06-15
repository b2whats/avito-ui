import React from 'react'

export interface IconProps {
  /** Имя иконки */
  name: string,
  /** Размер иконки */
  size?: string,
  /** Цвет иконки */
  color?: string,
  /** Дополнительный стиль */
  className?: string,
  /** Аттрибут для тестирования */
  marker?: string,
  onClick?(event: React.MouseEvent<SVGSVGElement>): void,
}