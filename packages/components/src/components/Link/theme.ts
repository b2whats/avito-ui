import { ComponentTheme } from '../../theme/'

export type LinkTheme = {
  size_s_fontSize: string,
  size_m_fontSize: string,
  size_l_fontSize: string,

  fontFamily: string,
  lineHeight: number,
  fontWeight: number,

  color_normal: string,
  color_hover: string,
  color_active: string,
}

export const linkTheme: ComponentTheme<LinkTheme> = ({ font, palette }) => ({
  size_s_fontSize: '12px',
  size_m_fontSize: font.fontSize_m,
  size_l_fontSize: '18px',

  fontFamily: font.fontFamily,
  lineHeight: font.lineHeight,
  fontWeight: font.fontWeight,

  color_normal: palette.blue50,
  color_hover: palette.blue70,
  color_active: palette.blue50,
})