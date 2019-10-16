import { useCallback, useRef } from 'react'

function useRefHook<T>(innerRef?: (node: T | null) => void) {
  const ref = useRef<T | null>(null)
  const setRef = useCallback((node) => {
    ref.current = node

    if (innerRef) {
      innerRef(node)
    }
  }, [])

  return [ref, setRef] as [typeof ref, typeof setRef]
}

export default useRefHook