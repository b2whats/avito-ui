import { ReactNode } from 'react'
import { Colors } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'
import { BoxProps } from '../Layout'

export interface BadgeProps extends BoxProps, CommonAttributes {
  size?: 's' | 'm' | 'l' | number
  count?: ReactNode
  animateChange?: 'none' | 'wheel'

  kind?: 'fill' | 'flat'

  gapSize?: number
  gapColor?: Colors
}
