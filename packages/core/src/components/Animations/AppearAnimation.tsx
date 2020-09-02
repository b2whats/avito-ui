import React, { useState, useEffect, useRef, Children } from 'react'
import { css } from '../../styled-system'
import { uiComponent } from '../../theme'
import { filterProps, invokeAll } from '../../utils'
import { AppearAnimationProps } from './contract'

const animateAppearStyle = (state: { isFirst: boolean, isExit: boolean }) => css`
  ${state.isFirst || state.isExit ? 'transform: scale(0);' : '' }
  transition: transform 300ms cubic-bezier(${ state.isExit ? '0.71, -0.46, 0.88, 0.6' : '0.12, 0.4, 0.29, 1.46' });
`

export const AppearAnimation = uiComponent('AppearAnimation', {}, { memo: false })<AppearAnimationProps>(({
  show,
  children,
  cacheChildrenOnExit,
  animateFirstRender = false,
  ...props
}) => {
  const [{ isFirstPaint, render }, setAnimationState] = useState({
    isFirstPaint: false,
    render: animateFirstRender ? false : !!show,
  })
  const isExit = render && !show
  useEffect(() => {
    show && !render && requestAnimationFrame(() => {
      // Paint pre-animation state once...
      setAnimationState({ render: true, isFirstPaint: true })
      // ...then paint normally
      requestAnimationFrame(() => setAnimationState({ render: true, isFirstPaint: false }))
    })
  }, [show])
  const hideAfterExit = () => !show && setAnimationState({ render: false, isFirstPaint: false })

  // cache children while exiting
  const childrenRef = useRef(children)
  childrenRef.current = isExit && cacheChildrenOnExit && Children.toArray(children).every(child => !child)
    ? childrenRef.current
    : children

  const As = props.as || 'div'
  if (!render) return null
  return (
    <As
      css={animateAppearStyle({ isFirst: isFirstPaint, isExit })}
      {...filterProps(props)}
      onTransitionEnd={invokeAll(props.onTransitionEnd, hideAfterExit)}
    >{childrenRef.current}</As>
  )
})
