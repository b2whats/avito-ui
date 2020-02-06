import { useCallback, useState } from 'react'

function useRefHookCallback<T>(innerRef?: (node: T | null) => void) {
  console.log('useRefHookCallback')
  const [ref, set] = useState<T | null>(null)

  const setRef = useCallback((node) => {
    console.log('setRef')
    set(node)

    if (innerRef) {
      innerRef(node)
    }
  }, [])

  return [ref, setRef] as [typeof ref, typeof setRef]
}

export default useRefHookCallback