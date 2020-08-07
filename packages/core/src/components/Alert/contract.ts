import { CardProps } from '../Card'

export interface AlertProps extends CardProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
}

