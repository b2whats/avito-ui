import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Button } from './components/Button'
import { theme } from './theme/'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button size='s'>1</Button>
      </ThemeProvider>
    )
  }
}

export default App;