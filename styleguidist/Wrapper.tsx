import { useStore } from 'effector-react'
import React from 'react'
import { ThemeProvider } from '@avito/core'
import { Page } from '@avito/mobile-components'
import { StyleguideStore } from './store'

export default function Wrapper(props: { children: React.ReactNode }) {
  const { theme, platformTheme } = useStore(StyleguideStore)

  return (
    <ThemeProvider defaultTheme={platformTheme} theme={theme}>
      <Page>
        {props.children}
      </Page>
    </ThemeProvider>
  )
}
