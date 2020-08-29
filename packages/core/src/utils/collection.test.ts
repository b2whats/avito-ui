import { omit, pick, trueMap } from './collection'

describe(omit, () => {
  it('omits by array', () => expect(omit({ x: 1, y: 1 }, 'x')).toEqual({ y: 1 }))
  it('omits by object', () => expect(omit({ x: 1, y: 1 }, { x: true })).toEqual({ y: 1 }))
  it('no-op with empty args', () => expect(omit({ x: 1, y: 1 })).toEqual({ x: 1, y: 1 }))
})

describe(pick, () => {
  it('picks by array', () => expect(pick({ x: 1, y: 1 }, 'x')).toEqual({ x: 1 }))
  it('picks by object', () => expect(pick({ x: 1, y: 1 }, { x: true })).toEqual({ x: 1 }))
  it('accepts empty args', () => expect(pick({ x: 1, y: 1 })).toEqual({}))
})

describe(trueMap, () => {
  it('maps list to { key: true }', () => expect(trueMap(['x', 'y'])).toEqual({ x: true, y: true }))
})
