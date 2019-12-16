import React, { isValidElement, useEffect, useState } from 'react'
import { useTheme } from '../../utils'
import { foldThemeParams, createClassName } from '../../styled-system'
import { ListItemProps } from './contract'
import { ListItemTheme } from './theme'
import { Stack, Box, useGroupHook } from '../Layout'
import { Text, TextProps } from '../Text'

const stackClassName = createClassName<ListItemProps, ListItemTheme>(
  (themestyle) => ({
    display: null,
    ...themestyle,
  }),
  (textRules) => `
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    ${textRules}
  `
)

const ListItem = ({ children, ...props }: ListItemProps) => {
  const theme = useTheme()
  const [active, setActive] = useState(false)

  props = {
    ...props,
  }

  const { ListItem, Before, StackText, Label, Caption, Link, After } = foldThemeParams(theme.listItem, props)
  const itemListStyle = stackClassName(props, theme, ListItem.style)

  const before = props.before && <Box {...Before.props}>{props.before}</Box>
  const after = props.after && <Box {...After.props}>{props.after}</Box>

  const renderSlot = (Component: any, element: ListItemProps['label'], props?: TextProps) => (
    typeof element === 'string' ? <Component {...props}>{element}</Component> :
    typeof element === 'function' ? element(props) :
    isValidElement(element) ? <element.type {...props} {...element.props} /> :
    undefined
  )

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    setActive(true)
    event.preventDefault()
  }

  const onMouseUp = (event: React.MouseEvent<HTMLElement>) => {
    setActive(false)

    props.onClick && props.onClick()
  }

  const elementState = props.disabled ? 'disabled' : active ? 'active' : undefined
  const interactiveProps = props.interactive && !props.disabled && {
    onMouseDown,
    onMouseUp,
    onTouchStart: onMouseDown,
    onTouchEnd: onMouseUp,
    as: 'label',
  }

  return (
    <Stack css={itemListStyle} {...ListItem.props} {...interactiveProps} data-state={elementState}>
      {before}
      <Stack column shrink {...StackText.props}>
        {renderSlot(Text, props.label, Label.props)}
        {renderSlot(Text, props.caption, Caption.props)}
        {renderSlot(Text, props.link, Link.props)}
      </Stack>
      {after}
    </Stack>
  )
}

export default ListItem