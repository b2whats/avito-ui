import { makeFormatter } from './makeFormatter'

export const numberFormatter = makeFormatter(({ positiveOnly, maxIntDigits, maxFracDigits }) => {
  const accept = new RegExp([
    positiveOnly ? '' : '^-',
    '\\d+',
    maxFracDigits ? '[,.]' : '',
  ].filter(frag => frag).join('|'), 'g')
  return {
    accept,
    format(str) {
      const [
        isNumeric = false,
        sign = '',
        int = '',
        sep = '',
        frac = ''] = (str.match(accept) || []).join('').match(/^(-)?(\d*)([,.])?(\d*)/) || []
      if (!isNumeric) return ''
      const prettyInt = `${positiveOnly ? '' : sign}${int
        // remove leading zeroes
        .replace(/^0+(?!$)/, '')
        // trim length
        .substring(0, maxIntDigits)
        // thousand separator
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`
      if (!maxFracDigits) return prettyInt
      return `${prettyInt}${sep}${frac.substring(0, maxFracDigits)}`
    },
    replace: value => value.replace(',', '.'),
    parse(stringValue: string) {
      return (stringValue.match(accept) || []).join('')
    },
  }
}, {
  maxIntDigits: 15,
  maxFracDigits: 0,
  positiveOnly: true,
})

export type NumberFormatterSettings = typeof numberFormatter.settings
