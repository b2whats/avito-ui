import React, { Component } from 'react'
import { Button } from '@avito/mobile-components'
import { ThemeProvider } from '@avito/mobile-components'
class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Button>SSR button</Button>
      </ThemeProvider>
    )
  }
}

export default App