import { css } from '@emotion/core'
import { Tokens, tokens } from '@avito/tokens'

type Theme = Tokens

export type TextProperties = Partial<{
  fontFamily: string,
  fontSize: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl' | number | string,
  lineHeight: 'inherit' | 'none' | 'normal' | 'dense' | number,
  letterSpacing: number,
  fontWeight: 'light' | 'normal' | 'bold',
  italic: boolean,
  noWrap: boolean,
  wrap: boolean,
  pre: boolean,
  bold: boolean,
  light: boolean,
  uppercase: boolean,
  truncate: boolean,
  crop: boolean,
  underline: boolean | 'dotted' | 'dashed',
  smoothing: 'auto' | 'antialiased' | 'subpixel',
}>

type Width = number
type Height = 's' | 'm' | 'l' | 'auto' | number

export type DimensionProperties = Partial<{
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
}>

type Display = { display: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | null }
export type VisibilityProperties = Partial<{
  visible: boolean,
  opacity: number
}>

type SpaceValues = keyof Theme['space'] | 'none' | 'auto' | number

export type MarginProperties = Partial<{
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
}>
export type PaddingProperties = Partial<{
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

export type SpaceProperties = PaddingProperties & MarginProperties

type Align = 'left' | 'center' | 'right' | 'justify'
type Valign = 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'

export type AlignProperties = Partial<{
  /** Горизонтальное выравнивание дочерних блоков */
  align: Align
  /** Вертикальное выравнивание */
  valignSelf: Valign
  /** Вертикальное выравнивание дочерних блоков */
  valign: Valign
}>

export type LayoutProperties = AlignProperties & Partial<{
  /** Вертикальное направление дочерних элементов */
  column: boolean,
  /** Блочное поведение */
  block: boolean,
  /** Строчное поведение */
  inline: boolean,
  /** Переносить блоки на следующие строки если не хватило места */
  wrap: boolean,
  /** Положение элемента в потоке */
  position: 'relative' | 'absolute' | 'static' | 'fixed',
  /* Расстояние от верхнего края */
  top: number,
  /* Расстояние от нижнего края */
  bottom: number,
  /* Расстояние от левого края */
  left: number,
  /* Расстояние от правого края */
  right: number,
  /** Добавляет скролл */
  scroll: boolean
}>

export type BorderProperties = Partial<{
  /** Стиль границ */
  borderStyle: 'solid' | 'dotted' | 'dashed' | 'none',
  /** Радиус границ */
  borderRadius: number | 's' | 'm' | 'l' | 'circle',
  /** Радиус границ */
  rounded: number | 's' | 'm' | 'l' | 'circle',
  /** Ширина границы */
  borderWidth: number,
}>

type OtherProperties = BorderProperties & Partial<{
  focus: boolean | string,
  disabled: boolean,
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  adjacentSelector: string,
  shape?: 'pill' | 'square' | 'circle',
  shadow?: string | boolean,
}>

export type Colors = keyof Tokens['palette'] | 'transparent' | 'inherit' | (string & {})

export type ColorProperties = Partial<{
  /** Цвет контента */
  color: Colors,
  /** Цвет контента при наведении */
  colorHover: Colors,
  /** Цвет контента при нажатии */
  colorActive: Colors,
  /** Цвет контента посещенной ссылки */
  colorVisited: Colors,
  /** Цвет контента в выбранном состоянии */
  colorChecked: Colors,
  /** Цвет контента в состоянии фокуса */
  colorFocus: Colors,
  /** Цвет контента в неакттивном состоянии */
  colorDisabled: Colors,
  /** Цвет фона */
  bg: Colors,
  /** Цвет фона при наведении */
  bgHover: Colors,
  /** Цвет фона при нажатии */
  bgActive: Colors,
  /** Цвет фона посещенной ссылки */
  bgVisited: Colors,
  /** Цвет фона в выбранном состоянии */
  bgChecked: Colors,
  /** Цвет фона в состоянии фокуса */
  bgFocus: Colors,
  /** Цвет фона в неакттивном состоянии */
  bgDisabled: Colors,
  /** Цвет ганиц */
  borderColor: Colors,
  /** Цвет границ при наведении */
  borderColorHover: Colors,
  /** Цвет границ при наведении */
  borderColorActive: Colors,
  /** Цвет границ посещенной ссылки */
  borderColorVisited: Colors,
  /** Цвет границ в выбранном состоянии */
  borderColorChecked: Colors,
  /** Цвет границ в состоянии фокуса */
  borderColorFocus: Colors,
  /** Цвет границ в неакттивном состоянии */
  borderColorDisabled: Colors,
  /** Цвет текста у плейсхолдера */
  placeholderColor: Colors,
}>

export type StyleProperties = TextProperties & DimensionProperties & SpaceProperties & LayoutProperties & ColorProperties & OtherProperties & VisibilityProperties
type UnionToIntersection<U> = (boolean extends U ? (k: U)=>void : U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true
type OnlyLiteralString<T> = T extends string ? T : never
type IsChildren<T> = React.ReactNode extends T ? true : false
type Computable<T, Arg> = { [K in keyof T]: (T[K] | ((arg: Arg) => T[K])) }
// String literals on unions, maybe optional
// preset: 'force' | 'none', preset: 'force' and preset?: 'force' will all pass
type IsSwitchable<T> = IsUnion<NonNullable<T>> extends true ? true : T extends string | undefined ? true : false

export type SchemeType<
  Props extends { [K in keyof Props]: Props[K] },
  ComponentsProps = never,
  ExtraStyleProps = {}
> = {
  style?: Partial<Computable<StyleProperties & ExtraStyleProps, Props>>,
  props?: Partial<Computable<ComponentsProps, Props>>,
  // Срабатывает ошибка рекурсии https://github.com/microsoft/TypeScript/issues/34933 в компоненте Icon
  // Если написать так React.FunctionComponent<ComponentsProps>
  component?: any,
} & {
  [Key in keyof Props]?: IsSwitchable<Props[Key]> extends true
    ? { [Key2 in OnlyLiteralString<Props[Key]>]?: SchemeType<Props, ComponentsProps, ExtraStyleProps> }
    : SchemeType<Props, ComponentsProps, ExtraStyleProps>
}

export interface Slot<OutProps = never, ExtraStyles = {}> {}
export type ComponentTheme<Props, Scheme = {}, Extras = {}> = Extras & {
  defaultProps?: Partial<Props>,
  mapProps?: (props: Props) => Partial<Props>,
  scheme: {
    [K in keyof Scheme]: Scheme[K] extends (Slot<infer OutProps, infer ExtraStyles> | undefined)
      ? SchemeType<Props, OutProps, ExtraStyles>
      : Scheme[K]
  }
}

const computedCrop = (crop: number, targetHeight: number) => {
  const value = (crop + (targetHeight - 1) * 16) / 32

  return Math.round(value * 100) / 100
}

const spaceValue = (value: string | number, spaces: {}): string => {
  if (typeof value === 'number') {
    return `${value}px`
  } else {
    return spaces[value] ? `${spaces[value]}px` : value === 'auto' ? 'auto' : '0px'
  }
}

const maps = {
  inline: {
    block: 'inline-block',
    inline: 'inline-block',
    'inline-block': 'inline-block',
    'flex': 'inline-flex',
    'inline-flex': 'inline-flex',
  },
  block: {
    block: 'block',
    inline: 'block',
    'inline-block': 'block',
    'flex': 'flex',
    'inline-flex': 'flex',
  },
  align: {
    block: 'text-align',
    inline: 'text-align',
    'inline-block': 'text-align',
    'flex': 'justify-content',
    'inline-flex': 'justify-content',
  },
  justifyContent: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    justify: 'space-between',
  },
  alignColumn: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    justify: 'stretch',
  },
  alignFlex: {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
    baseline: 'baseline',
    stretch: 'stretch',
  },
  verticalAlign: {
    top: 'top',
    middle: 'middle',
    bottom: 'bottom',
    baseline: 'baseline',
    stretch: 'baseline',
  },
  dimension: {
    width: 'width',
    maxWidth: 'max-width',
    minWidth: 'min-width',
    height: 'height',
    maxHeight: 'max-height',
    minHeight: 'min-height',
  },
  color: {
    color: 'color',
    colorHover: 'color',
    colorActive: 'color',
    colorVisited: 'color',
    colorFocus: 'color',
    colorChecked: 'color',
    colorDisabled: 'color',
    bg: 'background-color',
    bgHover: 'background-color',
    bgActive: 'background-color',
    bgVisited: 'background-color',
    bgFocus: 'background-color',
    bgChecked: 'background-color',
    bgDisabled: 'background-color',
    borderColor: 'border-color',
    borderColorHover: 'border-color',
    borderColorActive: 'border-color',
    borderColorVisited: 'border-color',
    borderColorFocus: 'border-color',
    borderColorChecked: 'border-color',
    borderColorDisabled: 'border-color',
  },
  webkitSmoothing: {
    auto: 'auto',
    antialiased: 'antialiased',
    subpixel: 'subpixel-antialiased',
  },
  mozSmoothing: {
    auto: 'auto',
    antialiased: 'grayscale',
    subpixel: 'grayscale',
  },
}

