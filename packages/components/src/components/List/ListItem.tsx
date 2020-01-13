import React, { isValidElement } from 'react'
import { useTheme } from '../../utils/'
import { useRefHook, usePrevent3DTouch, useMeasure } from '../../hooks/'
import { foldThemeParams, createClassName } from '../../styled-system'
import { ListItemProps } from './contract'
import { ListItemTheme } from './theme'
import { Stack, Box, useGroupHook } from '../Layout'
import { Text, TextProps } from '../Text'

const stackClassName = createClassName<ListItemProps, ListItemTheme>(
  (themestyle, props) => ({
    display: null,
    ...themestyle,
    ...props,
  }),
  (textRules, { disabled }) => `
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    ${disabled ? 'pointer-events: none;' : ''}

    ${textRules}
  `
)

const ListItem = ({ children, ...props }: ListItemProps) => {
  const theme = useTheme()
  // Необходимо прервать 3DTouch что бы он не прерывал событие клика
  const setTouchRef = usePrevent3DTouch()
  const [bounds, setMeasureRef] = useMeasure()
  const [_, setRef] = useRefHook<HTMLElement>(setMeasureRef, props.interactive ? setTouchRef : null)

  props.beforeValign = bounds && props.beforeValign === 'auto' && theme.listItem.beforeTreshold < bounds.height
    ? 'top'
    : 'middle'

  props.afterValign = bounds && props.afterValign === 'auto' && theme.listItem.afterTreshold < bounds.height
    ? 'top'
    : 'middle'
  

  const { ListItem, Before, StackText, Label, Caption, Link, After } = foldThemeParams(theme.listItem, props)
  const itemListStyle = stackClassName(props, theme, ListItem.style)

  const before = props.before && <Box {...Before.props} valignSelf={props.beforeValign}>{props.before}</Box>
  const after = props.after && <Box {...After.props} valignSelf={props.afterValign}>{props.after}</Box>

  const renderSlot = (Component: any, element: React.ReactNode, props?: TextProps) => (
    typeof element === 'string' ? <Component {...props}>{element}</Component> :
    typeof element === 'function' ? element(props) :
    isValidElement(element) ? <element.type {...props} {...element.props} /> :
    undefined
  )

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const onMouseUp = () => {
    props.onClick && props.onClick()
  }

  const interactiveProps = props.interactive && !props.disabled && {
    onMouseDown,
    onMouseUp,
    onTouchStart: onMouseDown,
    onTouchEnd: onMouseUp,
    as: 'label',
  }

  return (
    <Stack ref={setRef} css={itemListStyle} {...ListItem.props} {...interactiveProps} aria-disabled={props.disabled}>
      {before}
      <Stack column shrink valignSelf='baseline' {...StackText.props}>
        {renderSlot(Text, props.label, Label.props)}
        {renderSlot(Text, props.caption, Caption.props)}
        {renderSlot(Text, props.link, Link.props)}
      </Stack>
      {after}
    </Stack>
  )
}

export default ListItem