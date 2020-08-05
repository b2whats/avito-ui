import React from 'react'
import { UserIcon } from '../src/components/Icon/icons'

export const variant = ['primary', 'secondary', 'success', 'error', 'warning'] as const
export const bool = [true, false]
export const sml = ['s', 'm', 'l']
export const icon = <UserIcon />
export const maybe = (el: any) => [undefined].concat(el)
