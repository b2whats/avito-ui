import React, { useRef, useState, useMemo, useCallback, useEffect, Children } from 'react'
import { animated, Transition } from 'react-spring'
import { popperGenerator, defaultModifiers, StrictModifiers } from '@popperjs/core/lib/popper'
import { useTheme, mergeTheme } from '../../theme/'
import { useIsomorphicLayoutEffect } from '../../hooks/'
import { Portal } from '../Portal/'
import { PositionerProps } from './contract'
import { positionerTheme } from './theme'
import { targetWidth, customApplyStyles, TargetWidthModifier  } from './modifiers/'


type Nodes = {
  tmp: HTMLElement,
  parent: HTMLElement,
  comment: Comment,
} | null

const HTMLComment = React.forwardRef<Comment, { text: string }>(({ text }, ref) => {
  const nodes = React.useRef<Nodes>(null)

  const setRef = useCallback((node) => {
    if (node) {
      const { tmp, parent, comment } = nodes.current = {
        tmp: node,
        parent: node.parentNode,
        comment: document.createComment(text),
      }

      if (parent && parent.contains(tmp)) {
        parent.replaceChild(comment, tmp)
      }
    } else {
      nodes.current = null
    }

    if (!ref) return
    const commentNode = nodes.current && nodes.current.comment

    if (typeof ref === 'function') {
      ref(commentNode)
    } else if (typeof ref === 'object') {
      ref.current = commentNode
    }

  }, [])

  useIsomorphicLayoutEffect(() => () => {
    if (!nodes.current) return

    const { tmp, parent, comment } = nodes.current

    if(parent && tmp && comment) {
      parent.replaceChild(tmp, comment)
    }
  }, [])

  return <span ref={setRef} hidden />
})

HTMLComment.displayName = 'HTMLComment'

const createPopper = popperGenerator({
  defaultModifiers: [...defaultModifiers, customApplyStyles, targetWidth],
})

const getModifiers = ({ minWidth, width, maxWidth, ...props}: Partial<PositionerProps>) => {
  const modifiersName = ['offset', 'arrow', 'flip', 'preventOverflow', 'hide'] as const
  const modifiers: (StrictModifiers | Partial<TargetWidthModifier>)[] = []

  modifiersName.forEach(name => {
    if (name in props) {
      modifiers.push({ name, enabled: Boolean(props[name]), options: props[name] || undefined })
    }
  })

  if (minWidth || width || maxWidth) {
    modifiers.push({ name: 'targetWidth', enabled: true, options: { minWidth, width, maxWidth } })
  }

  return modifiers
}

type EventHandle = {
  handleToggle: (open: boolean) => void
  reference: HTMLElement
  targetRef: React.MutableRefObject<HTMLDivElement | null>
  trigger: PositionerProps['trigger']
}
class TriggerEvents implements EventListenerObject {
  handleToggle: EventHandle['handleToggle']
  targetRef: EventHandle['targetRef']
  trigger: EventHandle['trigger']
  reference: EventHandle['reference']

  constructor({ handleToggle, targetRef, trigger, reference }: EventHandle) {
    this.handleToggle = handleToggle
    this.targetRef = targetRef
    this.trigger = trigger
    this.reference = reference
  }

  handleEvent(event: Event) {
    this[event.type] && this[event.type](event)
  }

  click() {
    if (this.targetRef.current) {
      this.handleToggle(false)
    } else {
      this.handleToggle(true)
    }
  }

  keydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.handleToggle(false)
    }
  }

  mouseenter() { this.handleToggle(true) }
  mouseleave() { this.handleToggle(false) }

  focus() { this.handleToggle(true) }
  blur() { this.handleToggle(false) }
}

export const wrapEvent = (theirHandler, ourHandler) => event => {
  if (theirHandler) {
    theirHandler(event)
  }

  if (ourHandler) {
    ourHandler(event)
  }
}

