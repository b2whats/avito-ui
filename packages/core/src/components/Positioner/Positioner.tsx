import { createPopper, StrictModifiers } from '@popperjs/core'
import React, { useRef, useState, useMemo, useCallback, useEffect, Children, cloneElement, HTMLAttributes } from 'react'
import { animated, Transition } from 'react-spring'
import { useIsomorphicLayoutEffect } from '../../hooks/'
import { uiComponent } from '../../theme/'
import { invokeAll } from '../../utils/'
import { NodeResolver } from '../NodeResolver/'
import { Portal } from '../Portal/'
import { PositionerProps } from './contract'
import { targetWidth, customApplyStyles, TargetWidthModifier } from './modifiers/'
import { positionerTheme } from './theme'

const getModifiers = ({ minWidth, width, maxWidth, zIndex, ...props}: Partial<PositionerProps>) => {
  const modifiersName = ['offset', 'arrow', 'flip', 'preventOverflow', 'hide'] as const
  const modifiers: (StrictModifiers | Partial<TargetWidthModifier>)[] = []

  modifiersName.forEach(name => {
    if (name in props) {
      modifiers.push({ name, enabled: Boolean(props[name]), options: props[name] || undefined })
    }
  })

  if (minWidth || width || maxWidth) {
    modifiers.push({ ...targetWidth, options: { minWidth, width, maxWidth } })
  }

  modifiers.push({ ...customApplyStyles, options: { zIndex } })

  return modifiers
}

export const Positioner = uiComponent('Positioner', positionerTheme)((props: PositionerProps, { theme }, _, testId) => {
  const [localOpen, setLocalOpen] = useState(Boolean(props.open))
  const targetRef = useRef<HTMLDivElement | null>(null)
  const referenceRef = useRef<HTMLElement | null>(null)
  const toggleTimerId = useRef<number>()

  const options = useMemo(() => ({
    strategy: props.strategy,
    placement: props.placement,
    modifiers: getModifiers(props),
  }), [
    props.placement,
    props.strategy,
    props.offset,
    props.arrow,
    props.hide,
    props.flip,
    props.preventOverflow,
    props.minWidth,
    props.width,
    props.maxWidth,
  ])

  const handleToggle = useCallback((toggle: boolean) => {
    clearTimeout(toggleTimerId.current)

    toggleTimerId.current = setTimeout(() => {
      setLocalOpen(toggle)

      toggle
        ? props.onOpen && props.onOpen()
        : props.onClose && props.onClose()
    }, toggle ? props.delayIn : props.delayOut)

  }, [props.delayIn, props.delayOut, props.onClose, props.onOpen])

  // Обрабатываем внещний стейт open
  useIsomorphicLayoutEffect(() => {
    if (props.open === undefined || props.open === localOpen) return

    handleToggle(props.open)
  }, [props.open])

  // Создаем инстанс popper
  useIsomorphicLayoutEffect(() => {
    const target = targetRef.current
    const reference = referenceRef.current

    if (!reference || !target) return

    target.style.margin = '0px'
    const popper = createPopper(reference, target, options)

    return () => {
      popper.destroy()
    }
  }, [localOpen, options, props.usePortal])

  // Устанавливаем глобальный обрабочики при открытии
  useEffect(() => {
    const target = targetRef.current
    const reference = referenceRef.current

    if (!reference || !target) return

    const handleScroll = () => handleToggle(false)
    const handleСlick = () => handleToggle(false)
    const handlePressEsc = (event: KeyboardEvent) => event.key === 'Escape' && handleToggle(false)
    const handleOutsideClick = (event: MouseEvent) => {
      if (target.contains(event.target as Node) || reference.contains(event.target as Node)) return

      handleToggle(false)
    }

    props.closeOnOutsideClick && document.addEventListener('click', handleOutsideClick, true)
    props.closeOnClick && document.addEventListener('click', handleСlick)
    props.closeOnScroll && document.addEventListener('scroll', handleScroll)
    props.closeOnEsc && document.addEventListener('keydown', handlePressEsc)
    return () => {
      props.closeOnOutsideClick && document.removeEventListener('click', handleOutsideClick, true)
      props.closeOnClick && document.removeEventListener('click', handleСlick)
      props.closeOnScroll && document.removeEventListener('scroll', handleScroll)
      props.closeOnEsc && document.removeEventListener('keydown', handlePressEsc)

    }
  }, [localOpen, handleToggle, props.closeOnOutsideClick, props.closeOnScroll, props.closeOnEsc])

  const reference = Children.only(props.children)

  let eventHandlers = {}
  let aria: HTMLAttributes<HTMLElement> = {
    'aria-haspopup': true,
    'aria-expanded': localOpen,
  }

  if (props.trigger === 'click') {
    eventHandlers = {
      onClick: invokeAll(reference.props.onClick, () => handleToggle(!localOpen)),
    }
  }

  if (props.trigger === 'hover') {
    eventHandlers = {
      onFocus: invokeAll(reference.props.onFocus, () => handleToggle(true)),
      onBlur: invokeAll(reference.props.onBlur, () => handleToggle(false)),
      onMouseEnter: invokeAll(reference.props.onMouseEnter, () => handleToggle(true)),
      onMouseLeave: invokeAll(reference.props.onMouseLeave, () => handleToggle(false)),
    }

    aria.tabIndex = 0
  }

  const animation = typeof props.animation === 'string' ? theme.transitions[props.animation] : props.animation
  const target = typeof props.target === 'function' ? props.target({ close: () => handleToggle(false) }) : props.target

  return (
    <React.Fragment>
      <NodeResolver ref={referenceRef}>
        {cloneElement(reference, {
          ...aria,
          ...eventHandlers,
          ...testId('reference'),
        })}
      </NodeResolver>
      <Portal active={Boolean(props.usePortal)}>
        <Transition items={localOpen} {...animation}>
          {(style, item) => item && <animated.div ref={targetRef} style={style} {...testId('target')}>{target}</animated.div>}
        </Transition>
      </Portal>
    </React.Fragment>
  )
})
