import { ReactNode, ReactElement } from 'react'
import { Colors } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'
import { BoxProps } from '../Layout'

export interface BadgeProps extends BoxProps, CommonAttributes {
  size?: 's' | 'm' | 'l' | number
  count?: ReactNode
  animateChange?: 'none' | 'wheel'

  showZero?: boolean

  kind?: 'fill' | 'flat'

  gapSize?: number
  gapColor?: Colors
}

export interface BadgeOverProps extends BadgeProps {
  badge?: ReactElement
  snapTop?: boolean | number
  snapRight?: boolean | number
  snapBottom?: boolean | number
  snapLeft?: boolean | number
}

export type BadgeKeys = Exclude<keyof BadgeOverProps, keyof BoxProps | keyof CommonAttributes>
