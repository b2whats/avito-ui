type Font = {
  fontFamily: string,

  fontSize: {
    xxxxxl: number,
    xxxxl: number,
    xxxl: number,
    xxl: number,
    xl: number,
    l: number,
    m: number,
    s: number,
    xs: number,
  },

  lineHeight: {
    normal: number,
    dense: number,
  },

  crop: {
    top: number,
    bottom: number,
  },

  underline: {
    height: number,
    offset: number,
  },
}

type Palette = {
  blue5: string,
  blue10: string,
  blue20: string,
  blue30: string,
  blue40: string,
  blue50: string,
  blue60: string,
  blue70: string,
  blue80: string,
  blue90: string,

  red5: string,
  red10: string,
  red20: string,
  red30: string,
  red40: string,
  red50: string,
  red60: string,
  red70: string,
  red80: string,
  red90: string,

  green5: string,
  green10: string,
  green20: string,
  green30: string,
  green40: string,
  green50: string,
  green60: string,
  green70: string,
  green80: string,
  green90: string,

  yellow5: string,
  yellow10: string,
  yellow20: string,
  yellow30: string,
  yellow40: string,
  yellow50: string,
  yellow60: string,
  yellow70: string,
  yellow80: string,
  yellow90: string,

  gray5: string,
  gray10: string,
  gray20: string,
  gray30: string,
  gray40: string,
  gray50: string,
  gray60: string,
  gray70: string,
  gray80: string,
  gray90: string,

  black: string,
  white: string,
}

type Dimension = {
  rowHeight: {
    l: number,
    m: number,
    s: number,
  },
}

type Space = {
  xxxl: number,
  xxl: number,
  xl: number,
  l: number,
  m: number,
  s: number,
  xs: number,
  xxs: number,
}

export type Tokens = {
  focus: string,
  font: Font,
  palette: Palette,
  dimension: Dimension,
  space: Space,
}
