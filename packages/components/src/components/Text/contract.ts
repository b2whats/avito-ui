import React from 'react'
import { Theme, Tokens } from '../../theme/'
import { Spaces } from '../../styled-system/'

export interface TextProps extends Spaces {
  /** Размер текста
  * @default m
  */
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl',
  /** Коэффициент для высоты строки
   * @default m
  */
  lineHeight?: 'none' | 's' | 'm' | 'l',
  /** Горизонтальное выравнивание текста */
  align?: 'start' | 'end' | 'center' | 'justify',
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
  /** Вы можете обрезать текст с помощью многоточия. При передачи этого параметра текст становится однострочный.
      Установив значение в true строка текста будет равна 100%
      Передача строки ('50%', '15em', '100px') передаются напрямую
  */
  truncate?: boolean | string,
  /** Цветовые варианты текста */
  variant?: keyof Tokens['variants'],
  /** Текстовая нода */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'em' | 'strong' | 'caption' | 'div' | 'label' | 'li',
  /** Внешний вид текста */
  kind?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'label' | 'li',
  /** Цвет текста */
  color?: keyof Theme['palette'],
  /** Инлайновое поведение */
  inline?: boolean,
  /** Блочное поведение */
  block?: boolean,
  /** @ignore */
  theme?: Theme,
}

//https://evergreen.segment.com/components/typography/ 