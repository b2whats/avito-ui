import { useState } from 'react'
import * as helpers from './components'

for (const name in helpers) {
  global[name] = helpers[name]
}

global['useState'] = useState