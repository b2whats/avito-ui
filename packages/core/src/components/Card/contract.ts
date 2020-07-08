import { BoxProps } from '../Layout/'

export interface CardProps extends BoxProps {
  children?: any
  onClose?: () => void
}

