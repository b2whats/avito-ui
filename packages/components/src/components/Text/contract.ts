import React from 'react'
import { Tokens } from '../../theme/'
import { MarginProperties, DimensionProperties } from '../../styled-system/'

export interface TextProps extends MarginProperties, DimensionProperties {
  /** Размер текста */
  size?: keyof Tokens['font']['fontSize'],
  /** Размер текста, фолбек */
  fontSize?: number,
  /** Коэффициент для высоты строки */
  lineHeight?: number,
  /** Уплотненная высота строки */
  dense?: boolean,
  /** Горизонтальное выравнивание текста */
  align?: 'left' | 'center' | 'right' | 'justify',
  /** Вертикальное выравнивание текста */
  valignSelf?: 'top' | 'middle' | 'bottom' | 'baseline',
  /** Расстояние между буквами */
  letterSpacing?: number,
  /** Текстовое содержание */
  children?: React.ReactNode,
  /** Жирное начертание */
  bold?: boolean,
  /** Легкое начертание */
  light?: boolean,
  /** Курсивное начертание */
  italic?: boolean,
  /** Наследование стиля от родителя */
  inherit?: boolean,
  /** Текст в верхнем регистре */
  uppercase?: boolean,
  /** Перечеркнутый текст */
  strike?: keyof Tokens['palette'] | boolean,
  /** Подчеркнутый текст */
  underline?: 'dashed' | 'dotted' | boolean,
  /** Обрезка высоты строки у текста сверху и снизу */
  crop?: boolean,
  /** Текст без переносов */
  noWrap?: boolean,
  /** Текст с сохранением всех пробелов */
  pre?: boolean,
  /** Многоточие в конце строки */
  truncate?: boolean,
  /** Цветовые варианты текста */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  /** Текстовая нода */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'strong' | 'em' | 'label' | 'li',
  /** Цвет текста */
  color?: keyof Tokens['palette'],
  /** Инлайновое поведение */
  inline?: boolean,
  /** Блочное поведение */
  block?: boolean,
  /** Пресет компонента */
  preset?: string,

  onMouseDown?(event: React.MouseEvent<HTMLElement>): void,

}