import { getStyles } from '../packages/components/src/styled-system/getThemeStyle'
import tokens from '../packages/tokens/src/mav'
const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

const params5 = {
  fontFamily: 'Ariial',
  fontSize: 's',
  lineHeight: 1.2,
  crop: true,
  m: 12,
}

const params10 = {
  fontFamily: 'Ariial',
  fontSize: 's',
  lineHeight: 1.2,
  crop: true,
  m: 12,
  pb: 10,
  color: 'red50',
  borderColor: 'red50',
  backgroundColorHover: 'red50',
  borderColorFocus: 'red50',
}

const params20 = {
  fontFamily: 'Ariial',
  fontSize: 's',
  lineHeight: 1.2,
  bold: true,
  uppercase: true,
  truncate: true,
  crop: true,
  m: 12,
  mx: 12,
  pt: 10,
  p: 10,
  py: 10,
  pb: 10,
  color: 'red50',
  borderColor: 'red50',
  backgroundColorHover: 'red50',
  backgroundColorActive: 'red50',
  colorVisited: 'red50',
  borderColorChecked: 'red50',
  borderColorFocus: 'red50',
}

suite
  .add('getStyles - 5', function() {
    getStyles(params5, tokens)
  })
  .add('getStyles - 10', function() {
    getStyles(params10, tokens)
  })
  .add('getStyles - 20', function() {
    getStyles(params20, tokens)
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .run({ 'async': true })