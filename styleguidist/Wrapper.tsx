import React from 'react'
import { ThemeProvider } from '@avito/core'
import { Page } from '@avito/mobile-components'
import { store } from './store'
import { observer } from 'mobx-react-lite'
import { themes } from './themes'

export default observer((props: { children: React.ReactNode }) => {
  const platform = themes[store.platform]
  return (
    <ThemeProvider defaultTheme={platform.platformTheme} theme={store.theme}>
      <div>
        <Page>
          {props.children}
        </Page>
      </div>
    </ThemeProvider>
  )
})
