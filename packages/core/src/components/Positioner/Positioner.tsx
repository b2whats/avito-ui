import React, { useRef, useLayoutEffect, useState, useMemo } from 'react'
import { createPopper } from '@popperjs/core'
import { Portal } from '../Portal/'
import { useRefHook } from '../../hooks/'
import { PositionerProps } from './contract'

const getModifiers = (props: PositionerProps) => {
  const modifiers = ['offset', 'arrow', 'flip']

  return modifiers.map(param => param in props
    && { name: param, enabled: Boolean(props[param]), options: props[param] || {} }
  ).filter(Boolean) as PositionerProps['modifiers']
}

const getTrigger = (trigger?: 'click' | 'hover') => trigger && ({
  click: ['click'],
  hover: ['mouseenter', 'mouseleave'],
})[trigger]

export const Positioner = ({ usePortal, ...props }: PositionerProps) => {
  const [init, setInit] = useState(false)
  const [visible, setVisible] = useState(false)
  const [targetRef, setTarget] = useRefHook<HTMLElement>()
  const referenceRef = useRef<Element | null>(null)
  const setReference = (node: Element | null) => node && (referenceRef.current = node.nextElementSibling)

  const show = props.target && !props.trigger || visible

  const options = useMemo(() => ({
    strategy: props.strategy || 'absolute',
    placement: props.placement || 'bottom',
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
  }, [show, options])

  useLayoutEffect(() => {
    const reference = referenceRef.current
    const trigger = getTrigger(props.trigger)
    const onToggle = () => setVisible(state => !state)

    if (reference === null || !trigger) return

    trigger.forEach(event => reference.addEventListener(event, onToggle))

    return () => {
      trigger.forEach(event => reference.removeEventListener(event, onToggle))
    }
  }, [props.trigger])

  const Wrapper = usePortal ? Portal : React.Fragment
  const popper = show && <div ref={setTarget}>{props.target}</div>

  return (
    <React.Fragment>
      {!init && <div ref={setReference} hidden />}
      {props.children}
      <Wrapper>
        {popper}
      </Wrapper>
    </React.Fragment>
  )
}