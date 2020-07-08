import React, { forwardRef, useRef, useEffect } from 'react'

type Nodes = {
  tmp: HTMLElement,
  parent: HTMLElement,
  anchor: Comment,
  nextElement: Element | null,
} | null

export const NodeResolver = forwardRef<Element, { children: React.ReactElement }>(({ children }, ref) => {
  const nodes = useRef<Nodes>(null)

  const setRef = (node: HTMLElement | null) => {
    if (nodes.current) {
      if (nodes.current.anchor.nextSibling === nodes.current.nextElement) return

      nodes.current.nextElement = nodes.current.anchor.nextSibling as Element
    } else if (node) {
      const { tmp, parent, anchor } = nodes.current = {
        tmp: node,
        parent: node.parentNode as HTMLElement,
        anchor: document.createComment('anchor'),
        nextElement: null,
      }

      if (parent && parent.contains(tmp)) {
        parent.replaceChild(anchor, tmp)

        nodes.current.nextElement = anchor.nextSibling as Element
      }
    }

    if (!ref) return

    const nextElement = nodes.current && nodes.current.nextElement

    if (typeof ref === 'function') {
      ref(nextElement)
    } else if (typeof ref === 'object') {
      ref.current = nextElement
    }
  }

  useEffect(() => () => {
    if (!nodes.current) return

    const { tmp, parent, anchor } = nodes.current

    if (parent && tmp && anchor) {
      parent.replaceChild(tmp, anchor)
    }

    nodes.current = null
  }, [])

  return (
    <React.Fragment>
      <span ref={setRef} hidden />
      {children}
    </React.Fragment>
  )
})

NodeResolver.displayName = 'NodeResolver'
