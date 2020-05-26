import { Tokens } from './contract'
import { palette } from './palette'

export const mobile: Tokens = {
  focus: {
    shape: 'white 0px 0px 0px 1px, 0px 0px 2px 3px',
    color: {
      default: 'blue200',
      primary: 'blue200',
      secondary: 'blue200',
      success: 'blue200',
      warning: 'blue200',
      error: 'blue200',
    },
  },
  font: {
    fontFamily: 'Avito, Arial',
    defaultColor: 'black',
    defaultFontSize: 'm',
    defaultLineHeight: 'normal',

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
      none: 1.12,
      normal: 1.375,
      dense: 1.25,
    },

    crop: {
      top: 3,
      bottom: 3,
    },

    underline: {
      height: 1,
      offset: 0,
    },

    smoothing: 'antialiased',
  },
  palette,
  dimension: {
    rowHeight: {
      l: 48,
      m: 36,
      s: 28,
    },
  },
  space: {
    xxxl: 40,
    xxl: 32,
    xl: 24,
    l: 20,
    m: 16,
    s: 12,
    xs: 8,
    xxs: 4,
    xxxs: 2,
  },

  shape: {
    borderRadius: {
      l: 5,
      m: 3,
      s: 1,
    },
  },
}