import React, { useState, useEffect } from 'react'
import { isServer } from '../utils/'

export type Options = {
  threshold?: number | number[]
  root?: HTMLElement
  rootMargin?: string
  once?: boolean
}

const isIntersectionObserver = typeof window !== 'undefined' && window.IntersectionObserver

export const useVisibility = <Ref extends React.MutableRefObject<any>>(
  ref: Ref,
  { once, ...options }: Options
) => {
  const disabled = !isIntersectionObserver || isServer
  const [visible, setVisible] = useState(disabled)

  useEffect(() => {
    if (disabled) return

    const observer = new IntersectionObserver(([entry], observerInstance) => {
      if (entry.intersectionRatio > 0) {
        setVisible(entry.isIntersecting)
        once && observerInstance.disconnect()
      }
    }, options)
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return visible
}
