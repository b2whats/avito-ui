import { Tokens } from './contract'
import { palette } from './palette'

export const web: Tokens = {
  focus: {
    shape: '0 0 0 3px',
    color: {
      default: 'blue100',
      primary: 'blue100',
      secondary: 'blue200',
      success: 'green100',
      warning: 'orange100',
      error: 'red100',
    },
  },
  font: {
    fontFamily: 'Arial,"Helvetica Neue",Helvetica,sans-serif',
    defaultColor: 'black',
    defaultFontSize: 'm',
    defaultLineHeight: 'normal',

    fontSize: {
      xxxxxl: 0,
      xxxxl: 0,
      xxxl: 40,
      xxl: 32,
      xl: 25,
      l: 20,
      m: 16,
      s: 14,
      xs: 13,
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

    smoothing: 'none',
  },
  palette,
  dimension: {
    rowHeight: {
      l: 50,
      m: 40,
      s: 30,
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