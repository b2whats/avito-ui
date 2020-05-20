import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react'
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

export const Positioner = ({ usePortal, animation, delay, open, trigger, override, children, ...props }: PositionerProps) => {
  const theme = useTheme()
  const { transitions, defaultProps } = mergeTheme(positionerTheme, theme.Positioner, override)
  const [init, setInit] = useState(false)
  const [localOpen, setLocalOpen] = useState(() => Boolean(open))
  const [targetRef, setTarget] = useRefHook<HTMLElement>(props.name)
  const referenceRef = useRef<Element | null>(null)
  const setReference = (node: Element | null) => node && (referenceRef.current = node.nextElementSibling)
  const openTimerId = useRef<number>()

  props = {
    ...defaultProps,
    ...props,
  }

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

  const onToggle = useCallback(({ type }) => {
    clearTimeout(openTimerId.current)

    openTimerId.current = setTimeout(() => setLocalOpen(open => ({
      true: true,
      false: false,
      click: !open,
      mouseenter: true,
      mouseleave: false,
    }[type])), delay)
  }, [delay])

  useLayoutEffect(() => {
    if (open === undefined || open === localOpen) return

    onToggle({ type: open })
  }, [open])

  useLayoutEffect(() => {
    !init && setInit(true)
    const target = targetRef.current
    const reference = referenceRef.current
    console.log('target', target )
    if (reference === null || target === null) return

    const popper = createPopper(reference, target, options)
    console.log('init popper', props.name, target)
    return () => {
      console.log('destroy popper', props.name, target)
      popper.destroy()
    }
  }, [localOpen, options, animation])

  useLayoutEffect(() => {
    const reference = referenceRef.current
    const eventsType = trigger && {
      click: ['click'],
      hover: ['mouseenter', 'mouseleave'],
    }[trigger]

    if (reference === null || !eventsType) return
    eventsType.forEach(type => reference.addEventListener(type, onToggle))

    return () => {
      eventsType.forEach(type => reference.removeEventListener(type, onToggle))
    }
  }, [trigger])

  const reference = typeof children === 'string'
    ? <span>{children}</span>
    : children

  const target = animation ?
    <Transition items={localOpen} {...(transitions[animation] || animation)} expires={200}>
      {(style, item) => item && <animated.div ref={localOpen ? setTarget : undefined} style={style}>{props.target}</animated.div>}
    </Transition> :
    localOpen && <div ref={setTarget}>{props.target}</div>

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