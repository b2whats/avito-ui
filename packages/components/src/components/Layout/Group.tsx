import React, { useRef, useContext, useState, useEffect } from 'react'
import { GroupProps } from './contract'
import { Stack } from '.'

type GroupContext = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void,
  checked?: (string | number | undefined | null)[],
  block?: boolean,
  mode?: string,
  elements: React.MutableRefObject<any[]>,
  orientation: 'horizontal' | 'vertical'
}

type GroupTargetHook = {
  block?: boolean,
  role?: string,
  tabIndex: number,
  'data-group': string,
  'aria-checked'?: boolean,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void,
}

type TargetProps = {
  value?: string | number | null,
  disabled?: boolean,
}

export const GroupContext = React.createContext<GroupContext | null>(null)

export function useGroupHook(ref: React.MutableRefObject<HTMLElement | null>, targetProps: TargetProps) {
  const groupContext = useContext(GroupContext)
  const props = {} as GroupTargetHook

  if (!groupContext) return props

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
    }
  }, [])

  props.block = 'block' in groupContext ? groupContext.block : undefined
  props['data-group'] = (`${groupContext.orientation} ${positions}`).trim()

  if (groupContext.onClick) {
    const checked = groupContext.checked && groupContext.checked.includes(targetProps.value)
    const isFirstChecked = !groupContext.checked && positions.includes('first')

    props['aria-checked'] = checked || false
    props.role = groupContext.mode
    props.tabIndex = (checked && !targetProps.disabled) || isFirstChecked || groupContext.mode !== 'radio' ? 0 : -1
    props.onClick = groupContext.onClick
    props.onKeyDown = groupContext.onKeyDown
  }

  return props
}


const Group = ({ children, block, mode, value, name, onChange, ...props }: GroupProps) => {
  const elements =  useRef<any[]>([])

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!onChange || !mode) return

    const { currentTarget: target } = event as React.MouseEvent<HTMLInputElement>
    const tartetValue = Number.isNaN(Number(target.value)) ? target.value : Number(target.value)
    const update = { name, value, type: 'checked-group' }

    if (mode === 'checkbox') {
      const checked = target.getAttribute('aria-checked')

      update.value = Array.isArray(value)
        ? checked === 'true'
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
    let next: HTMLElement & { disabled: boolean } | null = null

    do {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          currentIndex = currentIndex === count - 1 ? 0 : currentIndex + 1
          next = elements.current[currentIndex]
          break
        case 'ArrowUp':
        case 'ArrowLeft':
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

  const orientation = props.column ? 'vertical' : 'horizontal' as 'vertical' | 'horizontal'
  
  const context: GroupContext = {
    onClick: onChange ? onClick : undefined,
    onKeyDown: mode === 'radio' ? onKeyDown : undefined,
    checked: value !== null && value !== undefined
      ? Array.isArray(value) ? value : [value]
      : undefined,
    block,
    mode,
    elements,
    orientation,
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
}

export default Group
