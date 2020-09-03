import { gapStyle } from './gapStyle'

const palette: any = { __clr__: '__hex__' }
describe('gapStyle', () => {
  describe('returns empty', () => {
    it('if gap=false', () =>
      expect(gapStyle({ gap: false, gapColor: 'red', gapSize: 10 }, palette)).toBeFalsy())
    it('if options empty', () =>
      expect(gapStyle({}, palette)).toBeFalsy())
  })
  it('default 2px white gap', () =>
    expect(gapStyle({ gap: true }, palette)).toMatch(/2px.*white/))
  it('respects gapColor', () =>
    expect(gapStyle({ gapColor: '__clr__' }, palette)).toContain('__hex__'))
  it('respects gapSize', () =>
    expect(gapStyle({ gapSize: 20 }, palette)).toContain('20px'))
})
