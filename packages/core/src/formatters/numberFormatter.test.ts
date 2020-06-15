import { numberFormatter } from './numberFormatter'

const pipeFormatter = ({ format, replace = id => id }: typeof numberFormatter) => (raw: string) => {
  return replace(format(raw))
}

describe('numberFormatter', () => {
  describe('default integer format', () => {
    const pipe = pipeFormatter(numberFormatter)
    it('preserves empty string', () => expect(pipe('')).toBe(''))
    it('separates thousands', () => {
      expect(pipe('123')).toBe('123')
      expect(pipe('1234567')).toBe('1 234 567')
      expect(pipe('123456789')).toBe('123 456 789')
    })
    it('excludes disallowed symbols', () => expect(pipe('  1 a2  b 3c  ')).toBe('123'))
    it('trims fraction', () => expect(pipe('123.45')).toBe('123'))
    it('trims big numbers', () => {
      expect(pipe('12345678901234567890')).toBe('123 456 789 012 345')
      expect(pipe('    12345678901234567890')).toBe('123 456 789 012 345')
    })
  })

  describe('negative numbers', () => {
    it('preserves minus sign by default', () => {
      expect(pipeFormatter(numberFormatter)('-123')).toBe('-123')
    })
    it('removes sign if positiveOnly = true', () => {
      expect(pipeFormatter(numberFormatter.setup({ positiveOnly: true }))('-123')).toBe('123')
    })
  })

  describe('leading zeroes', () => {
    const pipe = pipeFormatter(numberFormatter)
    it('removes leadizng zeroes', () => expect(pipe('000001')).toBe('1'))
    it('preserves last zero', () => expect(pipe('000000')).toBe('0'))
    it('preserves single zero', () => expect(pipe('0')).toBe('0'))
  })

  describe('maxIntDigits', () => {
    const pipe = pipeFormatter(numberFormatter.setup({ maxIntDigits: 3 }))
    it('is configurable', () => expect(pipe('12345')).toBe('123'))
    it('does not include minus sign', () => expect(pipe('-123')).toBe('-123'))
    it('does not include leading zeroes', () => expect(pipe('0123')).toBe('123'))
  })

  describe('fraction format', () => {
    const pipe = pipeFormatter(numberFormatter.setup({ maxFracDigits: 4 }))
    it('preserves empty string', () => expect(pipe('')).toBe(''))
    it('separates thousands', () => expect(pipe('123456789')).toBe('123 456 789'))
    it('does not separate frac', () => expect(pipe('123456789.9999')).toBe('123 456 789.9999'))
    it('normalizes decimal separator', () => expect(pipe('123,9999')).toBe('123.9999'))
    it('trims muliple fraction', () => expect(pipe('123.45.66')).toBe('123.45'))
    it('trims long fraction', () => expect(pipe('9.12345678901234567890')).toBe('9.1234'))
    it('preserves trailing comma', () => expect(pipe('9.')).toBe('9.'))
  })
})
