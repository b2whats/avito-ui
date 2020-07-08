/* eslint-disable import/no-default-export */
import React from 'react'
import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer'
import { ThemeProvider, Page } from '@avito/web-components'

export default function ThemableStyleGuide(props: any) {
  return (
    <ThemeProvider>
      <Page>
        <StyleGuideRenderer {...props} />
      </Page>
    </ThemeProvider>
  )
}
