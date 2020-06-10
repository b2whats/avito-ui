import React from 'react'
import { css, uiComponent, Input, InputProps, InputTheme, filterProps, ChevronNarrowIcon } from '@avito/core'
import { SelectProps } from './contract'
import { selectTheme } from './theme'

const selectStyle = css`
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;

  /* Включить клик */
  pointer-events: auto;
`

export const Select = uiComponent('Select', selectTheme)(({
  options = [{ value: 1, label: 'one' }, { value: 2, label: 'two' }],
  getValue = option => option.value,
  getText = option => option.label,
  placeholder,
  ...props
}: SelectProps,{ theme }) => {
  const renderCore: InputProps['renderCore'] = props => {
    const selectedOption = options.find(option => getValue(option) == props.value)
    return (<>
      {selectedOption
        ? getText(selectedOption)
        : (placeholder && <span data-placeholder>{placeholder}</span>)}
      <select
        {...filterProps(props)}
        css={selectStyle}
      >
        {options.map(option => {
          const value = getValue(option)
          return <option key={value} value={value}>{getText(option)}</option>
        })}
      </select>
    </>)
  }
  return (
    <Input
      {...props}
      override={theme as InputTheme}
      renderCore={renderCore}
      iconAfter={<ChevronNarrowIcon rotate={180} />}
    />
  )
})
