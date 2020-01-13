import { useCallback, useRef } from 'react'

const prevent3DTouch = (event: any) => {
  event.preventDefault()
}

const endTouch = (event: any) => {
  event.currentTarget.click()
}

const usePrevent3DTouch = () => {
  const ref = useRef<HTMLElement | null>(null)

  const setRef = useCallback(node => {
    if (node) {
      node.addEventListener('touchforcechange', prevent3DTouch)
      node.addEventListener('touchend', endTouch)
    } else if (ref.current) {
      ref.current.removeEventListener('touchforcechange', prevent3DTouch)
      ref.current.removeEventListener('touchend', endTouch)
    }

    ref.current = node
  }, [])

  return setRef
}

export default usePrevent3DTouch