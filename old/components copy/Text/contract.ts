import React from 'react'
import { Theme, Tokens } from '../../../packages/components/src/theme'
import { SpaceProperties } from '../../../packages/components/src/styled-system'

export interface TextProps extends SpaceProperties {
  /** Размер текста */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl',
  /** Размер текста, фолбек */
  fontSize?: number,
  /** Коэффициент для высоты строки */
  lineHeight?: number,
  /** Уплотненная высота строки */
  dense?: boolean,
  /** Горизонтальное выравнивание текста */
  align?: 'left' | 'center' | 'right' | 'justify',
  /** Вертикальное выравнивание текста */
  valign?: 'top' | 'middle' | 'bottom' | 'baseline',
  /** Расстояние между буквами */
  letterSpacing?: string,
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
  strike?: keyof Theme['palette'] | boolean,
  /** Подчеркнутый текст */
  underline?: 'dashed' | 'dotted' | boolean,
  /** Обрезка высоты строки у текста сверху и снизу */
  crop?: boolean,
  /** Текст без переносов */
  noWrap?: boolean,
  /** Многоточие в конце строки */
  truncate?: boolean,
  /** Цветовые варианты текста */
  variant?: keyof Tokens['variants'],
  /** Текстовая нода */
  as?: string,
  /** Цвет текста */
  color?: keyof Theme['palette'],
  /** Инлайновое поведение */
  inline?: boolean,
  /** Блочное поведение */
  block?: boolean,
  /** Пресет компонента */
  preset?: string,
}