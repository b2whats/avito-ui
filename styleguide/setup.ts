import * as helpers from '../packages/components/src/helpers/index'

for (const name in helpers) {
  global[name] = helpers[name]
}