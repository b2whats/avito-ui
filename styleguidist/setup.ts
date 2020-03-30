import * as helpers from '../packages/mobile-components/src/doc-components'

for (const name in helpers) {
  global[name] = helpers[name]
}