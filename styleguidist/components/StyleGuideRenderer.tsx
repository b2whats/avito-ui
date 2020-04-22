import React from 'react'
import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer'
import { ThemeProvider } from '@avito/core'
import { web } from '@avito/tokens'

export default function ThemableStyleGuide(props: any) {
  return (
    <ThemeProvider theme={web}>
      <StyleGuideRenderer {...props} />
    </ThemeProvider>
  )
}
