import * as helpers from '../packages/components/src/doc-components/index'

for (const name in helpers) {
  global[name] = helpers[name]
}