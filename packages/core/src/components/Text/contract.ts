import React from 'react'
import { Theme } from '../../theme/'
import { MarginProperties, DimensionProperties, AlignProperties } from '../../styled-system/'
import { TextTheme } from './theme'

export interface TextProps extends MarginProperties, DimensionProperties, AlignProperties {
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
  /** Текстовое содержание */
  children?: React.ReactNode
  /** Жирное начертание */
  bold?: boolean
  /** Легкое начертание */
  light?: boolean
  /** Курсивное начертание */
  italic?: boolean
  /** Наследование стиля от родителя */
  inherit?: boolean
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
  /** Цветовые варианты текста */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Текстовая нода */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'strong' | 'em' | 'label' | 'li'
  /** Цвет текста */
  color?: keyof Theme['palette']
  /** Инлайновое поведение */
  inline?: boolean
  /** Блочное поведение */
  block?: boolean
  /** Пресет компонента */
  preset?: 'title' | 'title-small' | 'heading-large' | 'heading' | 'heading-small'
  /** Переопределиь тему компонента */  
  override?: TextTheme

  onMouseDown?(event: React.MouseEvent<HTMLElement>): void
}