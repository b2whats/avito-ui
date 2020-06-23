//import 'core-js/stable'

import { aaa } from './test-out'


const a = {
  b: 'string',
}

const b = {
  ...a,
  A: 'AA',
}

b.b.padEnd(5, '_')
const c = aaa.b.padStart(5, '_')

class A {
  data ={}
}


export {
  c, A
}
