import { useCallback, useRef } from 'react'

const noop = () => {}

export const usePrevent3DTouch = () => {
  if (typeof window !== 'undefined' && !('ontouchforcechange' in window.document)) {
    return noop
  }

  const isPrevented = useRef<boolean>(false)

  const prevent3DTouch = useCallback((event: any) => {
    console.log(event)
    if (event.changedTouches[0].force > 0.2) {
      event.preventDefault()
      event.stopPropagation()

      isPrevented.current = true
    }
  }, [])
  
  const restoreClick = useCallback((event: any) => {
    if (isPrevented.current) {
      event.stopPropagation()
      event.currentTarget.click()
  
      isPrevented.current = false
    }
  }, [])

  const ref = useRef<HTMLElement | null>(null)

  const setRef = useCallback(node => {
    if (node) {
      node.addEventListener('touchforcechange', prevent3DTouch)
      node.addEventListener('touchend', restoreClick)
    } else if (ref.current) {
      ref.current.removeEventListener('touchforcechange', prevent3DTouch)
      ref.current.removeEventListener('touchend', restoreClick)
    }

    ref.current = node
  }, [])
  
  return setRef
}