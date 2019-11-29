import { css } from '@emotion/core'
import { Theme } from '../theme/'

type TextProperties = Partial<{
  fontFamily: string,
  fontSize: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl' | number | string,
  lineHeight: 'normal' | 'dense' | number,
  letterSpacing: number,
  fontWeight: 'light' | 'normal' | 'bold',
  italic: boolean,
  noWrap: boolean,
  uppercase: boolean,
  truncate: boolean,
  crop: boolean,
  underline: boolean | 'dotted' | 'dashed',
}>

type Width = number
type Height = 's' | 'm' | 'l' | number

export type DimensionProperties = Partial<{
  display: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex',
  block: boolean,
  inline: boolean,
  width: Width,
  maxWidth: Width,
  minWidth: Width,
  height: Height,
  minHeight: Height,
  maxHeight: Height,
  grow: boolean,
  shrink: boolean,
  borderRadius: number | 'rounded',
  borderWidth: number,
}>

type SpaceValues = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'none' | 'auto' | number

export type MarginProperties = Partial<{
  m: SpaceValues,
  mx: SpaceValues,
  my: SpaceValues,
  mt: SpaceValues,
  mr: SpaceValues,
  mb: SpaceValues,
  ml: SpaceValues,
}>
export type PaddingProperties = Partial<{
  p: SpaceValues,
  px: SpaceValues,
  py: SpaceValues,
  pt: SpaceValues,
  pr: SpaceValues,
  pb: SpaceValues,
  pl: SpaceValues,
}>

export type SpaceProperties = PaddingProperties & MarginProperties



type Valign = 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
type Align = 'left' | 'center' | 'right' | 'justify'

type LayoutProperties = Partial<{
  align: Align,
  valign: Valign,
  valignSelf: Valign,
  column: boolean,
}>

type OtherProperties = Partial<{
  borderStyle: 'solid' | 'dotted' | 'dashed' | 'none',
  focus: boolean,
}>

type ColorProperties = Partial<{
  color: string,
  colorHover: string,
  colorActive: string,
  colorVisited: string,
  colorChecked: string,
  colorFocus: string,
  colorDisabled: string,
  backgroundColor: string,
  backgroundColorHover: string,
  backgroundColorActive: string,
  backgroundColorVisited: string,
  backgroundColorChecked: string,
  backgroundColorFocus: string,
  backgroundColorDisabled: string,
  borderColor: string,
  borderColorHover: string,
  borderColorActive: string,
  borderColorVisited: string,
  borderColorChecked: string,
  borderColorFocus: string,
  borderColorDisabled: string,
}>

type StyleProperties = TextProperties & DimensionProperties & SpaceProperties & LayoutProperties & ColorProperties & OtherProperties

export type SchemeType<Props extends { [K in keyof Props]: Props[K] }, ComponentsProps = {}> = {
  style?: Partial<StyleProperties>,
  props?: Partial<ComponentsProps>
} & {
  [Key in keyof Props]?: NonNullable<Props[Key]> extends string
    ? { [Key2 in Props[Key]]?: SchemeType<Omit<Props, Key>, ComponentsProps> }
    : NonNullable<Props[Key]> extends boolean | Function
      ? SchemeType<Omit<Props, Key>, ComponentsProps>
      : never
}

export type PresetType<Props> = {
  [key: string]: Partial<Props>
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
    block: 'block',
    inline: 'block',
    'inline-block': 'block',
    'flex': 'flex',
    'inline-flex': 'flex',
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
  alignFlex: {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
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
    colorChecked: 'color',
    colorFocus: 'color',
    colorDisabled: 'color',
    backgroundColor: 'background-color',
    backgroundColorHover: 'background-color',
    backgroundColorActive: 'background-color',
    backgroundColorVisited: 'background-color',
    backgroundColorChecked: 'background-color',
    backgroundColorFocus: 'background-color',
    backgroundColorDisabled: 'background-color',
    borderColor: 'border-color',
    borderColorHover: 'border-color',
    borderColorActive: 'border-color',
    borderColorVisited: 'border-color',
    borderColorChecked: 'border-color',
    borderColorFocus: 'border-color',
    borderColorDisabled: 'border-color',
  },
}

export const foldScheme = (scheme: any, props: any) => {
  const result = {
    style: {},
    props: {},
  }

  if (!scheme) return result

  for (const prop in scheme) {
    if (prop === 'style') {
      Object.assign(result.style, scheme.style)

      continue
    }
    if (prop === 'props') {
      Object.assign(result.props, scheme.props)

      continue
    }
    const value = props[prop]
    const nestedConfig = scheme[prop]

    if (value === true || typeof value === 'function') {
      const data = foldScheme(nestedConfig, props)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)

      continue
    }

    if (!nestedConfig[value]) continue

    const data = foldScheme(nestedConfig[value], props)

    Object.assign(result.style, data.style)
    Object.assign(result.props, data.props)
  }

  return result
}

