import React from 'react'
import { Theme } from '../../theme/'

export interface LinkProps {
  /** Текстовое содержание */
  children?: React.ReactNode,
  /** Жирное начертание */
  bold: boolean,
  /** Подчеркнутая ссылка */
  underline: 'solid' | 'dashed' | 'dotted',
  /** Размер текста */
  size: 's' | 'm' | 'l',
}