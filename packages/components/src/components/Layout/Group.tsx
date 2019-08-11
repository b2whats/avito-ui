import React, { useRef } from 'react'
import { GroupProps } from './contract'
import { Stack } from './'

type GroupContext = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void,
  checked?: (string | number | undefined)[],
  block?: boolean,
  mode?: string,
  elements: React.MutableRefObject<any[]>,
  orientation: 'horizontal' | 'vertical'
}



export const GroupContext = React.createContext<GroupContext | null>(null)

const Group = ({ children, block, mode, value, name, onChange, ...props }: GroupProps) => {
  const elements =  useRef<any[]>([])

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!onChange || !mode) return

    const { currentTarget: target } = event
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
    const currentIndex = elements.current.findIndex(element => element === node)
    const count = elements.current.length
    let next: HTMLElement | null = null

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = currentIndex === count - 1 ? elements.current[0] : elements.current[currentIndex + 1]
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        next = currentIndex === 0 ? elements.current[count - 1] : elements.current[currentIndex - 1]
        break  
    }

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

// & > button:not(:last-child):not(:hover),
// & > :not(:last-child) button:not(:hover) {
//   border-right-color: transparent;
// }

// & > button:not(:last-child),
// & > :not(:last-child) button {
//   border-bottom-right-radius: 0px;
//   border-top-right-radius: 0px;
// }

// & > button:not(:first-child),
// & > :not(:first-child) button {
//   border-bottom-left-radius: 0px;
//   border-top-left-radius: 0px;
// }