export const getStyles = (params: any, {font, dimension, space, palette, focus}: any) => {
  let css = ''

  if (!params) return css

  let spaces = []
  let hover = []
  let active = []
  let visited = []
  let checked = []
  let focusState = []
  let disabled = []


  for (const param in params) {
    let value = params[param]

    if (value === null || value === undefined || value === false) continue

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
      case 'uppercase':
        css += 'text-transform: uppercase;'

        break
      case 'truncate':
        css += `
          display: inline-block;
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
            display: inline-block;
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
          display: inline-block;
          padding-bottom: ${font.underline.offset}px;
          border-bottom: ${font.underline.height}px ${typeof value === 'string' ? value : 'solid'} currentColor;
        `
  
        break
      case 'width':
      case 'minWidth':
      case 'maxWidth':
        css += `${maps.dimension[param]}: ${value > 1 ? `${value}px` : `${value * 100}%`};`

        break
      case 'height':
      case 'minHeight':
      case 'maxHeight':
        value = dimension.rowHeight[value] || value
        css += `${maps.dimension[param]}: ${value > 1 ? `${value}px` : `${value * 100}%`};`

        break
      case 'display':
        if (params.block || params.inline) break

        css += `display: ${value};`

        break
      case 'inline':
        css += `display: ${maps.inline[params.display] || 'inline-block'};`

        break
      case 'block': {
        css += `display: ${maps.block[params.display] || 'block'};`

        break
      }
      case 'grow':
        css += 'flex-grow: 1;'
    
        break
      case 'shrink':
        css += 'flex-shrink: 1;'
    
        break
      case 'borderWidth':
        css += `border-width: ${value}px`
    
        break
      case 'borderRadius':
        css += `border-width: ${value === 'rounded' ? 100 : value}px`
    
        break
      case 'align': {
        const prop = maps.align[params.display]

        if (prop === 'justify-content') {
          value = maps.justifyContent[value]
        }

        css += `${prop}: ${value};`

        break
      }
      case 'valign':
        css += `align-items: ${maps.alignFlex[value]};`

        break
      case 'valignSelf':
        css += `align-self: ${maps.alignFlex[value]};`

        break
      case 'column':
        css += 'flex-direction: column;'

        break
      case 'm':
        spaces.push(`margin: ${spaceValue(value, space)};`)

        break
      case 'mx':
        value = spaceValue(value, space)

        spaces.push(`margin-left: ${value};margin-right: ${value};`)

        break
      case 'my':
        value = spaceValue(value, space)

        spaces.push(`margin-top: ${value};margin-bottom: ${value};`)

        break
      case 'mt':
        spaces.push(`margin-top: ${spaceValue(value, space)};`)

        break
      case 'mr':
        spaces.push(`margin-right: ${spaceValue(value, space)};`)

        break
      case 'mb':
        spaces.push(`margin-bottom: ${spaceValue(value, space)};`)

        break
      case 'ml':
        spaces.push(`margin-left: ${spaceValue(value, space)};`)

        break
      case 'p':
        spaces.push(`padding: ${spaceValue(value, space)};`)
    
        break
      case 'px':
        value = spaceValue(value, space)
  
        spaces.push(`padding-left: ${value};padding-right: ${value};`)
  
        break
      case 'py':
        value = spaceValue(value, space)
  
        spaces.push(`padding-top: ${value};padding-bottom: ${value};`)
  
        break
      case 'pt':
        spaces.push(`padding-top: ${spaceValue(value, space)};`)
  
        break
      case 'pr':
        spaces.push(`padding-right: ${spaceValue(value, space)};`)
  
        break
      case 'pb':
        spaces.push(`padding-bottom: ${spaceValue(value, space)};`)
  
        break
      case 'pl':
        spaces.push(`padding-left: ${spaceValue(value, space)};`)
  
        break
      case 'color':
      case 'backgroundColor':
      case 'borderColor':
        css += `${maps.color[param]}: ${palette[value] || value};`
      
        break
      case 'colorHover':
        hover.push(`color: ${palette[value] || value};`)

        break
      case 'backgroundColorHover':
        hover.push(`background-color: ${palette[value] || value};`)

        break
      case 'borderColorHover':
        hover.push(`border-color: ${palette[value] || value};`)
            
        break
      case 'colorActive':
        active.push(`color: ${palette[value] || value};`)

        break
      case 'backgroundColorActive':
        active.push(`background-color: ${palette[value] || value};`)

        break
      case 'borderColorActive':
        active.push(`border-color: ${palette[value] || value};`)
            
        break
      case 'colorVisited':
        visited.push(`color: ${palette[value] || value};`)

        break
      case 'backgroundColorVisited':
        visited.push(`background-color: ${palette[value] || value};`)

        break
      case 'borderColorVisited':
        visited.push(`border-color: ${palette[value] || value};`)
            
        break
      case 'colorChecked':
        checked.push(`color: ${palette[value] || value};`)

        break
      case 'backgroundColorChecked':
        checked.push(`background-color: ${palette[value] || value};`)

        break
      case 'borderColorChecked':
        checked.push(`border-color: ${palette[value] || value};`)
            
        break
      case 'colorFocus':
        focus.push(`color: ${palette[value] || value};`)

        break
      case 'backgroundColorFocus':
        focus.push(`background-color: ${palette[value] || value};`)

        break
      case 'borderColorFocus':
        focusState.push(`${maps.color[param]}: ${palette[value] || value};`)
            
        break
      case 'colorDisabled':
        disabled.push(`color: ${palette[value] || value};`)

        break
      case 'backgroundColorDisabled':
        disabled.push(`background-color: ${palette[value] || value};`)

        break
      case 'borderColorDisabled':
        disabled.push(`border-color: ${palette[value] || value};`)
            
        break
      case 'borderStyle':
        css += `border-style: ${value};`
            
        break
      case 'focus':
        css += `
          outline: none;
          &&:focus {
            box-shadow: ${focus.shape} ${focus[`${params.variant || 'default'}Color`]};
            position: relative;
            z-index: 2;
          }
        `
            
        break
      default:
        break
    }
  }

  if (spaces.length) {
    css += `&& {${spaces.join('')}}`
  }

  let selector = null
  if (params.adjacentSelector) {
    const before = params.adjacentSelector

    selector = {
      checked: `${before}:checked + &, ${before}[aria-checked=true] + &`,
      visited: `${before}:visited + &`,
      hover: `${before}:hover + &`,
      active: `${before}:active + &`,
      focus: `${before}:focus + &`,
      disabled: `${before}:disabled + &, ${before}[aria-disabled=true] + &`,
    }
  } else {
    selector = {
      checked: '&[aria-checked=true]',
      visited: '&:visited',
      hover: '&:hover',
      active: '&:active',
      focus: '&&:focus',
      disabled: '&:disabled, &[aria-disabled=true]',
    }
  }

  if (hover.length) {
    css += `${selector.hover}{${hover.join('')}}`
  }
  if (active.length) {
    css += `${selector.active}{${active.join('')}}`
  }
  if (visited.length) {
    css += `${selector.visited}{${visited.join('')}}`
  }
  if (checked.length) {
    css += `${selector.checked}{${checked.join('')}}`
  }
  if (focusState.length) {
    css += `${selector.focus}{${focusState.join('')}}`
  }
  if (disabled.length) {
    css += `${selector.disabled}{${disabled.join('')}}`
  }

  return css
}

