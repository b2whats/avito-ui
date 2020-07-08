/// <reference types="cypress" />
import { mount, unmount } from 'cypress-react-unit-test'
import React, { ReactChild, ReactChildren, ReactElement } from 'react'
import { Stack, ThemeProvider, Box } from '@avito/core'
import { prettyProps } from './helpers'

export const imageSnapshot = (theme: any, children: ReactChildren | ReactChild[] | ReactChild) => () => {
  mount(
    <div id='screen'>
      <ThemeProvider defaultTheme={theme}>
        { children }
      </ThemeProvider>
    </div>
  )
  cy.get('#screen').matchImageSnapshot({
    padding: 5,
  })
  return unmount()
}

export const withPropLabels = (propCombos: any[], render: (props: any) => ReactElement) => (
  <Stack column spacing={5}>
    { propCombos.map((props, i) => (
      <Stack spacing={5} key={i}>
        {render(props)}
        <Box valignSelf='middle'>{prettyProps(props)}</Box>
      </Stack>
    )) }
  </Stack>
)
