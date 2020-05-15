import React from 'react'
import { createPortal } from 'react-dom'
import { createPopper, Instance } from '@popperjs/core'
import { PortalProps } from './contract'

let container: Element | null = null

if (typeof document !== 'undefined') {
  container = document.createElement('div')
  document.body.appendChild(container)
}

export const Portal = ({ children }: PortalProps) => container && children ? createPortal(children, container) : null

