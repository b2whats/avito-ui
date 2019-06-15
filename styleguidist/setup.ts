import * as helpers from '../packages/components/src/doc-components/'

for (const name in helpers) {
  global[name] = helpers[name]
}