import React from 'react'
import { ThemeProvider } from '@avito/core'
import { Page } from '@avito/mobile-components'
import { store } from './store'
import { observer } from 'mobx-react-lite'

export default observer((props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme={store.theme.platformTheme} theme={store.theme.theme as any}>
      <Page>
        {props.children}
      </Page>
    </ThemeProvider>
  )
})
