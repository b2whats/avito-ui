import { ComponentTheme } from '../../theme/'

export type TextTheme = {
  size_s_fontSize: string,
  size_m_fontSize: string,
  size_l_fontSize: string,

  fontFamily: string,
  lineHeight: number,
  fontWeight: number,
  color: string,

  strike_offset: string,
  strike_height: string,

  crop_top: string,
  crop_bottom: string,

  appearance_h1_fontSize: string,
  appearance_h1_lineHeight: number,
  appearance_h1_marginBottom: string,
  appearance_h1_fontWeight: number,

  appearance_h2_fontSize: string,
  appearance_h2_lineHeight: number,
  appearance_h2_marginBottom: string,
  appearance_h2_fontWeight: number,

  appearance_h3_fontSize: string,
  appearance_h3_lineHeight: number,
  appearance_h3_marginBottom: string,
  appearance_h3_fontWeight: number,

  appearance_h4_fontSize: string,
  appearance_h4_lineHeight: number,
  appearance_h4_marginBottom: string,
  appearance_h4_fontWeight: number,

  appearance_h5_fontSize: string,
  appearance_h5_lineHeight: number,
  appearance_h5_marginBottom: string,
  appearance_h5_fontWeight: number,

  appearance_h6_fontSize: string,
  appearance_h6_lineHeight: number,
  appearance_h6_marginBottom: string,
  appearance_h6_fontWeight: number,

  appearance_caption_fontSize: string,
  appearance_caption_lineHeight: number,
  appearance_caption_marginBottom: string,
  appearance_caption_fontWeight: number,
  appearance_caption_color: string,

  appearance_p_lineHeight: number,
  appearance_p_marginBottom: string,
  appearance_p_fontWeight: number,

  variance_primary_color: string,
  variance_secondary_color: string,
  variance_error_color: string,
  variance_success_color: string,
  variance_danger_color: string,
}

export const textTheme: ComponentTheme<TextTheme> = ({ font, variance, palette }) => ({
  size_s_fontSize: font.fontSize_s,
  size_m_fontSize: font.fontSize_m,
  size_l_fontSize: font.fontSize_l,

  fontFamily: font.fontFamily,
  lineHeight: font.lineHeight,
  fontWeight: font.fontWeight,
  color: palette.gray90,

  strike_offset: '4px',
  strike_height: '1px',

  crop_top: '0.22em',
  crop_bottom: '0.28em',

  appearance_h1_fontSize: '42px',
  appearance_h1_lineHeight: 1.25,
  appearance_h1_marginBottom: '32px',
  appearance_h1_fontWeight: 700,

  appearance_h2_fontSize: '36px',
  appearance_h2_lineHeight: 1.25,
  appearance_h2_marginBottom: '14px',
  appearance_h2_fontWeight: 700,

  appearance_h3_fontSize: '28px',
  appearance_h3_lineHeight: 1.25,
  appearance_h3_marginBottom: '12px',
  appearance_h3_fontWeight: 400,

  appearance_h4_fontSize: '22px',
  appearance_h4_lineHeight: 1.25,
  appearance_h4_marginBottom: '8px',
  appearance_h4_fontWeight: 400,

  appearance_h5_fontSize: '18px',
  appearance_h5_lineHeight: 1.25,
  appearance_h5_marginBottom: '8px',
  appearance_h5_fontWeight: 400,

  appearance_h6_fontSize: '14px',
  appearance_h6_lineHeight: 1.25,
  appearance_h6_marginBottom: '6px',
  appearance_h6_fontWeight: 700,

  appearance_caption_fontSize: '12px',
  appearance_caption_lineHeight: 1.25,
  appearance_caption_marginBottom: '1.2em',
  appearance_caption_fontWeight: 400,
  appearance_caption_color: palette.gray50,

  appearance_p_lineHeight: font.lineHeight,
  appearance_p_marginBottom: '1.25em',
  appearance_p_fontWeight: 300,

  variance_primary_color: palette[`${variance.primary}50`],
  variance_secondary_color: palette[`${variance.secondary}50`],
  variance_error_color: palette[`${variance.error}50`],
  variance_success_color: palette[`${variance.success}50`],
  variance_danger_color: palette[`${variance.danger}50`],
})