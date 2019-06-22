import * as React from 'react'
import * as loaders from './loaders'

const Loader = ({ name }) => {
  return React.createElement(loaders.dots)
}

export default Loader
