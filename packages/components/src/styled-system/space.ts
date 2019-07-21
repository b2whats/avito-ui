
import { Theme } from '../theme/'

type SpaceValue = 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl' | 'xxxxxxl' | 'auto' | 'none'

export type Space = Partial<{
  /** Внешний отступ со всех сторон */
  m: SpaceValue,
  /** Внешний отступ слува и справа */
  mx: SpaceValue,
  /** Внешний отступ сверху и снизу */
  my: SpaceValue,
  /** Внешний отступ сверху */
  mt: SpaceValue,
  /** Внешний отступ справа */
  mr: SpaceValue,
  /** Внешний отступ снизу */
  mb: SpaceValue,
  /** Внешний отступ слева */
  ml: SpaceValue,

  /** Внутренний отступ */
  p: SpaceValue,
  /** Внутренний отступ слева и справа */
  px: SpaceValue,
  /** Внутренний отступ сверху и снизу */
  py: SpaceValue,
  /** Внутренний отступ сверху */
  pt: SpaceValue,
  /** Внутренний отступ справа */
  pr: SpaceValue,
  /** Внутренний отступ снизу */
  pb: SpaceValue,
  /** Внутренний отступ слева */
  pl: SpaceValue,
}>

type SpacesProps = {
  theme: Theme,
} & Space

export const space = ({ m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, theme: { spaces } }: SpacesProps ): string => {
  let css = ''
  const spaceMap = {
    ...spaces,
    auto: 'auto',
    none: '0'
  }

  m && (css += `margin: ${spaceMap[m]};`)
  mx && (css += `margin: 0 ${spaceMap[mx]};`)
  my && (css += `margin: ${spaceMap[my]} 0;`)
  mt && (css += `margin-top: ${spaceMap[mt]};`)
  mr && (css += `margin-right: ${spaceMap[mr]};`)
  mb && (css += `margin-bottom: ${spaceMap[mb]};`)
  ml && (css += `margin-left: ${spaceMap[ml]};`)

  p && (css += `padding: ${spaceMap[p]};`)
  px && (css += `padding: 0 ${spaceMap[px]};`)
  py && (css += `padding: ${spaceMap[py]} 0;`)
  pt && (css += `padding-top: ${spaceMap[pt]};`)
  pr && (css += `padding-right: ${spaceMap[pr]};`)
  pb && (css += `padding-bottom: ${spaceMap[pb]};`)
  pl && (css += `padding-left: ${spaceMap[pl]};`)

  return css
}