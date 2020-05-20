import { useCallback, useRef, Ref } from 'react'

export function useRefHook<T>(...refs: Array<Ref<T>>) {
  const ref = useRef<T | null>(null)
  const setRef = useCallback((node) => {
    ref.current = node
    console.log(refs)

    refs.forEach(resolvableRef => {
      if (!resolvableRef) return
      
      if (typeof resolvableRef === 'function') {
        resolvableRef(node)
      } else if (typeof resolvableRef === 'object') {
        (resolvableRef as any).current = node
      }
    })
  }, [])

  return [ref, setRef] as [typeof ref, typeof setRef]
}