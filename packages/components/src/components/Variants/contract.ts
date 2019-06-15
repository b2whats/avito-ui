import React from 'react'
import { Theme, Tokens } from '../../theme/'
import { Spaces } from '../../styled-system/'

export interface VariantsProps extends Spaces {
  children?: React.ReactNode,
  /** Вариант цветовой схемы для границ */
  border?: 'gray' | 'mixed' | 'colored',
  /** Вариант состояниий гранниц */
  borderState?: string,
  /** Вариант цветовой схемы для фона */
  background?: 'gray' | 'mixed' | 'colored',
  /** Вариант состояниий фона */
  backgroundState?: string,
  /** Вариант цветовой схемы для цвета текста */
  color?: 'contrast' | 'mixed' | 'colored',
  /** Вариант состояниий цвета текста */
  colorState?: string,
  /** Цветовые варианты */
  variant?: keyof Tokens['variants'],
  /** Фокус */
  focus?: boolean,
  /** @ignore */
  theme?: Theme,
}