//@ts-nocheck
import React, { PureComponent } from 'react'
import { Input } from '../../'
import { SelectPopup } from './SelectPopup'

function getItemById(items, id, keyProperty) {
  return items.find(item => item[keyProperty] === id)
}

export class Select extends PureComponent {
  static defaultProps = {
    keyProperty: 'id',
    displayProperty: 'title',
    required: false,
  }
  
  state = {
    isPopupOpened: false,
  }
  
  render() {
    const { title, items, keyProperty, displayProperty, required, selectedKey } = this.props
    const { isPopupOpened } = this.state
    const selectedObject = getItemById(items, selectedKey, keyProperty)
    const value = selectedObject && selectedObject[displayProperty]

    return (
      <>
        <Input
          placeholder={title}
          value={value}
          required={required}
          readOnly
          clearable
          onMouseDown={this.handleWrapperClick}
          onChange={this.handleInputChange} />

        {
          isPopupOpened &&
            <SelectPopup
              items={items}
              title={title}
              keyProperty={keyProperty}
              displayProperty={displayProperty}
              selectedKey={selectedKey}
              onCancel={this.handlePopupCancel}
              onConfirm={this.handlePopupConfirm} />
        }
      </>
    )
  }

  handleWrapperClick = () => {
    this.setPopupVisible(true)
  }

  handlePopupCancel = () => {
    this.setPopupVisible(false)
  }

  handlePopupConfirm = key => {
    this.setPopupVisible(false)
    this.setValue(key)
  }

  handleInputChange = () => {
    const { required, selectedKey } = this.props
    if (selectedKey && !required) {
      this.resetValue()
    } else {
      this.setPopupVisible(true)
    }
  }

  setPopupVisible = (f) => {
    this.setState({
      isPopupOpened: f,
    })
  }

  setValue = key => {
    const { onChange } = this.props
    if (onChange) {
      onChange(key)
    }
  }

  resetValue = () => {
    this.setValue(null)
  }
}