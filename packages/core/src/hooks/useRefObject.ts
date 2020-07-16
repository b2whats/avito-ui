import { useRef, Ref, MutableRefObject, useMemo } from 'react'

export function setRef<Element>(ref: Ref<Element>, node: Element) {
  if (!ref) return

  if (typeof ref === 'function') {
    ref(node)
  } else {
    (ref as any).current = node
  }
}

export function useRefObject<T>(...outerRefs: Ref<T>[]): MutableRefObject<null | T> {
  const safeRef = useRef<T | null>(null)
  return useMemo(() => ({
    get current() {
      return safeRef.current
    },
    set current(current) {
      safeRef.current = current
      outerRefs.forEach(ref => setRef(ref, current))
    },
  }), [])
}
