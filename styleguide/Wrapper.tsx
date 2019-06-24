import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../packages/components/src/theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

export default App;