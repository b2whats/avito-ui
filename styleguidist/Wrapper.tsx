import React from 'react'
import { ThemeProvider } from '@avito/core'
import { Page, theme as mobile } from '@avito/mobile-components'
import { theme as web } from '@avito/web-components'
import { store } from './store'
import { observer } from 'mobx-react-lite'

export default observer((props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={store.theme === 'mobile' ? mobile : web}>
      <div>
        <Page>
          {props.children}
        </Page>
      </div>
    </ThemeProvider>
  )
})
