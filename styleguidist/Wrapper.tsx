import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { theme, createTheme, Icon, Stack } from '@avito/components'
import { tokens, Tokens } from '@avito/tokens'

const merge = require('deepmerge')

const themes = {
  default: theme,
  user: createTheme(merge(tokens, {
    variants: {
      primary: 'blue',
      secondary: 'blue',
      error: 'blue',
      success: 'blue',
      warning: 'blue',
    },
  })) as Tokens,
}

const ThemeToggle = styled('div')`
  position: absolute;
  right: 0;
  top: 0px;
  transform: translateY(-120%);
`

export default function Preview(props) {
  const [state, update] = useState('default')

  return (
    <ThemeProvider theme={themes[state]}>
      <div>
        <ThemeToggle>
          <Stack space='m'>
            <Icon name='avito' onClick={() => update('default')}/>
            <Icon name='autoteka' onClick={() => update('user')}/>
          </Stack>
        </ThemeToggle>
        {props.children}
      </div>
    </ThemeProvider>
  )
}