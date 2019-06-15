import { Theme, Tokens } from '../theme'

export type SpaceValues = keyof Tokens['spaces']

export type Spaces = Partial<{
  /** Внешний отступ со всех сторон */
  m: SpaceValues,
  /** Внешний отступ слува и справа */
  mx: SpaceValues,
  /** Внешний отступ сверху и снизу */
  my: SpaceValues,
  /** Внешний отступ сверху */
  mt: SpaceValues,
  /** Внешний отступ справа */
  mr: SpaceValues,
  /** Внешний отступ снизу */
  mb: SpaceValues,
  /** Внешний отступ слева */
  ml: SpaceValues,

  /** Внутренний отступ */
  p: SpaceValues,
  /** Внутренний отступ слева и справа */
  px: SpaceValues,
  /** Внутренний отступ сверху и снизу */
  py: SpaceValues,
  /** Внутренний отступ сверху */
  pt: SpaceValues,
  /** Внутренний отступ справа */
  pr: SpaceValues,
  /** Внутренний отступ снизу */
  pb: SpaceValues,
  /** Внутренний отступ слева */
  pl: SpaceValues,
}>

type SpaceProps = {
  theme: Theme,
} & Spaces

export const space = ({ m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, theme: { spaces } }: SpaceProps ): string => {
  let css = '&& {'

  m && (css += `margin: ${spaces[m]};`)
  mx && (css += `margin-left: ${spaces[mx]}; margin-right: ${spaces[mx]};`)
  my && (css += `margin-top: ${spaces[my]}; margin-bottom: ${spaces[my]};`)
  mt && (css += `margin-top: ${spaces[mt]};`)
  mr && (css += `margin-right: ${spaces[mr]};`)
  mb && (css += `margin-bottom: ${spaces[mb]};`)
  ml && (css += `margin-left: ${spaces[ml]};`)

  p && (css += `padding: ${spaces[p]};`)
  px && (css += `padding-left: ${spaces[px]}; padding-right: ${spaces[px]};`)
  py && (css += `padding-top: ${spaces[py]}; padding-bottom: ${spaces[py]};`)
  pt && (css += `padding-top: ${spaces[pt]};`)
  pr && (css += `padding-right: ${spaces[pr]};`)
  pb && (css += `padding-bottom: ${spaces[pb]};`)
  pl && (css += `padding-left: ${spaces[pl]};`)

  return css + '}'
}