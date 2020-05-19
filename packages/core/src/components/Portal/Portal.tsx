import { createPortal } from 'react-dom'
import { PortalProps } from './contract'

let container: Element | null = null

if (typeof document !== 'undefined') {
  container = document.createElement('div')
  document.body.appendChild(container)
}

export const Portal = ({ turn, children }: PortalProps)  => {
  if (!container || !children) return null

  return turn ? createPortal(children, container) : children
}

