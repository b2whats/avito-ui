import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react'
import { animated, Transition } from 'react-spring'
import { popperGenerator, defaultModifiers, Instance } from '@popperjs/core/lib/popper'
import { useTheme, mergeTheme } from '../../theme/'
import { Portal } from '../Portal/'
import { useRefHook } from '../../hooks/'
import { PositionerProps } from './contract'
import { positionerTheme } from './theme'
import { targetWidth } from './modifiers/'

const createPopper = popperGenerator({
  defaultModifiers: [...defaultModifiers, targetWidth],
})

const getModifiers = (props: Partial<PositionerProps>) => {
  const modifiers = ['offset', 'arrow', 'flip', 'preventOverflow', 'hide', 'targetWidth']

  return modifiers.map(param => param in props
    && { name: param, enabled: Boolean(props[param]), options: props[param] || {} }
  ).filter(Boolean) as PositionerProps['modifiers']
}

export const Positioner = ({ usePortal, animation, delay, open, trigger, override, children, onOutsideClick, onClose, onOpen, ...props }: PositionerProps) => {
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
    props.targetWidth,
  ])

  const handlePopperDestroy = useCallback((_?: any, { item, phase }: any = {}) => {
    if (!popper.current) return

    if (!animation || (item && phase === 'leave')) {
      popper.current.destroy()
      popper.current = undefined
    }
  }, [animation])

  const handleToggle = useCallback((event) => {
    let type = typeof event === 'boolean' ? event : event.type

    clearTimeout(openTimerId.current)

    openTimerId.current = setTimeout(() => {
      setLocalOpen(open => {
        const value = {
          true: true,
          false: false,
          click: !open,
          mouseenter: true,
          mouseleave: false,
          focus: true,
          blur: false,
          scroll: false,
        }[type]

        value && onOpen && onOpen()
        !value && onClose && onClose()
        
        return value
      })
    }, delay)

  }, [delay, onClose, onOpen])

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

    if (!popper.current) {
      target.style.margin = '0px'
      popper.current = createPopper(reference, target, options)
    } else {
      popper.current.setOptions(options)
    }

    onOutsideClick && document.addEventListener('click', handleOutsideClick, true)
    props.closeWhenScrolling && document.addEventListener('scroll', handleToggle)

    return () => {
      console.log('destroy')
      handlePopperDestroy()
      onOutsideClick && document.removeEventListener('click', handleOutsideClick, true)
      props.closeWhenScrolling && document.removeEventListener('scroll', handleToggle)
    }
  }, [localOpen, options, usePortal, animation, handleOutsideClick])

  useLayoutEffect(() => {
    const reference = referenceRef.current
    const eventsType = trigger && {
      click: ['click'],
      hover: ['mouseenter', 'mouseleave'],
      focus: ['focus', 'blur'],
    }[trigger]

    if (reference === null || !eventsType) return
    if (trigger === 'focus') {
      (reference as HTMLElement).tabIndex = -1;
      (reference as HTMLElement).style.outline = 'none'
    }
    eventsType.forEach(type => reference.addEventListener(type, handleToggle))

    return () => {
      eventsType.forEach(type => reference.removeEventListener(type, handleToggle))
    }
  }, [trigger, delay])

  const target = typeof props.target === 'function' ? props.target({ handleToggle }) : props.target

  const targetWrapper = animation ?
    <Transition items={localOpen} {...(transitions[animation] || animation)} onRest={handlePopperDestroy}>
      {(style, item) => item && <animated.div ref={localOpen ? setTarget : undefined} style={style}>{target}</animated.div>}
    </Transition> :
    localOpen && <div ref={setTarget}>{target}</div>

  return (
    <React.Fragment>
      {!init && <div ref={setReference} hidden />}
      {children}
      <Portal turn={usePortal}>
        {targetWrapper}
      </Portal>
    </React.Fragment>
  )
}