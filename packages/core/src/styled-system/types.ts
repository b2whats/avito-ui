import { CSSProperties } from 'react'
import { Tokens } from '@avito/tokens'

// Все типы здесь  должны быть интерфейсами для интроспекции в стайлгайдисте
/* eslint "@typescript-eslint/consistent-type-definitions": ["error", "interface"] */

export interface TextProperties {
  fontFamily?: string,
  fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl' | number | string,
  lineHeight?: 'inherit' | 'none' | 'normal' | 'dense' | number,
  letterSpacing?: number,
  fontWeight?: 'light' | 'normal' | 'bold',
  italic?: boolean,
  noWrap?: boolean,
  wrap?: boolean,
  pre?: boolean,
  bold?: boolean,
  light?: boolean,
  uppercase?: boolean,
  truncate?: boolean,
  crop?: boolean,
  underline?: boolean | 'dotted' | 'dashed',
  smoothing?: 'auto' | 'antialiased' | 'subpixel',
}

type Width = number

type Height = 's' | 'm' | 'l' | 'auto' | number

export interface DimensionProperties {
  /** Ширина блока */
  width?: Width,
  /** Максимальная ширина блока */
  maxWidth?: Width,
  /** Минимальная ширина блока */
  minWidth?: Width,
  /** Высота блока */
  height?: Height,
  /** Минимальная высота блока */
  minHeight?: Height,
  /** Максимальная высота блока */
  maxHeight?: Height,
  /** Уменьшать при нехватке пространства */
  shrink?: boolean,
  /** Занять все возможзное пространство */
  grow?: boolean,
}

export interface Display {
  display: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | null
}

export interface VisibilityProperties {
  visible?: boolean,
  opacity?: number
}

type SpaceValues = keyof Tokens['space'] | 'none' | 'auto' | number

export interface MarginProperties {
  /** Внешний отступ со всех сторон */
  m?: SpaceValues,
  /** Внешний отступ слува и справа */
  mx?: SpaceValues,
  /** Внешний отступ сверху и снизу */
  my?: SpaceValues,
  /** Внешний отступ сверху */
  mt?: SpaceValues,
  /** Внешний отступ справа */
  mr?: SpaceValues,
  /** Внешний отступ снизу */
  mb?: SpaceValues,
  /** Внешний отступ слева */
  ml?: SpaceValues,
}

export interface PaddingProperties {
  /** Внутренний отступ */
  p?: SpaceValues,
  /** Внутренний отступ слева и справа */
  px?: SpaceValues,
  /** Внутренний отступ сверху и снизу */
  py?: SpaceValues,
  /** Внутренний отступ сверху */
  pt?: SpaceValues,
  /** Внутренний отступ справа */
  pr?: SpaceValues,
  /** Внутренний отступ снизу */
  pb?: SpaceValues,
  /** Внутренний отступ слева */
  pl?: SpaceValues,
}

export type SpaceProperties = PaddingProperties & MarginProperties

type Align = 'left' | 'center' | 'right' | 'justify'
type Valign = 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'

export interface AlignProperties {
  /** Горизонтальное выравнивание дочерних блоков */
  align?: Align
  /** Вертикальное выравнивание */
  valignSelf?: Valign
  /** Вертикальное выравнивание дочерних блоков */
  valign?: Valign
}

export interface LayoutProperties extends AlignProperties {
  /** Вертикальное направление дочерних элементов */
  column?: boolean,
  /** Блочное поведение */
  block?: boolean,
  /** Строчное поведение */
  inline?: boolean,
  /** Переносить блоки на следующие строки если не хватило места */
  wrap?: boolean,
  /** Положение элемента в потоке */
  position?: 'relative' | 'absolute' | 'static' | 'fixed',
  /* Расстояние от верхнего края */
  top?: number,
  /* Расстояние от нижнего края */
  bottom?: number,
  /* Расстояние от левого края */
  left?: number,
  /* Расстояние от правого края */
  right?: number,
  /** Добавляет скролл */
  scroll?: boolean
}

export interface BorderProperties {
  /** Стиль границ */
  borderStyle?: 'solid' | 'dotted' | 'dashed' | 'none',
  /** Радиус границ */
  borderRadius?: number | 's' | 'm' | 'l' | 'circle',
  /** Радиус границ */
  rounded?: number | 's' | 'm' | 'l' | 'circle',
  /** Ширина границы */
  borderWidth?: number,
}

interface OtherProperties extends BorderProperties {
  focus?: boolean | string,
  disabled?: boolean,
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  adjacentSelector?: string,
  shape?: 'pill' | 'square' | 'circle',
  shadow?: string | boolean,
  pointerEvents?: boolean,
  cursor?: CSSProperties['cursor']
}

export type Colors = keyof Tokens['palette'] | 'transparent' | 'inherit' | (string & {})

export interface ColorProperties {
  /** Цвет контента */
  color?: Colors,
  /** Цвет контента при наведении */
  colorHover?: Colors,
  /** Цвет контента при нажатии */
  colorActive?: Colors,
  /** Цвет контента посещенной ссылки */
  colorVisited?: Colors,
  /** Цвет контента в выбранном состоянии */
  colorChecked?: Colors,
  /** Цвет контента в состоянии фокуса */
  colorFocus?: Colors,
  /** Цвет контента в неакттивном состоянии */
  colorDisabled?: Colors,

  /** Цвет фона */
  bg?: Colors,
  /** Цвет фона при наведении */
  bgHover?: Colors,
  /** Цвет фона при нажатии */
  bgActive?: Colors,
  /** Цвет фона посещенной ссылки */
  bgVisited?: Colors,
  /** Цвет фона в выбранном состоянии */
  bgChecked?: Colors,
  /** Цвет фона в состоянии фокуса */
  bgFocus?: Colors,
  /** Цвет фона в неакттивном состоянии */
  bgDisabled?: Colors,

  /** Цвет ганиц */
  borderColor?: Colors,
  /** Цвет границ при наведении */
  borderColorHover?: Colors,
  /** Цвет границ при наведении */
  borderColorActive?: Colors,
  /** Цвет границ посещенной ссылки */
  borderColorVisited?: Colors,
  /** Цвет границ в выбранном состоянии */
  borderColorChecked?: Colors,
  /** Цвет границ в состоянии фокуса */
  borderColorFocus?: Colors,
  /** Цвет границ в неакттивном состоянии */
  borderColorDisabled?: Colors,

  /** Цвет текста у плейсхолдера */
  placeholderColor?: Colors,

  /** цвет оверлея */
  overlay?: Colors,
  /** Цвет оверлея при наведении */
  overlayHover?: Colors,
  /** Цвет оверлея при наведении */
  overlayActive?: Colors,
  /** Цвет оверлея посещенной ссылки */
  overlayVisited?: Colors,
  /** Цвет оверлея в выбранном состоянии */
  overlayChecked?: Colors,
  /** Цвет оверлея в состоянии фокуса */
  overlayFocus?: Colors,
  /** Цвет оверлея в неакттивном состоянии */
  overlayDisabled?: Colors,
}

export interface StyleProperties extends TextProperties, DimensionProperties, SpaceProperties,
  LayoutProperties, ColorProperties, OtherProperties, VisibilityProperties {}
