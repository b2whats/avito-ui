import { Tokens } from './contract'

const tokens: Tokens = {
  focus: {
    shape: 'white 0px 0px 0px 1px, 0px 0px 2px 3px',
    defaultColor: 'blue20',
    primaryColor: 'blue20',
    secondaryColor: 'blue20',
    successColor: 'blue20',
    warningColor: 'blue20',
    errorColor: 'blue20',
  },
  font: {
    fontFamily: 'Arial',

    fontSize: {
      xxxxxl: 0,
      xxxxl: 0,
      xxxl: 0,
      xxl: 36,
      xl: 26,
      l: 22,
      m: 16,
      s: 13,
      xs: 11,
    },
  
    lineHeight: {
      normal: 1.375,
      dense: 1.25,
    },
  
    crop: {
      top: 4,
      bottom: 6,
    },

    underline: {
      height: 1,
      offset: 0,
    },
  },
  palette: {
    blue5: '#ecf3fb',
    blue10: '#d9e7f8',
    blue20: '#a5ccff',
    blue30: '#7cb2ef',
    blue40: '#4290ff',
    blue50: '#035ecc',
    blue60: '#0054c5',
    blue70: '#0d3a94',
    blue80: '#002a7e',
    blue90: '#2c3850',

    red5: '#f7dce1',
    red10: '#f7dce1',
    red20: '#eeb7c1',
    red30: '#e27c8f',
    red40: '#d4425b',
    red50: '#C91132',
    red60: '#C2112C',
    red70: '#A71D32',
    red80: '#881426',
    red90: '#6A1421',

    green5: '#effbf4',
    green10: '#dff7e9',
    green20: '#beefd2',
    green30: '#89e3ae',
    green40: '#52d589',
    green50: '#27cb6b',
    green60: '#02a447',
    green70: '#108835',
    green80: '#0b6828',
    green90: '#0b4f20',

    yellow5: '#fff9ec',
    yellow10: '#fff3d9',
    yellow20: '#ffe5b2',
    yellow30: '#ffd173',
    yellow40: '#ffbc33',
    yellow50: '#ffab00',
    yellow60: '#ffa102',
    yellow70: '#e0920d',
    yellow80: '#ca840e',
    yellow90: '#a47019',

    gray5: '#fafafa',
    gray10: '#F3F4F5',
    gray20: '#ECEEEF',
    gray30: '#D8DDE2',
    gray40: '#D3D8DE',
    gray50: '#A1A9B2',
    gray60: '#717F8C',
    gray70: '#657482',
    gray80: '#425465',
    gray90: '#13293f',

    white: '#FFFFFF',
    black: '#13293f',
  },
  dimension: {
    rowHeight: {
      l: 48,
      m: 36,
      s: 28,
    },
  },
  space: {
    xxxl: 36,
    xxl: 26,
    xl: 22,
    l: 16,
    m: 14,
    s: 12,
    xs: 8,
    xxs: 4,
  },
}

export default tokens