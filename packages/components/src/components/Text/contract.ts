import React from 'react'
import { Theme } from '../../theme/'

export interface TextProps {
  /** Текстовое содержание */
  children?: React.ReactNode,
  /** Жирное начертание */
  bold: boolean,
  /** Легкое начертание */
  light: boolean,
  /** Курсивное начертание */
  italic: boolean,
  /** Текст в верхнем регистре */
  uppercase: boolean,
  /** Перечеркнутый текст */
  strike: keyof Theme['palette'] | boolean,
  /** Подчеркнутый текст текст */
  underline?: 'solid' | 'dashed' | 'dotted',
  /** Обрезка высоты строки у текста сверху и снизу */
  crop: boolean,
  /** Горизонтальное выравнивание текста */
  align: 'start' | 'end' | 'center' | 'justify',
  /** Вы можете обрезать текст с помощью многоточия. При передачи этого параметра текст становится однострочный.
      Установив значение в true строка текста будет равна 100%
      Передача строки ('50%', '15em', '100px') передаются напрямую
  */
  truncate: boolean | string,
  /** Цветовые варианты текста */
  variance?: 'primary' | 'secondary' | 'success' | 'dunger' | 'error',
  /** Размер текста */
  size: 's' | 'm' | 'l',
  /** Текстовая нода */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'em' | 'strong' | 'caption',
  /** Внешний вид текста */
  appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption',
  color?: keyof Theme['palette'],
  noMargin: boolean,
}