export const Positioner = ({ override, onOutsideClick, ...props }: PositionerProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(positionerTheme, theme.Positioner, override)

  const [localOpen, setLocalOpen] = useState(Boolean(props.open))
  const targetRef = useRef<HTMLDivElement | null>(null)
  const referenceRef = useRef<HTMLElement | null>(null)
  const anchorRef = useRef<Comment | null>(null)
  const toggleTimerId = useRef<number>()

  props = {
    ...componentTheme.defaultProps,
    ...props,
  }

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
    props.animation,
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

  // Следим за изменением reference и обновляем DOM ноду
  useIsomorphicLayoutEffect(() => {
    referenceRef.current = props.children && anchorRef.current
      ? anchorRef.current.nextElementSibling as HTMLElement
      : null
  })

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
  }, [localOpen, options])

  // Устанавливаем глобальный обрабочики при открытии
  useEffect(() => {
    const target = targetRef.current
    const reference = referenceRef.current

    if (!reference || !target) return

    const handleScroll = () => handleToggle(false)
    const handlePressEsc = (event: KeyboardEvent) => event.key === 'Escape' && handleToggle(false)
    const handleOutsideClick = (event: MouseEvent) => {
      if (target.contains(event.target as Node) || reference.contains(event.target as Node)) return

      handleToggle(false)
    }

    props.closeOnOutsideClick && document.addEventListener('click', handleOutsideClick, true)
    props.closeOnScroll && document.addEventListener('scroll', handleScroll)
    props.closeOnEsc && document.addEventListener('keydown', handlePressEsc)
    return () => {
      props.closeOnOutsideClick && document.removeEventListener('click', handleOutsideClick, true)
      props.closeOnScroll && document.removeEventListener('scroll', handleScroll)
      props.closeOnEsc && document.removeEventListener('keydown', handlePressEsc)

    }
  }, [localOpen, handleToggle, props.closeOnOutsideClick, props.closeOnScroll, props.closeOnEsc])

  const reference = Children.only(props.children)

  let eventHandlers = {}

  if (props.trigger === 'click') {
    eventHandlers = {
      onClick: (event: MouseEvent) => {
        reference.props.onClick && reference.props.onClick(event)
        handleToggle(!localOpen)
      },
    }
  }

  if (props.trigger === 'hover') {
    eventHandlers = {
      onFocus: wrapEvent(child.props.onFocus, onOpen),
      onKeyDown: wrapEvent(child.props.onKeyDown, event => {
        if (event.key === 'Escape') {
          setTimeout(onClose, 300)
        }
      }),
      onBlur: wrapEvent(child.props.onBlur, onClose),
      onMouseEnter: wrapEvent(child.props.onMouseEnter, () => {
        isHoveringRef.current = true
        openTimeout.current = setTimeout(onOpen, 300)
      }),
      onMouseLeave: wrapEvent(child.props.onMouseLeave, () => {
        isHoveringRef.current = false
        if (openTimeout.current) {
          clearTimeout(openTimeout.current)
          openTimeout.current = null
        }
        setTimeout(() => {
          if (isHoveringRef.current === false) {
            onClose()
          }
        }, 300)
      }),
    }
  }

  useIsomorphicLayoutEffect(() => {
    const reference = referenceRef.current

    if (!reference || !props.trigger) return

    const eventsType = {
      click: ['click'],
      hover: ['mouseenter', 'mouseleave'],
    }[props.trigger]

    const handlers = new TriggerEvents({ handleToggle, trigger: props.trigger, targetRef, reference })

    eventsType.forEach(type => reference.addEventListener(type, handlers))

    return () => {
      eventsType.forEach(type => reference.removeEventListener(type, handlers))
    }
  }, [props.trigger, props.closeOnEsc, handleToggle])

  const target = typeof props.target === 'function' ? props.target({ close: () => handleToggle(false) }) : props.target

  const targetWrapper = props.animation ?
    <Transition items={localOpen} {...(componentTheme.transitions[props.animation])}>
      {(style, item) => item && <animated.div ref={localOpen ? targetRef : undefined} style={style}>{target}</animated.div>}
    </Transition> :
    localOpen && <div ref={targetRef}>{target}</div>

  console.log('render', localOpen)
  return (
    <React.Fragment>
      <HTMLComment ref={anchorRef} text='positioner anchor' />
      {Children.only(props.children)}
      <Portal turn={props.usePortal}>
        {targetWrapper}
      </Portal>
    </React.Fragment>
  )
}