const filterUndefined = (obj) => {
  const result = {}

  for (const key in obj) {
    if (obj[key] !== undefined) {
      result[key] = obj[key]
    }
  }

  return result
}


export const getThemeStyle = (theme, name, props, extra) => {
  const { scheme } = theme[name]
  const themeParams = {}
  const result = {}

  for (const name in scheme) {
    const flatScheme = foldScheme(scheme[name], props)
    themeParams[name] = flatScheme.style
  }

  for (const name in themeParams) {
    const boxParams = { ...themeParams[name], ...filterUndefined(extra[name])}

    result[name] = css`${getStyles(boxParams, theme)}`
  }

  return result
}

type FoldThemeParamsReturn<ComponentTheme> = ComponentTheme extends { scheme: object } ? {
  [K in keyof ComponentTheme['scheme']]: {
    style: StyleProperties,
    props: ComponentTheme['scheme'][K] extends SchemeType<any, infer R> ? R : never
  }
} : never

export function foldThemeParams<T extends { scheme: { [key: string]: any } }>({ scheme }: T, props: any): FoldThemeParamsReturn<T> {
  const result: any = {}

  let name: keyof typeof scheme
  for (name in scheme) {
    result[name] = foldScheme(scheme[name], props)
  }

  return result
}

export function createClassName<Props, ComponentTheme = null>(
  createRule: (schemeStyle: FoldThemeParamsReturn<ComponentTheme> | undefined, props: Props, theme: Theme) => StyleProperties,
  createUserRule: (textRules: string, props: Props, theme: Theme) => string
) {
  return (props: Props, theme: Theme, schemeStyle?: FoldThemeParamsReturn<ComponentTheme>) => {
    const styles = createRule(schemeStyle, props, theme)
    const textRules = getStyles(styles, theme)

    const resultRules = createUserRule(textRules, props, theme)

    return css`${resultRules}`
  }
}