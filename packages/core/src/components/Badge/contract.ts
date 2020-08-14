import { ReactNode, ReactElement } from 'react'
import { Colors } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'
import { BoxProps } from '../Layout'

export interface BadgeProps extends BoxProps, CommonAttributes {
  /* Счетчик в бейдже */
  count?: ReactNode
  /* Размер бейджа (не действует на kind='flat') */
  size?: 's' | 'm' | 'l' | number
  /* Анимация изменения счетчика */
  animateChange?: 'none' | 'wheel'

  /* Не скрывать бейдж даже при count <= 0 */
  showZero?: boolean

  /* flat делает бейдж текстовым */
  kind?: 'fill' | 'flat'

  /* Включить стандартный вырез под бейдж */
  gap?: boolean
  /* Ширина выреза */
  gapSize?: number
  /* Цвет выреза для маскировки под фон */
  gapColor?: Colors
}

export interface BadgeOverProps extends BadgeProps {
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

export type BadgeKeys = Exclude<keyof BadgeOverProps, keyof BoxProps | keyof CommonAttributes>