const execComputables = (object: object, arg: any) => {
  for (const key in object) {
    if (typeof object[key] === 'function') {
      object[key] = object[key](arg)
    }
  }
  return object
}

export const foldScheme = (scheme: any, props: any, only?: 'props' | 'style' | 'component') => {
  const result = {
    style: {},
    props: {},
    component: null,
  }

  if (!scheme) return result

  for (const prop in scheme) {
    if (['style', 'props'].includes(prop) && (!only || only === prop)) {
      Object.assign(result[prop], scheme[prop])

      continue
    }

    if (prop === 'component' && (!only || only === prop)) {
      result.component = scheme.component

      continue
    }

    const value = props[prop]
    const nestedConfig = scheme[prop]

    const switchBranch = nestedConfig[value]
    if (switchBranch) {
      const data = foldScheme(switchBranch, props, only)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)
      data.component && (result.component = data.component)

      continue
    }

    if (value) {
      const data = foldScheme(nestedConfig, props, only)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)
      data.component && (result.component = data.component)
    }
  }

  execComputables(result.props, props)
  execComputables(result.style, props)

  return result
}

export const getStyles = (params: StyleProperties & Display, tokens: Tokens) => {
  let css = 'box-sizing: border-box;'
  const { font, dimension, space, palette, focus, shape } = tokens

  if (!params) return css

  let margin: string[] = []
  let padding: string[] = []
  let hoverState = []
  let activeState = []
  let visitedState = []
  let focusState = []
  let disabledState = []
  let checkedState = []
  let display = ''
  let width = ''


  for (const _param in params) {
    const param = _param as keyof typeof params
    let value = params[_param]

    if (value === null || value === undefined) continue

    // Exhaustive switch
    switch (param) {
      case 'fontFamily':
        css += `font-family: ${value};`

        break
      case 'fontSize':
        css += `font-size: ${font.fontSize[value] || value}px;`

        break
      case 'lineHeight':
        css += `line-height: ${font.lineHeight[value] || value};`

        break
      case 'letterSpacing':
        css += `letter-spacing: ${value}px;`

        break
      case 'fontWeight':
        if (params.bold || params.light) break

        css += `font-weight: ${value};`

        break
      case 'bold':
        css += 'font-weight: 600;'

        break
      case 'light':
        css += 'font-weight: 300;'

        break
      case 'italic':
        css += 'font-style: italic;'

        break
      case 'noWrap':
        css += 'white-space: nowrap;'

        break
      case 'pre':
        css += 'white-space: pre;'

        break
      case 'wrap':
        css += 'flex-wrap: wrap; word-break: break-all;'

        break
      case 'uppercase':
        css += 'text-transform: uppercase;'

        break
      case 'truncate':
        display = 'inline-block'

        css += `
          max-width: 100%;
          vertical-align: top;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow-wrap: normal;
          overflow: hidden;
        `

        break
      case 'crop': {
        if (!params.lineHeight) break

        const lineHeight = font.lineHeight[params.lineHeight] || params.lineHeight
        display = 'inline-block'

        css += `
          && {
            margin-top: 0;
            margin-bottom: 0;
          }

          &::before, &::after {
            content: '';
            display: block;
            height: 0;
            width: 0;
          }

          &::before { margin-bottom: -${computedCrop(font.crop.top, lineHeight)}em }
          &::after { margin-top: -${computedCrop(font.crop.bottom, lineHeight)}em }
        `

        break
      }
      case 'underline':
        css += `
          cursor: pointer;
          
          padding-bottom: ${font.underline.offset}px;
          border-bottom: ${font.underline.height}px ${typeof value === 'string' ? value : 'solid'} currentColor;
        `

        break
      case 'smoothing':
        css += `
          -webkit-font-smoothing: ${maps.webkitSmoothing[value]};
          -moz-osx-font-smoothing: ${maps.mozSmoothing[value]};
        `

        break
      case 'width':
        width = value > 1 ? `${value}px` : `${value * 100}%`

        break
      case 'minWidth':
      case 'maxWidth':
        css += `${maps.dimension[param]}: ${value > 1 ? `${value}px` : `${value * 100}%`};`

        break
      case 'height':
      case 'minHeight':
      case 'maxHeight':
        value = dimension.rowHeight[value] || value

        if (value === 'auto') {
          css += `${maps.dimension[param]}: auto;`
        } else {
          css += `${maps.dimension[param]}: ${value > 1 ? `${value}px` : `${value * 100}%`};`
        }

        break
      case 'display':
        display = value

        break
      case 'inline':
        display = params.display ? maps.inline[params.display] : 'inline-block'
        width = ''

        break
      case 'block': {
        display = params.display ? maps.block[params.display] : 'block'
        width = '100%'

        break
      }
      case 'grow':
        css += `flex-grow: ${value ? '1' : '0'};`

        break
      case 'shrink':
        css += `flex-shrink: ${value ? '1' : '0'};`

        break
      case 'borderWidth':
        css += `border-width: ${value}px;`

        if (params.borderStyle) break

        css += 'border-style: solid;'

        break
      case 'rounded':
      case 'borderRadius':
        if (params.shape === 'circle' || params.shape === 'pill') break

        css += `border-radius: ${value === 'circle' ? '100' : shape.borderRadius[value] || value}px;`

        break
      case 'align': {
        if (!params.display) break

        let prop

        if (params.column) {
          prop = 'align-items'
          value = maps.alignColumn[value]
        } else {
          prop = maps.align[params.display]

          if (prop === 'justify-content') {
            value = maps.justifyContent[value]
          }
        }

        css += `${prop}: ${value};`

        break
      }
      case 'valign':
        css += `align-items: ${maps.alignFlex[value]};`

        break
      case 'valignSelf': {
        css += `align-self: ${maps.alignFlex[value]};vertical-align: ${maps.verticalAlign[value]};`

        break
      }
      case 'column':
        css += 'flex-direction: column;'

        break
      case 'm':
        value = spaceValue(value, space)
        margin = [value, value, value, value]

        break
      case 'mx':
        value = spaceValue(value, space)
        margin[1] = value
        margin[3] = value

        break
      case 'my':
        value = spaceValue(value, space)
        margin[0] = value
        margin[2] = value

        break
      case 'mt':
        value = spaceValue(value, space)
        margin[0] = value

        break
      case 'mr':
        value = spaceValue(value, space)
        margin[1] = value

        break
      case 'mb':
        value = spaceValue(value, space)
        margin[2] = value

        break
      case 'ml':
        value = spaceValue(value, space)
        margin[3] = value

        break
      case 'p':
        value = spaceValue(value, space)
        padding = [
          `padding-top: ${value};`,
          `padding-right: ${value};`,
          `padding-bottom: ${value};`,
          `padding-left: ${value};`,
        ]

        break
      case 'px':
        value = spaceValue(value, space)
        padding[1] = `padding-right: ${value};`
        padding[3] = `padding-left: ${value};`

        break
      case 'py':
        value = spaceValue(value, space)
        padding[0] = `padding-top: ${value};`
        padding[2] = `padding-bottom: ${value};`

        break
      case 'pt':
        value = spaceValue(value, space)
        padding[0] = `padding-top: ${value};`

        break
      case 'pr':
        value = spaceValue(value, space)
        padding[1] = `padding-right: ${value};`

        break
      case 'pb':
        value = spaceValue(value, space)
        padding[2] = `padding-bottom: ${value};`

        break
      case 'pl':
        value = spaceValue(value, space)
        padding[3] = `padding-left: ${value};`

        break
      case 'color':
      case 'bg':
      case 'borderColor':
        css += `${maps.color[param]}: ${palette[value] || value};`

        break
      case 'colorHover':
      case 'bgHover':
      case 'borderColorHover':
        hoverState.push(`${maps.color[param]}: ${palette[value] || value};`)

        break
      case 'colorActive':
      case 'bgActive':
      case 'borderColorActive':
        activeState.push(`${maps.color[param]}: ${palette[value] || value};`)

        break
      case 'colorVisited':
      case 'bgVisited':
      case 'borderColorVisited':
        visitedState.push(`${maps.color[param]}: ${palette[value] || value};`)

        break
      case 'colorFocus':
      case 'bgFocus':
      case 'borderColorFocus':
        focusState.push(`${maps.color[param]}: ${palette[value] || value};`)

        break
      case 'colorChecked':
      case 'bgChecked':
      case 'borderColorChecked':
        checkedState.push(`${maps.color[param]}: ${palette[value] || value};`)

        break
      case 'colorDisabled':
      case 'bgDisabled':
      case 'borderColorDisabled':
        disabledState.push(`${maps.color[param]}: ${palette[value] || value};`)

        break
      case 'placeholderColor':
        css += `&::placeholder, & *::placeholder {color: ${palette[value] || value};-webkit-text-fill-color: currentcolor;}`

        break
      case 'borderStyle':
        css += `border-style: ${value};`

        break
      case 'position':
        css += `position: ${value};`

        break
      case 'top':
      case 'bottom':
      case 'left':
      case 'right':
        css += `${param}: ${Math.abs(value) > 1 ? `${value}px` : `${value * 100}%`};`

        break
      case 'focus': {
        css += 'outline: none;'

        if (!value) break

        const color = typeof value === 'string' ? value : focus.color[params.variant || 'default']

        focusState.push(`
          box-shadow: ${focus.shape} ${palette[color] || color};
          position: relative;
          z-index: 2;
        `)

        break
      }
      case 'visible':
        css += value === false ? 'visibility: hidden;' : ''
        break
      case 'opacity':
        css += `opacity: ${value};`
        break
      case 'disabled':
        if (!value) break

        css += 'pointer-events: none;'

        break
      case 'shape': {
        if (value === 'circle' || value === 'pill') {
          css += 'border-radius: 100px;'
        }
        if (value === 'circle' || value === 'square') {
          const targetHeight = params.height || params.minHeight

          if (targetHeight) {
            width = `${dimension.rowHeight[targetHeight!] || targetHeight}px;`
          }
        }

        break
      }
      case 'shadow': {
        if (typeof value !== 'string') break
        
        css += `box-shadow: ${value};`

        break
      }
      default:
        // Exhaustive switch guard
        assertExhaustive<'variant' | 'adjacentSelector' | 'trancate' | 'scroll'>(param)
    }
  }

  if (padding.length !== 0) {
    css += `&&& {
      ${padding.join('')}
    }`
  }
  if (margin.length !== 0) {
    css += `&&& {
      ${margin[0] ? `margin-top: ${margin[0]};` : ''}
      ${margin[1] ? `margin-right: ${margin[1]};` : ''}
      ${margin[2] ? `margin-bottom: ${margin[2]};` : ''}
      ${margin[3] ? `margin-left: ${margin[3]};` : ''}
    }`
  }

  let selector = null
  if (params.adjacentSelector) {
    const before = params.adjacentSelector

    selector = {
      checked: `${before}:checked + &, ${before}[aria-checked=true] + &`,
      visited: `${before}:visited + &`,
      hover: `${before}:hover + &`,
      active: `${before}:enabled:active + &, ${before}[data-state=active] + &`,
      focus: `${before}:focus + &`,
      disabled: `${before}:disabled + &, ${before}[aria-disabled=true] + &`,
    }
  } else {
    selector = {
      checked: '&[aria-checked=true], &[data-state~=checked]',
      visited: '&:visited',
      hover: '&:hover',
      active: '&:not(:disabled):active, &[data-state~=active]',
      focus: '&&:focus, &&[data-state~=focus]',
      disabled: '&:disabled, &[aria-disabled=true], &[data-state~=disabled]',
    }
  }

  if (checkedState.length) {
    css += `${selector.checked}{${checkedState.join('')}}`
  }
  if (visitedState.length) {
    css += `${selector.visited}{${visitedState.join('')}}`
  }
  if (hoverState.length) {
    css += `${selector.hover}{${hoverState.join('')}}`
  }
  if (activeState.length) {
    css += `${selector.active}{${activeState.join('')}}`
  }
  if (focusState.length) {
    css += `${selector.focus}{${focusState.join('')}}`
  }
  if (disabledState.length) {
    css += `${selector.disabled}{${disabledState.join('')}}`
  }

  if (width.endsWith('%') && (margin[1] || margin[3])) {
    width = `calc(${width} - ${margin[1] || '0px'} - ${margin[3] || '0px'})`
  }

  if (width) {
    css += `width: ${width};`
  }
  if (display) {
    css += `display: ${display};`
  }

  return css
}

