import React from 'react';

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
  strike: boolean | string,
  /** Горизонтальное выравнивание текста */
  align: 'start' | 'end' | 'center' | 'justify',
  /** Вы можете обрезать текст с помощью многоточия. При передачи этого параметра текст становится однострочный.
      Установив значение в true строка текста будет равна 100%
      При передачи числа оно будет конвертировано в пиксели 
      Передача строки ('50%', '15em') передаются напрямую
  */
  truncate: boolean | number | string,
  /** Текстовая нода */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'em' | 'strong',
  appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
}