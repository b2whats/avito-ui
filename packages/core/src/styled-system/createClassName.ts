import { css, SerializedStyles } from '@emotion/core'
import { useMemo } from 'react'
import { Tokens } from '@avito/tokens'
import { profiler } from '../utils'
import { ExpandedStyleProperties, expandShorthands } from './expandShorthands'
import { SpaceProperties, StyleProperties, Display, ColorProperties } from './StyleProperties'

type Theme = Tokens

const computedCrop = (crop: number, targetHeight: number) => {
  const value = (crop + (targetHeight - 1) * 16) / 32

  return Math.round(value * 100) / 100
}

const spaceValue = (value: string | number | undefined, spaces: {}): string | undefined => {
  if (value == null) {
    return value
  }
  if (typeof value === 'number') {
    return `${value}px`
  }
  return spaces[value] ? `${spaces[value]}px` : value === 'auto' ? 'auto' : '0px'
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
    bg: 'background-color',
    borderColor: 'border-color',
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
  selector: {
    checked: '&[aria-checked=true], &[data-state~=checked]',
    visited: '&:visited',
    hover: '&:hover',
    active: '&:not(:disabled):active, &[data-state~=active]',
    focus: '&&:focus, &&[data-state~=focus]',
    disabled: '&:disabled, &[aria-disabled=true], &[data-state~=disabled]',
  },
}

function stateSelectors(before?: string) {
  if (!before) return maps.selector
  return {
    checked: `${before}:checked + &, ${before}[aria-checked=true] + &`,
    visited: `${before}:visited + &`,
    hover: `${before}:hover + &`,
    active: `${before}:enabled:active + &, ${before}[data-state=active] + &`,
    focus: `${before}:focus + &`,
    disabled: `${before}:disabled + &, ${before}[aria-disabled=true] + &`,
  }
}

const spaceRules = (prefix: string) => ([top, right, bottom, left]: (string | undefined)[]) => {
  let css = ''
  if (top != null) css += `${prefix}-top: ${top};`
  if (right != null) css += `${prefix}-right: ${right};`
  if (bottom != null) css += `${prefix}-bottom: ${bottom};`
  if (left != null) css += `${prefix}-left: ${left};`
  return css
}
const formatPadding = spaceRules('padding')
const formatMargin = spaceRules('margin')

type Modifier = keyof typeof maps.selector
type RegularColorProp = keyof Omit<ColorProperties, 'placeholderColor'>
const colors = ['color', 'bg', 'borderColor', 'overlay'] as const
const modifiers: Modifier[] = ['hover', 'active', 'visited', 'focus', 'disabled', 'checked']
const colorMap = {} as Required<{ [key in RegularColorProp]: { location?: Modifier, color: typeof colors[any] } }>
colors.forEach((color) => {
  colorMap[color] = { color }
  modifiers.forEach(modifier => {
    colorMap[`${color}${modifier.replace(/^./, firstChar => firstChar.toUpperCase())}`] = {
      location: modifier,
      color,
    }
  })
})
function isColor(color: any): color is RegularColorProp {
  return color in colorMap
}
const overlayStyle = (borderWidth = 0, color: string) => `
  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    left: -${borderWidth}px;
    right: -${borderWidth}px;
    top: -${borderWidth}px;
    bottom: -${borderWidth}px;
    border-radius: inherit;
    background: ${color};
  }
`


function execDimension(size: number | 'auto') {
  if (size === 'auto') return 'auto'
  return Math.abs(size) > 1 ? `${size}px` : `${size * 100}%`
}

function getDisplay(params: ExpandedStyleProperties & Display) {
  if (params.crop || params.truncate) {
    return 'inline-block'
  }
  if (params.inline) {
    return params.display ? maps.inline[params.display] : 'inline-block'
  }
  if (params.block) {
    return params.display ? maps.block[params.display] : 'block'
  }
  return params.display
}

