import { formatCount } from './formatCount'

describe('formatCount', () => {
  it('stringifies normal value', () => expect(formatCount(33)).toBe('33'))

  it('empty on zero', () => expect(formatCount(0)).toBe(''))
  it('preserves zero with option', () => expect(formatCount(0, { showZero: true })).toBe('0'))
  it('empty on negative', () => expect(formatCount(-10)).toBe(''))
  it('preserves negative with option', () => expect(formatCount(-10, { preserveNegative: true })).toBe('-10'))

  it('trims > max', () => expect(formatCount(200)).toBe('99+'))
  it('stringifies max', () => expect(formatCount(99)).toBe('99'))
  it('max is configurable', () => expect(formatCount(200, { max: 999 })).toBe('200'))

  it('handles string value', () => expect(formatCount('200')).toBe('99+'))
  it('preserve non-numeric input', () => expect(formatCount('hello')).toBe('hello'))
})
