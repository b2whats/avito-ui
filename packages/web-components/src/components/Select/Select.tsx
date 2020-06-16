import React from 'react'
import { css, uiComponent, Text, Input, InputProps, InputTheme, filterProps, ChevronNarrowIcon } from '@avito/core'
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
  options = [],
  getValue = option => option.value,
  getText = option => option.label,
  placeholderOption = 'Не выбрано',
  clearable = true,
  placeholder,
  value,
  ...props
}: SelectProps,{ theme }) => {
  const renderCore: InputProps['renderCore'] = props => {
    const selectedOption = options.find(option => getValue(option) == props.value)
    const textState = selectedOption ? {} : { 'data-placeholder': true }
    return (<>
      <Text truncate {...textState}>
        {selectedOption ? getText(selectedOption) : placeholder}
      </Text>
      {!props.readOnly && (
        <select
          {...filterProps(props)}
          css={selectStyle}
        >
          {(!props.value || clearable) && <option value=''>{placeholderOption}</option>}
          {options.map(option => {
            const value = getValue(option)
            return <option key={value} value={value}>{getText(option)}</option>
          })}
        </select>
      )}
    </>)
  }
  value = (!value && !placeholderOption && options[0]) ? getValue(options[0]) : value
  return (
    <Input
      iconAfter={<ChevronNarrowIcon rotate={180} />}
      {...props}
      value={value}
      override={theme as InputTheme}
      renderCore={renderCore}
    />
  )
})
