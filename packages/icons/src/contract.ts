import React from 'react'

type MouseEvent = (event: React.MouseEvent<SVGSVGElement | HTMLButtonElement>) => void

export interface IconProps {
  /** Имя */
  name: string,
  /** Размер */
  size?: 'auto' | string | number,
  /** Цвет */
  color?: string,
  /** Цвет при наведении */
  colorHover?: string,
  /** Дополнительный стиль */
  className?: string,
  /** Размер кликабельной области */
  area?: number,
  /** Атрибут для тестирования */
  marker?: string,

  onClick?: MouseEvent,
}