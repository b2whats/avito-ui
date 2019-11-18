type Font = {
  fontFamily: string,

  fontSize_xxxxxl: number,
  fontSize_xxxxl: number,
  fontSize_xxxl: number,
  fontSize_xxl: number,
  fontSize_xl: number,
  fontSize_l: number,
  fontSize_m: number,
  fontSize_s: number,
  fontSize_xs: number,

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

  lineHeight_l: number,
  lineHeight_m: number,
  lineHeight_s: number,

  fontWeight: number,

  crop_top: number,
  crop_bottom: number,
}

export const font: Font = {
  fontFamily: 'Arial',

  fontSize: {
    xxxxxl: 36,
    xxxxl: 32,
    xxxl: 28,
    xxl: 24,
    xl: 20,
    l: 16,
    m: 14,
    s: 12,
    xs: 10,
  },

  lineHeight: {
    normal: 1.375,
    dense: 1.25,
  },

  fontSize_xxxxxl: 36,
  fontSize_xxxxl: 32,
  fontSize_xxxl: 28,
  fontSize_xxl: 24,
  fontSize_xl: 20,
  fontSize_l: 16,
  fontSize_m: 14,
  fontSize_s: 12,
  fontSize_xs: 10,

  lineHeight_l: 1.5,
  lineHeight_m: 1.4,
  lineHeight_s: 1.2,

  fontWeight: 400,

  crop_top: 3,
  crop_bottom: 4,
}