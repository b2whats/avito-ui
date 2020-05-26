import { useCallback, useRef, Ref } from 'react'

export function useRefHook<T>(...refs: Array<Ref<T>>) {
  const ref = useRef<T | null>(null)
  const setRef = useCallback((node) => {
    ref.current = node

    refs.forEach(ref => {
      if (!ref) return
      
      if (typeof ref === 'function') {
        ref(node)
      } else {
        (ref as any).current = node
      }
    })
  }, [])

  return [ref, setRef] as [typeof ref, typeof setRef]
}