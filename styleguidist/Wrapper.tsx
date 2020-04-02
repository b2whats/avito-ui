import React, { useState } from 'react'
import { ThemeProvider } from '@avito/core/theme'
import styled from '@emotion/styled'
import { Icon, Stack, Page } from '@avito/mobile-components'
import * as tokens from '@avito/tokens'


const ThemeToggle = styled('div')`
  position: absolute;
  right: 0;
  top: 0px;
  transform: translateY(-150%);
`

export default function Preview(props: { children: React.ReactNode }) {
  const [state, update] = useState('mobile')

  return (
    <ThemeProvider theme={tokens[state]}>
      <div>
        <ThemeToggle>
          <Stack spacing='s'>
            <Icon name='mobile' onClick={() => update('mobile')}/>
            <Icon name='web' onClick={() => update('web')}/>
          </Stack>
        </ThemeToggle>
        <Page>
          {props.children}
        </Page>
      </div>
    </ThemeProvider>
  )
}
