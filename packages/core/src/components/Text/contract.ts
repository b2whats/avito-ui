import { ComponentType } from 'react'
import { StyleProperties, Variant } from '../../styled-system/'
import { Theme } from '../../theme/'
import { CommonAttributes } from '../../utils/'

export interface TextProps extends StyleProperties, Variant, CommonAttributes<HTMLDivElement> {
  /** Размер текста */
  size?: keyof Theme['font']['fontSize']
  /** Размер текста фолбек */
  fontSize?: number
  /** Коэффициент для высоты строки */
  lineHeight?: number | 'none' | 'inherit'
  /** Уплотненная высота строки */
  dense?: boolean
  /** Расстояние между буквами */
  letterSpacing?: number
  /** Жирное начертание */
  bold?: boolean
  /** Легкое начертание */
  light?: boolean
  /** Курсивное начертание */
  italic?: boolean
  /** Текст в верхнем регистре */
  uppercase?: boolean
  /** Перечеркнутый текст */
  strike?: keyof Theme['palette'] | boolean
  /** Подчеркнутый текст */
  underline?: 'dashed' | 'dotted' | boolean
  /** Обрезка высоты строки у текста сверху и снизу */
  crop?: boolean
  /** Текст без переносов */
  noWrap?: boolean
  /** Текст с сохранением всех пробелов */
  pre?: boolean
  /** Многоточие в конце строки */
  truncate?: boolean
  /** Текстовая нода */
  as?: string | ComponentType
  /** Инлайновое поведение */
  inline?: boolean
  /** Блочное поведение */
  block?: boolean
  /** Пресет компонента */
  preset?: 'title' | 'title-small' | 'heading-large' | 'heading' | 'heading-small'
}
