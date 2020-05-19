import React, { useRef, useLayoutEffect, useState, useMemo } from 'react'
import { animated, Transition } from 'react-spring'
import { createPopper } from '@popperjs/core'
import { useTheme, mergeTheme } from '../../theme/'
import { Portal } from '../Portal/'
import { useRefHook } from '../../hooks/'
import { PositionerProps } from './contract'
import { positionerTheme } from './theme'

const getModifiers = (props: Partial<PositionerProps>) => {
  const modifiers = ['offset', 'arrow', 'flip', 'preventOverflow']

  return modifiers.map(param => param in props
    && { name: param, enabled: Boolean(props[param]), options: props[param] || {} }
  ).filter(Boolean) as PositionerProps['modifiers']
}

const getEventsType = (trigger?: 'click' | 'hover') => trigger && ({
  click: ['click'],
  hover: ['mouseenter', 'mouseleave'],
})[trigger]

export const Positioner = ({ usePortal, animation, delay, override, children, ...props }: PositionerProps) => {
  const theme = useTheme()
  const { transitions, defaultProps } = mergeTheme(positionerTheme, theme.Positioner, override)
  const [init, setInit] = useState(false)
  const [visible, setVisible] = useState(false)
  const [targetRef, setTarget] = useRefHook<HTMLElement>()
  const referenceRef = useRef<Element | null>(null)
  const setReference = (node: Element | null) => node && (referenceRef.current = node.nextElementSibling)

  props = {
    ...defaultProps,
    ...props,
  }

  const show = props.target && !props.trigger || visible

  const options = useMemo(() => ({
    strategy: props.strategy,
    placement: props.placement,
    modifiers: props.modifiers || getModifiers(props),
  }), [
    props.modifiers,
    props.placement,
    props.strategy,
    props.offset,
    props.arrow,
    props.flip,
    props.preventOverflow,
  ])

  useLayoutEffect(() => {
    !init && setInit(true)
    const target = targetRef.current
    const reference = referenceRef.current

    if (reference === null || target === null) return

    const popper = createPopper(reference, target, options)

    return popper.destroy
  }, [show, options, animation])

  useLayoutEffect(() => {
    const reference = referenceRef.current
    const eventsType = getEventsType(props.trigger)
    let timerId: number
    const onToggle = ({ type }: any) => {
      clearTimeout(timerId)

      timerId = setTimeout(() => setVisible(state => ({
        click: !state,
        mouseenter: true,
        mouseleave: false,
      }[type])), delay)
    }

    if (reference === null || !eventsType) return

    eventsType.forEach(type => reference.addEventListener(type, onToggle))

    return () => {
      eventsType.forEach(type => reference.removeEventListener(type, onToggle))
    }
  }, [props.trigger, delay])

  const reference = typeof children === 'string'
    ? <span>{children}</span>
    : children

  const target = animation ?
    <Transition items={show} {...(transitions[animation] || animation)}>
      {(style, item) => item && <animated.div ref={setTarget} style={style}>{props.target}</animated.div>}
    </Transition> :
    show && <div ref={setTarget}>{props.target}</div>

  return (
    <React.Fragment>
      {!init && <div ref={setReference} hidden />}
      {reference}
      <Portal turn={usePortal}>
        {target}
      </Portal>
    </React.Fragment>
  )
}