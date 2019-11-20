import { Tokens } from '../theme'

export type SpaceValues = keyof Tokens['space']

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

type Space = (props: { theme: Tokens } & Spaces) => string | undefined

export const space: Space = ({ m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, theme: { space } }) => {
  let css = ''

  m && (css += `margin: ${space[m]};`)
  mx && (css += `margin-left: ${space[mx]}; margin-right: ${space[mx]};`)
  my && (css += `margin-top: ${space[my]}; margin-bottom: ${space[my]};`)
  mt && (css += `margin-top: ${space[mt]};`)
  mr && (css += `margin-right: ${space[mr]};`)
  mb && (css += `margin-bottom: ${space[mb]};`)
  ml && (css += `margin-left: ${space[ml]};`)

  p && (css += `padding: ${space[p]};`)
  px && (css += `padding-left: ${space[px]}; padding-right: ${space[px]};`)
  py && (css += `padding-top: ${space[py]}; padding-bottom: ${space[py]};`)
  pt && (css += `padding-top: ${space[pt]};`)
  pr && (css += `padding-right: ${space[pr]};`)
  pb && (css += `padding-bottom: ${space[pb]};`)
  pl && (css += `padding-left: ${space[pl]};`)

  return css.length > 0 ? `&& {${css}}` : undefined
}