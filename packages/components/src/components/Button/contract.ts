import React from 'react'
import { Tokens } from '../../theme/'

export interface ButtonProps {
  children?: React.ReactNode,
  /** size description */
  size?: 's' | 'm' | 'l',
  variant: keyof Tokens['variants'],
}