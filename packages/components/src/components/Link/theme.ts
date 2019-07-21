import { ComponentTheme } from '../../theme/'

export type LinkTheme = {
  fontFamily: string,

  color_normal: string,
  color_hover: string,
  color_active: string,
  color_visited: string,

  underline_offset: string,
  underline_height: string,
  underline_normal: boolean,
  underline_hover: boolean,
}

export const linkTheme: ComponentTheme<LinkTheme> = ({ font, palette }, override) => ({
  fontFamily: font.fontFamily,

  color_normal: palette.blue50,
  color_hover: palette.blue70,
  color_active: palette.blue40,
  color_visited: palette.red50,

  underline_offset: '1px',
  underline_height: '1px',
  underline_normal: false,
  underline_hover: true,

  ...override,
})