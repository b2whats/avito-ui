import React, { useRef, Children } from 'react'
import Transition, { TransitionStatus } from 'react-transition-group/Transition'
import { css, keyframes } from '../../styled-system'
import { uiComponent } from '../../theme'
import { filterProps, once } from '../../utils'
import { AppearAnimationProps } from './contract'

const zoomInKeyframes = keyframes`0% { transform: scale(0); }`
const zoomOutKeyframes = keyframes`100% { transform: scale(0); }`
const animations = {
  entering: css`animation: ${zoomInKeyframes} 300ms cubic-bezier(0.12, 0.4, 0.29, 1.46);`,
  exiting: css`animation: ${zoomOutKeyframes} 300ms cubic-bezier(0.71, -0.46, 0.88, 0.6);`,
}
const animateAppearStyle = (state: TransitionStatus) => animations[state]

export const AppearAnimation = uiComponent('AppearAnimation', {}, { memo: false })<AppearAnimationProps>(({
  show,
  children,
  cacheChildrenOnExit,
  appear = false,
  ...props
}, { ref }) => {
  // cache children while exiting
  const childrenRef = useRef(children)
  const emptyChildren = Children.toArray(children).every(child => !child)
  childrenRef.current = emptyChildren ? childrenRef.current : children

  const As = props.as || 'div'
  return (
    <Transition
      nodeRef={ref}
      in={show}
      appear={appear}
      addEndListener={done => ref.current && ref.current.addEventListener('animationend', once(done))}
      timeout={600}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <As css={animateAppearStyle(state)} {...filterProps(props)}>
          {state === 'exiting' && cacheChildrenOnExit && emptyChildren ? childrenRef.current : children}
        </As>
      )}
    </Transition>
  )
})
