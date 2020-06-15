import { useCallback, useState } from 'react'

interface Bounds {
  left: number
  height: number
  top: number
  width: number
  bottom: number
  x: number
  y: number
  right: number
}

export const useMeasure = () => {
  const [bounds, setBounds] = useState<Bounds | null>(null)

  const setRef = useCallback(node => {
    if (node !== null) {
      setBounds(node.getBoundingClientRect())
    }
  }, [])

  return [bounds, setRef] as [typeof bounds, typeof setRef]
}
