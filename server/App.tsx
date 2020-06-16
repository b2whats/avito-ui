import React, { Component } from 'react'
import { Button, Tooltip } from '@avito/mobile-components/'
import { ThemeProvider } from '@avito/mobile-components'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Tooltip content='tooltip' trigger='click' open>
          <Button>SSR button</Button>
        </Tooltip>
      </ThemeProvider>
    )
  }
}

export default App