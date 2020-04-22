import React, { isValidElement } from 'react'
import { useRefHook, useMeasure } from '@avito/core'
import { foldThemeParams } from '@avito/core'
import { mergeTheme, useTheme } from '@avito/core'
import { Stack, Box } from '@avito/core'
import { Text, TextProps } from '@avito/core'
import { ListItemProps } from './contract'
import { listItemTheme } from './theme'

const ListItem = ({ children, override, ...props }: ListItemProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(listItemTheme, theme.ListItem, override)

  // Необходимо прервать 3DTouch что бы он не прерывал событие клика
  // TODO: Протестировать на елефоне с HapticTouch
  //const setTouchRef = usePrevent3DTouch()
  const [bounds, setMeasureRef] = useMeasure()
  const [_, setRef] = useRefHook(setMeasureRef)

  props.beforeValign = bounds && props.beforeValign === 'auto' && listItemTheme.beforeTreshold < bounds.height
    ? 'top'
    : 'middle'

  props.afterValign = bounds && props.afterValign === 'auto' && listItemTheme.afterTreshold < bounds.height
    ? 'top'
    : 'middle'
  

  const { ListItem, Before, StackText, Label, Caption, Link, After } = foldThemeParams(props, componentTheme)

  const before = props.before && <Box {...Before.props} valignSelf={props.beforeValign}>{props.before}</Box>
  const after = props.after && <Box {...After.props} valignSelf={props.afterValign}>{props.after}</Box>

  const renderSlot = (Component: any, element: React.ReactNode, props?: TextProps) => (
    typeof element === 'string' ? <Component {...props}>{element}</Component> :
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
    <Stack ref={setRef} {...ListItem.props} {...props} {...events}>
      {before}
      <Stack column grow {...StackText.props}>
        {renderSlot(Text, props.label, Label.props)}
        {renderSlot(Text, props.caption, Caption.props)}
        {renderSlot(Text, props.link, Link.props)}
      </Stack>
      {after}
    </Stack>
  )
}

export default ListItem