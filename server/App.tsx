import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Button, Stack, Icon, theme } from '@avito/components'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button>SSR button</Button>
      </ThemeProvider>
    )
  }
}

export default App