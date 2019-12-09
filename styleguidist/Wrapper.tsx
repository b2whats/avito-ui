import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { Icon, Stack } from '@avito/components'

import * as themes from './themes/'

const ThemeToggle = styled('div')`
  position: absolute;
  right: 0;
  top: 0px;
  transform: translateY(-120%);
`

export default function Preview(props: { children: React.ReactNode }) {
  const [state, update] = useState('custom')

  return (
    <ThemeProvider theme={themes[state]}>
      <div  style={{ fontFamily: 'Avito, Arial, sans-serif'}}>
        <ThemeToggle>
          <Stack space='m'>
            <Icon name='avito' onClick={() => update('custom')}/>
            <Icon name='autoteka' onClick={() => update('autoteka')}/>
            <Icon name='mav' onClick={() => update('mav')}/>
          </Stack>
        </ThemeToggle>
        {props.children}
      </div>
    </ThemeProvider>
  )
}