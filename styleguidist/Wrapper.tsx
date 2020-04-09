import React from 'react'
import { ThemeProvider } from '@avito/core/theme/'
import { Page } from '@avito/mobile-components'
import * as tokens from '@avito/tokens'
import { store } from './store'
import { observer } from 'mobx-react-lite'

export default observer((props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={tokens[store.theme]}>
      <div>
        <Page>
          {props.children}
        </Page>
      </div>
    </ThemeProvider>
  )
})
