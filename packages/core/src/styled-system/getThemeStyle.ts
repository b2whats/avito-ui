import { css } from '@emotion/core'
import { Tokens } from '@avito/tokens'
import { profiler } from '../utils'
import { StyleProperties, Display, Colors } from './types'

type Theme = Tokens

type UnionToIntersection<U> =
  (boolean extends U ? (k: U) => void : U extends any ? (k: U) => void : never) extends ((k: infer I) => void)
  ? I : never
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true
type OnlyLiteralString<T> = T extends string ? T : never
type Computable<T, Arg> = { [K in keyof T]: (T[K] | ((arg: Arg) => T[K])) }
// String literals on unions, maybe optional
// preset: 'force' | 'none', preset: 'force' and preset?: 'force' will all pass
type IsSwitchable<T> = IsUnion<NonNullable<T>> extends true ? true : T extends string | undefined ? true : false

export type SchemeType<
  Props extends { [K in keyof Props]: Props[K] },
  ComponentsProps = never
> = {
  style?: Partial<Computable<StyleProperties, Props>>
  props?: Partial<Computable<ComponentsProps, Props>>
  // Срабатывает ошибка рекурсии https://github.com/microsoft/TypeScript/issues/34933 в компоненте Icon
  // Если написать так React.FunctionComponent<ComponentsProps>
  component?: any
} & {
  [Key in keyof Props]?: IsSwitchable<Props[Key]> extends true
    ? { [Key2 in OnlyLiteralString<Props[Key]>]?: SchemeType<Props, ComponentsProps> }
    : SchemeType<Props, ComponentsProps>
}

