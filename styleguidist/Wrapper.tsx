import React from 'react'
import { ThemeProvider } from '@avito/core'
import { Page } from '@avito/mobile-components'
import { ThemeStore } from './store'
import { useStore } from 'effector-react'

export default function Wrapper(props: { children: React.ReactNode }) {
  const { theme, platformTheme } = useStore(ThemeStore)

  return (
    <ThemeProvider defaultTheme={platformTheme} theme={theme}>
      <Page>
        {props.children}
      </Page>
    </ThemeProvider>
  )
}
