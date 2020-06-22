import { c } from 'test'

const sp = {
  q: 1,
}

const aaa = {
  ...sp,
  b: 'string',
  c,
}

aaa.b.padEnd(1, 2)

export {
  aaa
}
