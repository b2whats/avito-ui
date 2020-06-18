import { Colors } from '../../styled-system/'
import { BoxProps } from '../Layout'

export interface BadgeProps extends BoxProps {
  gapSize?: number;
  gapColor?: Colors;
}
