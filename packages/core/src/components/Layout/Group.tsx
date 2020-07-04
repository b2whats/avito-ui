import React, { useRef, useContext, useState, useEffect } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'
import { uiComponent } from '../../theme'
import { GroupProps } from './contract'
import { Stack } from './Stack'

type GroupContext = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void
  checked?: (string | number | undefined | null)[]
  block?: boolean
  spacing?: boolean
  disabled?: boolean
  mode?: 'radio' | 'checkbox'
  elements: React.MutableRefObject<any[]>
  orientation: 'horizontal' | 'vertical'
  marker?: string
}

type GroupTargetHook = {
  grow?: boolean
  role?: string
  tabIndex?: number
  disabled?: boolean
  'data-group'?: string
  checked?: boolean
  onClick?: (event: any) => void
  onKeyDown?: (event: any) => void
  [key: string]: any
}

export const GroupContext = React.createContext<GroupContext | null>(null)

export function useGroupHook<T extends GroupTargetHook>(
  ref: React.MutableRefObject<HTMLElement | null>,
  targetProps: T
): T & GroupTargetHook {
  const groupContext = useContext(GroupContext)

  if (!groupContext) return targetProps as T

  const [positions, setPositions] = useState<string>('')

  useEffect(() => {
    if (groupContext && ref.current !== null) {
      groupContext.elements.current.push(ref.current)

      let node: HTMLElement | null = ref.current
      let prevNode = null

      while (node) {
        if (node.matches('[role*=group]')) {
          let pos = []
          node.firstElementChild === prevNode && (pos.push('first'))
          node.lastElementChild === prevNode && (pos.push('last'))

          setPositions(pos.join(' '))
          break
        } else {
          prevNode = node
          node = node.parentElement
        }
      }

      const checked = groupContext.checked && groupContext.checked.includes(targetProps.value)

      if (groupContext.mode === 'radio' && checked) {
        scrollIntoView(ref.current, {
          behavior: 'smooth',
          scrollMode: 'if-needed',
          boundary: node,
        })
      }
    }
  }, [])

  if (groupContext.block) {
    targetProps.grow = true
  }

  targetProps['data-group'] = (`${groupContext.orientation} ${groupContext.spacing ? 'spacing' : ''} ${positions}`).trim()

  if (groupContext.onClick) {
    const checked = groupContext.checked && groupContext.checked.includes(targetProps.value)
    const isFirstChecked = !groupContext.checked && positions.includes('first')

    targetProps = {
      checked: checked || false,
      role: groupContext.mode,
      disabled: groupContext.disabled,
      tabIndex: (checked && !targetProps.disabled) || isFirstChecked || groupContext.mode !== 'radio' ? 0 : -1,
      onClick: groupContext.onClick,
      onKeyDown: groupContext.onKeyDown,
      marker: groupContext.marker,
      ...targetProps,
    }
  }

  return targetProps as T & GroupTargetHook
}


export const Group = uiComponent('Group', {}, { memo: false })((
  { children, block, mode, value, name, disabled, marker, onChange, ...props }: GroupProps,
  { tokens }
) => {
  const elements = useRef<(HTMLInputElement | HTMLButtonElement)[]>([])

  if (!onChange && tokens._demo && mode === 'radio') {
    const [fallbackValue, fallbackChange] = useState(value)
    onChange = event => fallbackChange(event.value)
    value = fallbackValue
  }

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!onChange || !mode) return

    const { currentTarget: target } = event as React.MouseEvent<HTMLInputElement>

    if (props.scroll) {
      scrollIntoView(target, {
        behavior: 'smooth',
        scrollMode: 'if-needed',
      })
    }

    const tartetValue = Number.isNaN(Number(target.value)) ? target.value : Number(target.value)
    const update = { mode, name, value, type: 'toggle-group' }

    if (mode === 'checkbox') {
      const checked = target.tagName === 'INPUT'
        ? !target.checked
        : target.getAttribute('aria-checked') === 'true'

      update.value = Array.isArray(value)
        ? checked
          ? value.filter(val => val !== tartetValue)
          : [...value, tartetValue]
        : [tartetValue]

      update.value = update.value.length > 0 ? update.value : null
    }

    if (mode === 'radio') {
      update.value = tartetValue
    }

    onChange(update)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const node = event.currentTarget
    let currentIndex = elements.current.findIndex(element => element === node)
    const count = elements.current.length
    let next

    do {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault()
          currentIndex = currentIndex === count - 1 ? 0 : currentIndex + 1
          next = elements.current[currentIndex]
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault()
          currentIndex = currentIndex === 0 ? count - 1 : currentIndex - 1
          next = elements.current[currentIndex]
          break
      }
    } while (next && next.disabled)

    if (next) {
      next.focus()
      next.click()
    }
  }

  const orientation = props.column ? 'vertical' : 'horizontal'

  const context: GroupContext = {
    onClick: onChange ? onClick : undefined,
    onKeyDown: mode === 'radio' ? onKeyDown : undefined,
    checked: value !== null && value !== undefined
      ? Array.isArray(value) ? value : [value]
      : undefined,
    block,
    spacing: Boolean(props.spacing),
    mode,
    disabled,
    elements,
    orientation,
    marker,
  }

  const aria = {
    role: mode === 'radio' ? 'radiogroup' : 'group',
    'aria-orientation': orientation,
  }

  return (
    <GroupContext.Provider value={context}>
      <Stack inline={!block} {...props} {...aria}>{children}</Stack>
    </GroupContext.Provider>
  )
})
