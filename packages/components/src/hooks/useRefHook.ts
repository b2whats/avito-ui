import { useCallback, useRef, Ref } from 'react'

function useRefHook<T>(...refs: Array<Ref<T>>) {
  const ref = useRef<T | null>(null)
  const setRef = useCallback((node) => {
    ref.current = node

    refs.forEach(resolvableRef => {
      if (!resolvableRef) return
      
      if (typeof resolvableRef === 'function') {
        resolvableRef(node)
      } else {
        (resolvableRef as any).current = node
      }
    })
  }, [])

  return [ref, setRef] as [typeof ref, typeof setRef]
}

export default useRefHook