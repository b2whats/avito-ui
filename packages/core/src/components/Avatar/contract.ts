import { ComponentType } from 'react'
import { BoxProps } from '../Layout'

export interface AvatarProps extends BoxProps {
  size: number
  type?: 'person' | 'company' | 'shop'
  disabled?: boolean
  badge?: React.ReactElement
  href?: string
  src?: string
  alt?: string
  isFallback?: boolean
  as?: ComponentType<any> | string,
}
