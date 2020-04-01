import React, { useCallback, useRef } from 'react'

function useRefHook<T>(innerRef?: React.Ref<T>) {
  const ref = useRef<T | null>(null)
  const setRef = useCallback((node) => {
    ref.current = node

    if (typeof innerRef === 'function') {
      innerRef(node)
    }
  }, [])

  return [ref, setRef] as [typeof ref, typeof setRef]
}

export default useRefHook