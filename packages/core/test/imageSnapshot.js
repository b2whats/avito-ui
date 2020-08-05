// Если написать это на тс, жест-тесты взорвутся
// https://github.com/cypress-io/cypress/issues/1087
import { mount, unmount } from 'cypress-react-unit-test'
import React from 'react'
import { Stack, ThemeProvider, Box } from '@avito/core'
import { prettyProps, flattenSets } from './helpers'

export const imageSnapshot = (theme, children) => () => {
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

export const withPropLabels = (propCombos, render) => (
  <Stack column spacing={5}>
    { propCombos.map((props, i) => (
      <Stack spacing={5} key={i}>
        {render(props)}
        <Box valignSelf='middle'>{prettyProps(props)}</Box>
      </Stack>
    )) }
  </Stack>
)

export const describePropFuzz = (name, Component, theme, propMocks) => {
  describe(name, () => {
    it('default states', imageSnapshot(
      theme,
      withPropLabels(flattenSets(propMocks), props => <Component {...props} />)
    ))
  })
}
