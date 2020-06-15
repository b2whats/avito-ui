import { useState, useEffect } from 'react'

function getSize() {
  if (typeof window === 'undefined') {
    return {}
  }

  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

export function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize())

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
