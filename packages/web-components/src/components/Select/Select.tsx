import React from 'react'
import { css, uiComponent, Input, InputProps, InputTheme } from '@avito/core'
import { SelectProps } from './contract'
import { selectTheme } from './theme'

const selectStyle = css`
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
`

export const Select = uiComponent('Select', selectTheme)((
  { options, getValue, getText, ...props }: SelectProps,
  { theme }
) => {
  const renderCore: InputProps['renderCore'] = props => {
    const selectedOption = options.find(option => getValue(option) === props.value)
    return (<>
      {selectedOption ? getText(selectedOption) : ''}
      <select
        {...(props as any)}
        css={selectStyle}
      >
        {options.map(option => {
          const value = getValue(option)
          return <option key={value} value={value}>{getText(option)}</option>
        })}
      </select>
    </>)
  }
  return <Input {...props} override={theme as InputTheme} renderCore={renderCore} />
})
