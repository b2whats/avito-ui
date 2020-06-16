import { Colors } from 'core/src/styled-system'
import { BoxProps } from '../Layout'

export interface BadgeProps extends BoxProps {
  gapSize?: number;
  gapColor?: Colors;
}
