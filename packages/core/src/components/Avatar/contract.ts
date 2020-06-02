import { ComponentType } from 'react'
import { Colors } from '@avito/core'
import { BoxProps } from '../Layout'

export interface AvatarProps extends BoxProps {
  src: string;
  size: number;
  alt?: string;
  type?: 'person' | 'company' | 'shop';
  disabled?: boolean;
  badge?: React.ReactElement;
  badgeGapSize?: number;
  badgeGapColor?: Colors;
  onClick?: any;
  href?: any;
  isFallback?: boolean;
  as?: ComponentType<any> | string,
}

