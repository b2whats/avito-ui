import React, { isValidElement, ReactNode } from 'react'
import { foldThemeParams } from '../../styled-system'
import { uiComponent } from '../../theme'
import { Box, Stack } from '../Layout/'
import { Text, TextProps } from '../Text/'
import { MeterProps } from './contract'
import { meterTheme } from './theme'

export const Meter = uiComponent('Meter', meterTheme)<MeterProps>(({ value, label, caption, children, ...props }, { theme, marker }) => {
  const { Meter, Progress, ProgressActive, Label, Caption, Content } = foldThemeParams(props, theme)

  const renderTextSlot = (text: ReactNode, props: TextProps) => text && (
    isValidElement(text) ? <text.type {...props} {...text.props} /> :
    typeof text === 'function' ? text(props) :
    typeof text === 'string' ? <Text {...props}>{text}</Text> :
    null
  )

  return (
    <Stack column {...Meter} {...props} marker={marker()}>
      {(label || caption) && (
        <Stack>
          {renderTextSlot(label, Label)}
          {renderTextSlot(caption, Caption)}
        </Stack>
      )}
      <Box {...Progress} marker={marker('progress')}>
        {value != null && <Box {...ProgressActive} width={+value} />}
        {children && <Text {...Content}>{children}</Text>}
      </Box>
    </Stack>
  )
})
