import { Colors } from '../../styled-system/'
import { CommonAttributes } from '../../utils/'
import { BoxProps } from '../Layout'

export interface BadgeProps extends BoxProps, CommonAttributes {
  gapSize?: number
  gapColor?: Colors
  size?: 's' | 'm' | 'l' | number
}
