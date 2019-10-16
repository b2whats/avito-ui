import React, { useState, useCallback, useRef } from 'react'

function functionRef<T>(userSetRef?: React.Ref<T>,): [T | null, (instance: T | null) => void] {
  console.log('functionRef')

  const [ref, set] = useState<T | null>(null)

  const setRef = useCallback(node => {
    console.log('useCallback')

    if (node !== null) {
      set(node)
      if (typeof userSetRef === 'function') {
        userSetRef(node)
      }
    }
  }, [])

  return [ref, setRef]
}

export default functionRef