import React, { isValidElement } from 'react'
import { useRefObject, useMeasure, foldThemeParams, uiComponent, Stack, Box, Text, TextProps } from '@avito/core'
import { ListItemProps } from './contract'
import { listItemTheme } from './theme'

export const ListItem = uiComponent('ListItem', listItemTheme)(({ children, ...props }: ListItemProps, { theme, testId, ref }) => {
  // Необходимо прервать 3DTouch что бы он не прерывал событие клика
  // TODO: Протестировать на телефоне с HapticTouch
  //const setTouchRef = usePrevent3DTouch()
  const [bounds, setMeasureRef] = useMeasure()

  const beforeValign = props.beforeValign === 'auto'
    ? bounds && props.beforeTreshold! < bounds.height ? 'top' : 'middle'
    : props.beforeValign

  const afterValign = props.afterValign === 'auto'
    ? bounds && props.afterTreshold! < bounds.height ? 'top' : 'middle'
    : props.afterValign


  const { ListItem, Before, StackText, Label, Caption, Link, After } = foldThemeParams(props, theme)

  const before = props.before && <Box {...Before.props} valignSelf={beforeValign}>{props.before}</Box>
  const after = props.after && <Box {...After.props} valignSelf={afterValign}>{props.after}</Box>

  const renderSlot = (Component: any, element: React.ReactNode, props?: TextProps) => (
    typeof element === 'string' && element ? <Component {...props}>{element}</Component> :
    typeof element === 'function' ? element(props) :
    isValidElement(element) ? <element.type {...props} {...element.props} /> :
    undefined
  )

  const preventFocus = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const events = props.onClick && !props.disabled && {
    onMouseDown: preventFocus,
    onClick: props.onClick,
    as: 'label',
  }

  return (
    <Stack {...ListItem.props} {...props} {...events} {...testId()} ref={useRefObject(ref, setMeasureRef)}>
      {before}
      <Stack column grow {...StackText.props}>
        {renderSlot(Text, props.label, Label.props)}
        {renderSlot(Text, props.caption, Caption.props)}
        {renderSlot(Text, props.link, Link.props)}
      </Stack>
      {after}
    </Stack>
  )
})
