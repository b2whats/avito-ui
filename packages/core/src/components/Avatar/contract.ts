import { ComponentType, ImgHTMLAttributes } from 'react'
import { BoxProps } from '../Layout'

export interface AvatarProps extends BoxProps, Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  size: number
  type?: 'person' | 'company' | 'shop'
  disabled?: boolean
  badge?: React.ReactElement
  onClick?: any
  href?: any
  isFallback?: boolean
  as?: ComponentType<any> | string
}

