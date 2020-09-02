import { ReactElement } from 'react'
import { Colors, Variant } from '../../styled-system'
import { CommonAttributes } from '../../utils'
import { BoxProps } from '../Layout'

export interface PointProps extends BoxProps, Variant, CommonAttributes {
  show?: boolean
  count?: string | number
  /* Размер  */
  size?: 's' | 'm' | 'l' | number
  pulse?: boolean

  /* Включить стандартный вырез под бейдж */
  gap?: boolean
  /* Ширина выреза */
  gapSize?: number
  /* Цвет выреза для маскировки под фон */
  gapColor?: Colors
}

export interface PointOverProps extends PointProps {
  /* Слот для кастомизированного бейджа */
  badge?: ReactElement
  /* Прицепить бейдж к верху (или отступ) */
  snapTop?: boolean | number
  /* Прицепить бейдж к правому краю (или отступ) */
  snapRight?: boolean | number
  /* Прицепить бейдж к низу (или отступ) */
  snapBottom?: boolean | number
  /* Прицепить бейдж к левому краю (или отступ) */
  snapLeft?: boolean | number
}

export type PointKeys = Exclude<keyof PointOverProps, keyof BoxProps | keyof CommonAttributes>
