import { ComponentTheme } from '../../../packages/components/src/theme'

export type LinkTheme = {
  fontFamily: string,
  color_visited: string,

  underline_offset: string,
  underline_height: string,
  underline_normal: boolean,
  underline_hover: boolean,
}

export const linkTheme: ComponentTheme<LinkTheme> = ({ font, palette }, override) => ({
  fontFamily: font.fontFamily,
  color_visited: palette.red50,

  underline_offset: '0px',
  underline_height: '1px',
  underline_normal: false,
  underline_hover: true,

  ...override,
})