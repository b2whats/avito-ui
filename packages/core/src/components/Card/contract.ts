import { BoxProps } from '../Layout/'

export interface CardProps extends BoxProps {
  children?: any
  image?: React.ReactNode
  onClose?: () => void
}

