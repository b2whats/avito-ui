import * as helpers from './components'

for (const name in helpers) {
  global[name] = helpers[name]
}