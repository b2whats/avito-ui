import React, { Component } from 'react'
import { ThemeProvider, Button, Tooltip } from '@avito/mobile-components'
import { CrossIcon } from '@avito/mobile-components/icons'

export class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Tooltip content='tooltip' trigger='click' open>
          <Button preset='primary' iconAfter={CrossIcon}>SSR button</Button>
        </Tooltip>
      </ThemeProvider>
    )
  }
}