export interface Slot<OutProps = never> {}
export type ComponentTheme<Props, Scheme = {}> = {
  defaultProps?: Partial<Props>
  mapProps?: (props: Props) => Partial<Props>
  scheme: {
    [K in keyof Scheme]: Scheme[K] extends (Slot<infer OutProps> | undefined)
      ? SchemeType<Props, OutProps>
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

  const colorRule = (param: string, value: Colors) => {
    if (!/^overlay/.test(param)) {
      return `${maps.color[param]}: ${palette[value] || value};`
    }
    const { borderWidth = 0 } = params
    return `
      &::after {
        content: "";
        position: absolute;
        pointer-events: none;
        left: -${borderWidth}px;
        right: -${borderWidth}px;
        top: -${borderWidth}px;
        bottom: -${borderWidth}px;
        border-radius: inherit;
        background: ${palette[value] || value};
      }
    `
  }

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
        css += `font-weight: ${value ? '600' : 'normal'};`

        break
      case 'light':
        css += `font-weight: ${value ? '300' : 'normal'};`

        break
      case 'italic':
        css += `font-style: ${value ? 'italic' : 'normal'};`

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
        css += `text-transform: ${value ? 'uppercase' : 'none'};`

        break
      case 'cursor':
        css += value ? `cursor: ${value};` : ''

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
      case 'order':
        css += `order: ${value};`

        break
      case 'borderWidth':
        css += `border-width: ${value}px;`

        if (params.borderStyle) break

        css += 'border-style: solid;'

        break
      case 'rounded':
      case 'borderRadius':
        if (params.shape === 'circle' || params.shape === 'pill') break

        // NOTE: для круга лучше использовать shape
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
      case 'alignSelf': {
        css += `align-self: ${maps.alignColumn[value]};`

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
      case 'overlay':
        css += colorRule(param, value)

        break
      case 'colorHover':
      case 'bgHover':
      case 'borderColorHover':
      case 'overlayHover':
        hoverState.push(colorRule(param, value))

        break
      case 'colorActive':
      case 'bgActive':
      case 'borderColorActive':
      case 'overlayActive':
        activeState.push(colorRule(param, value))

        break
      case 'colorVisited':
      case 'bgVisited':
      case 'borderColorVisited':
      case 'overlayVisited':
        visitedState.push(colorRule(param, value))

        break
      case 'colorFocus':
      case 'bgFocus':
      case 'borderColorFocus':
      case 'overlayFocus':
        focusState.push(colorRule(param, value))

        break
      case 'colorChecked':
      case 'bgChecked':
      case 'borderColorChecked':
      case 'overlayChecked':
        checkedState.push(colorRule(param, value))

        break
      case 'colorDisabled':
      case 'bgDisabled':
      case 'borderColorDisabled':
      case 'overlayDisabled':
        disabledState.push(colorRule(param, value))

        break
      case 'placeholderColor':
        css += `&::placeholder, & *::placeholder, & *[data-placeholder] {color: ${palette[value] || value};-webkit-text-fill-color: currentcolor;}`

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
        css += `visibility: ${value ? 'visible' : 'hidden'};`
        break
      case 'opacity':
        css += `opacity: ${value};`
        break
      case 'disabled':
        if (!value) break

        css += 'pointer-events: none;'

        break
      case 'shape': {
        if (value === 'circle') {
          /**
           * Блинк округляет большой радиус до целого вниз, заметно на маленьких кружочках нечетной высоты
           * https://jr.avito.ru/browse/MDP-1395
           */
          css += 'border-radius: 50%;'
        }
        if (value === 'pill') {
          // не совсем круглые колбаски пусть уж будут
          css += 'border-radius: 100px;'
        }
        if (value === 'circle' || value === 'square') {
          const targetHeight = params.height || params.minHeight

          if (targetHeight) {
            width = targetHeight === 'auto' ? 'auto' : `${dimension.rowHeight[targetHeight!] || targetHeight}px;`
          }
        }

        break
      }
      case 'shadow': {
        // В иконке этот параметр булевого типа и нам не нужно применять это свойство
        if (typeof value !== 'string') break

        css += `box-shadow: ${value};`

        break
      }
      case 'pointerEvents': {
        css += `pointer-events: ${value ? 'auto' : 'none'};`
        break
      }
      default:
        // Exhaustive switch guard
        assertExhaustive<'variant' | 'adjacentSelector' | 'trancate' | 'scroll' | 'marker'>(param)
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

type FoldedItemTheme<ItemTheme> = ItemTheme extends SchemeType<infer InProps, infer OutProps> ? {
  style: StyleProperties
  props: OutProps
  component: React.FunctionComponent<OutProps> | React.ComponentClass<OutProps>
} : never

export type FoldThemeParamsReturn<ComponentTheme> = ComponentTheme extends { scheme: object } ? {
  [K in keyof ComponentTheme['scheme']]: FoldedItemTheme<ComponentTheme['scheme'][K]>
} : never

export const foldThemeParams = profiler.withMeasure('fold')(function foldThemeParams<
  T extends { scheme: { [key: string]: any } }
>(props: any, { scheme }: T): FoldThemeParamsReturn<T> {
  const result: any = {}

  let name: keyof typeof scheme
  for (name in scheme) {
    result[name] = foldScheme(scheme[name], props)
  }

  return result
})

export function createClassName<Props, ComponentTheme extends object | null = null>(
  createRule: (
    schemeStyle: StyleProperties,
    props: Props,
    theme: Theme) => StyleProperties & Display,
  createUserRule?: (
    textRules: string,
    props: Props,
    theme: Theme,
    schemeStyle: StyleProperties) => any
) {
  return profiler.withMeasure('classname')((
    props: Props,
    theme: Theme,
    schemeStyle?: ComponentTheme extends object ? StyleProperties : never
  ) => {
    const styles = createRule(schemeStyle as any, props, theme)
    const textRules = getStyles(styles, theme)

    const resultRules = createUserRule
      ? createUserRule(textRules, props, theme, schemeStyle as any)
      : textRules

    return typeof resultRules === 'string' ? css`${resultRules}` : resultRules
  })
}

function assertExhaustive<K>(_value: K) {}
