import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Button } from '@avito/components'
import { theme } from '../packages/components/src/theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button size='ded'>1</Button>
      </ThemeProvider>
    )
  }
}

export default App;