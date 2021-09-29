import React, { Component } from 'react'
import { ThemeProvider, Button, Tooltip, Image } from '@avito/web-components'
// import { CrossIcon } from '@avito/mobile-components/icons'

export class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div>
            <Tooltip content='tooltip' trigger='click' open>
              <Button preset='newDefault' sizex>SSR button</Button>
            </Tooltip>
            <Image width={540} height={180} src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' lazy/>
        </div>
      </ThemeProvider>
    )
  }
}
