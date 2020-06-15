import { useLayoutEffect, useEffect } from 'react'

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document
    ? useLayoutEffect
    : useEffect