type FoldedItemTheme<ItemTheme> = ItemTheme extends SchemeType<infer InProps, infer OutProps, infer ExtraStyle> ? {
  style: StyleProperties & ExtraStyle,
  props: OutProps,
  component: React.FunctionComponent<OutProps> | React.ComponentClass<OutProps>,
} : never

export type FoldThemeParamsReturn<ComponentTheme> = ComponentTheme extends { scheme: object } ? {
  [K in keyof ComponentTheme['scheme']]: FoldedItemTheme<ComponentTheme['scheme'][K]>
} : never

export function foldThemeParams<T extends { scheme: { [key: string]: any } }>(props: any, { scheme }: T): FoldThemeParamsReturn<T> {
  const result: any = {}

  let name: keyof typeof scheme
  for (name in scheme) {
    result[name] = foldScheme(scheme[name], props)
  }

  return result
}

type valueof<T, Key = string> = T[Key extends keyof T ? Key : keyof T]
type ThemeStyle<ComponentTheme, Key> = ComponentTheme extends object
  ? valueof<FoldThemeParamsReturn<ComponentTheme>, Key>['style']
  : never

interface Selector<Props, ComponentTheme, Key> {
  t: (props: Props, theme: Theme, schemeStyle: ThemeStyle<ComponentTheme, Key>) => any;
  f: (props: Props, theme: Theme) => any;
}

export function createClassName<Props, ComponentTheme extends object | null = null, PrimaryComponent = string>(
  createRule: (schemeStyle: ThemeStyle<ComponentTheme, PrimaryComponent>, props: Props, theme: Theme) => StyleProperties & Display,
  createUserRule?: (textRules: string, props: Props, theme: Theme, schemeStyle: ThemeStyle<ComponentTheme, PrimaryComponent>) => any
): Selector<Props, ComponentTheme, PrimaryComponent>[ComponentTheme extends object ? 't' : 'f']  {
  return (props: Props, theme: Theme, schemeStyle?: ThemeStyle<ComponentTheme, PrimaryComponent>) => {
    const styles = createRule(schemeStyle as any, props, theme)
    const textRules = getStyles(styles, theme)

    const resultRules = createUserRule
      ? createUserRule(textRules, props, theme, schemeStyle as any)
      : textRules


    return typeof resultRules === 'string' ? css`${resultRules}` : resultRules
  }
}

function assertExhaustive<K>(v: K) {}
