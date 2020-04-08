import React from 'react'
import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer'
import { ThemeProvider } from '@avito/core/theme'
import { Icon, Stack } from '@avito/mobile-components'
import styled from '@avito/core/styled-system/'
import { web } from '@avito/tokens'
import { store } from '../store'
import { observer } from 'mobx-react-lite'


const ThemeToggle = styled('div')`
  position: fixed;
  right: 0px;
  top: 0px;
  background: white;
`

const ThemeControl = observer(() => {
  const { theme } = store
  return (
    <ThemeToggle>
      <Stack spacing='s'>
        <Icon name='mobile' color={ theme === 'mobile' ? 'orange200' : 'black' } onClick={() => store.setTheme('mobile')}/>
        <Icon name='web' color={ theme === 'web' ? 'orange200' : 'black' } onClick={() => store.setTheme('web')}/>
      </Stack>
    </ThemeToggle>
  )
})

export default (props: any) => (
  <ThemeProvider theme={web}>
    <ThemeControl />
    <StyleGuideRenderer {...props} />
  </ThemeProvider>
)
