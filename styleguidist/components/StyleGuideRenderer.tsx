import React from 'react'
import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer'
import { ThemeProvider } from '@avito/core/theme'
import { web } from '@avito/tokens'

export default (props: any) => (
  <ThemeProvider theme={web}>
    <StyleGuideRenderer {...props} />
  </ThemeProvider>
)