function getWidth(
  params: ExpandedStyleProperties & Display,
  { dimension }: Tokens,
  [_mt, mr, _mb, ml]: (string| undefined)[]
) {
  let width = ''

  if (params.width) {
    width = execDimension(params.width)
  } else if (params.shape === 'circle' || params.shape === 'square') {
    const targetHeight = params.height || params.minHeight
    if (targetHeight) {
      width = execDimension(dimension.rowHeight[targetHeight] || targetHeight)
    }
  } else if (params.block) {
    width = '100%'
  }

  return width.endsWith('%') && (ml || mr)
    ? `calc(${width} - ${ml || '0'} - ${mr || '0'})`
    : width
}

export const getStyles = (params: ExpandedStyleProperties & Display, tokens: Tokens) => {
  let css = 'box-sizing: border-box;'
  const { font, dimension, space, palette, focus, shape } = tokens

  if (!params) return css

  const margin = [params.mt, params.mr, params.mb, params.ml].map(size => spaceValue(size, space))
  const padding = [params.pt, params.pr, params.pb, params.pl].map(size => spaceValue(size, space))

  const states = {
    hover: '',
    active: '',
    visited: '',
    focus: '',
    disabled: '',
    checked: '',
  }
  const width = getWidth(params, tokens, margin)
  const display = getDisplay(params)

  for (const _param in params) {
    const param = _param as keyof typeof params
    let value = params[_param]

    if (value === null || value === undefined) continue

    if (isColor(param)) {
      const { location, color } = colorMap[param]
      const rule = color === 'overlay'
        ? overlayStyle(params.borderWidth, palette[value] || value)
        : `${maps.color[color]}: ${palette[value] || value};`
      if (location) {
        states[location] += rule
      } else {
        css += rule
      }
      continue
    }

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
        css += `font-weight: ${value};`

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
      case 'minWidth':
      case 'maxWidth':
      case 'height':
      case 'minHeight':
      case 'maxHeight':
        css += `${maps.dimension[param]}: ${execDimension(dimension.rowHeight[value] || value)};`

        break
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
        css += `${param}: ${execDimension(value)};`

        break
      case 'focus': {
        css += 'outline: none;'

        if (!value) break

        const color = typeof value === 'string' ? value : focus.color[params.variant || 'default']

        states.focus += `
          box-shadow: ${focus.shape} ${palette[color] || color};
          position: relative;
          z-index: 2;
        `

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
        } else if (value === 'pill') {
          // не совсем круглые колбаски пусть уж будут
          css += 'border-radius: 100px;'
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
        assertExhaustive<
          'variant' | 'adjacentSelector' | 'trancate' | 'scroll' | 'marker' |
          'inline' | 'block' | 'width' | 'display' | keyof SpaceProperties
        >(param)
    }
  }

  css += `&&& {
    ${formatPadding(padding)}
    ${formatMargin(margin)}
  }`

  const selector = stateSelectors(params.adjacentSelector)
  for (const state in states) {
    if (states[state].length) {
      css += `${selector[state]}{${states[state]}}`
    }
  }

  if (width) {
    css += `width: ${width};`
  }
  if (display) {
    css += `display: ${display};`
  }

  return css
}

type ClassNameOptions<Props> = {
  display: Display['display'] | ((props: Props) => Display['display'])
  mapPropsToStyle?: boolean | ((props: Props) => StyleProperties)
  cssRewrite?: (
    textRules: string,
    props: Props,
    theme: Theme,
    schemeStyle: StyleProperties) => string | SerializedStyles
}
export function createClassName<Props, ComponentTheme extends object | null = null>({
  cssRewrite = text => text,
  display,
  mapPropsToStyle = false,
}: ClassNameOptions<Props>) {
  const mapPropsToStyleFn = mapPropsToStyle === true ? (props: any) => props : mapPropsToStyle
  return profiler.withMeasure('classname')(function classnameStyle(
    props: Props,
    theme: Theme,
    schemeStyle?: ComponentTheme extends object ? StyleProperties : never
  ) {
    const textRules = getStyles({
      display: typeof display === 'function' ? display(props) : display,
      ...schemeStyle as any,
      ...mapPropsToStyleFn && expandShorthands(mapPropsToStyleFn(props), true),
    }, theme)

    const resultRules = cssRewrite(textRules, props, theme, schemeStyle as any)

    return useMemo(() => css`${resultRules}`, [resultRules])
  })
}

function assertExhaustive<Exceptions>(_value: Exceptions) {}
