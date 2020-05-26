import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react'
import { animated, Transition } from 'react-spring'
import { createPopper, Instance } from '@popperjs/core'
import { useTheme, mergeTheme } from '../../theme/'
import { Portal } from '../Portal/'
import { useRefHook } from '../../hooks/'
import { PositionerProps } from './contract'
import { positionerTheme } from './theme'

const getModifiers = (props: Partial<PositionerProps>) => {
  const modifiers = ['offset', 'arrow', 'flip', 'preventOverflow', 'hide']

  return modifiers.map(param => param in props
    && { name: param, enabled: Boolean(props[param]), options: props[param] || {} }
  ).filter(Boolean) as PositionerProps['modifiers']
}

export const Positioner = ({ usePortal, animation, delay, open, trigger, override, children, onOutsideClick, onClose, ...props }: PositionerProps) => {
  const theme = useTheme()
  const { transitions, defaultProps } = mergeTheme(positionerTheme, theme.Positioner, override)
  const [init, setInit] = useState(false)
  const [localOpen, setLocalOpen] = useState(() => Boolean(open))
  const [targetRef, setTarget] = useRefHook<HTMLElement>()
  const referenceRef = useRef<Element | null>(null)
  const setReference = (node: Element | null) => node && (referenceRef.current = node.nextElementSibling)
  const openTimerId = useRef<number>()
  const popper = useRef<Instance>()

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
    props.hide,
    props.flip,
    props.preventOverflow,
  ])

  const handlePopperDestroy = useCallback((_?: any, { item, phase }: any = {}) => {
    if (!popper.current) return

    if (!animation) {
      popper.current.destroy()
    }

    if (item && phase === 'leave') {
      popper.current.destroy()
    }
  }, [animation])

  const handleToggle = useCallback((event) => {
    let value = typeof event === 'boolean' ? event : event.type

    clearTimeout(openTimerId.current)

    openTimerId.current = setTimeout(() => {
      setLocalOpen(open => ({
        true: true,
        false: false,
        click: !open,
        mouseenter: true,
        mouseleave: false,
      }[value]))

      onClose && onClose()
    }, delay)

  }, [delay, onClose])

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    const target = targetRef.current
    const reference = referenceRef.current

    if (target === null || reference === null) return

    if (target.contains(event.target as Node) || reference.contains(event.target as Node)) return

    onOutsideClick && onOutsideClick()
  }, [onOutsideClick])

  useLayoutEffect(() => {
    if (open === undefined || open === localOpen) return

    handleToggle(open)
  }, [open])

  useLayoutEffect(() => {
    !init && setInit(true)
    const target = targetRef.current
    const reference = referenceRef.current

    if (reference === null || target === null) return

    target.style.margin = '0px'
    popper.current = createPopper(reference, target, options)
    onOutsideClick && document.addEventListener('click', handleOutsideClick, true)

    return () => {
      handlePopperDestroy()
      onOutsideClick && document.removeEventListener('click', handleOutsideClick, true)
    }
  }, [localOpen, options, handleOutsideClick, handlePopperDestroy])

  useLayoutEffect(() => {
    const reference = referenceRef.current
    const eventsType = trigger && {
      click: ['click'],
      hover: ['mouseenter', 'mouseleave'],
    }[trigger]

    if (reference === null || !eventsType) return
    eventsType.forEach(type => reference.addEventListener(type, handleToggle))

    return () => {
      eventsType.forEach(type => reference.removeEventListener(type, handleToggle))
    }
  }, [trigger, delay])

  const target = animation ?
    <Transition items={localOpen} {...(transitions[animation] || animation)} onRest={handlePopperDestroy}>
      {(style, item) => item && <animated.div ref={localOpen ? setTarget : undefined} style={style}>{props.target}</animated.div>}
    </Transition> :
    localOpen && <div ref={setTarget}>{props.target}</div>

  return (
    <React.Fragment>
      {!init && <div ref={setReference} hidden />}
      {children}
      <Portal turn={usePortal}>
        {target}
      </Portal>
    </React.Fragment>
  )
}