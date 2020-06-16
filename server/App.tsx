import React, { Component } from 'react'
import { ThemeProvider, Button, Tooltip } from '@avito/mobile-components/'

export class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Tooltip content='tooltip' trigger='click' open>
          <Button preset='primary'>SSR button</Button>
        </Tooltip>
      </ThemeProvider>
    )
  }
}
