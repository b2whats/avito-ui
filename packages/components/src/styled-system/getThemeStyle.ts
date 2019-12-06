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
  bold: boolean,
  light: boolean,
  uppercase: boolean,
  truncate: boolean,
  crop: boolean,
  underline: boolean | 'dotted' | 'dashed',
}>

type Width = number
type Height = 's' | 'm' | 'l' | number

export type DimensionProperties = Partial<{
  width: Width,
  maxWidth: Width,
  minWidth: Width,
  height: Height,
  minHeight: Height,
  maxHeight: Height,
  /** Уменьшать при нехватке пространства */
  shrink?: boolean,
  /** Занять все возможзное пространство */
  grow?: boolean,
}>

type Display = { display: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' }

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
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  adjacentSelector: string,
  block: boolean,
  inline: boolean,
  wrap: boolean,
  borderRadius: number | 'rounded',
  radius: number | 'rounded',
  rounded: boolean,
  borderWidth: number,
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
type UnionToIntersection<U> = (boolean extends U ? (k: U)=>void : U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true
type OnlyLiteralString<T> = T extends string ? T : never
type IsChildren<T> = React.ReactNode extends T ? true : false

export type SchemeType<Props extends { [K in keyof Props]: Props[K] }, ComponentsProps = never> = {
  style?: Partial<StyleProperties>,
  props?: Partial<ComponentsProps>
} & {
  [Key in keyof Props]?: IsChildren<Props[Key]> extends true
    ? SchemeType<Omit<Props, Key>, ComponentsProps>
    : IsUnion<NonNullable<Props[Key]>> extends true
      ? { [Key2 in OnlyLiteralString<Props[Key]>]?: SchemeType<Omit<Props, Key>, ComponentsProps> }
      : SchemeType<Omit<Props, Key>, ComponentsProps>
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
  alignFlex: {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
    baseline: 'baseline',
    stretch: 'baseline',
  },
  valignSelf: {
    block: 'vertical-align',
    inline: 'vertical-align',
    'inline-block': 'vertical-align',
    'flex': 'align-self',
    'inline-flex': 'align-self',
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

    if (nestedConfig[value]) {
      const data = foldScheme(nestedConfig[value], props)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)

      continue
    }

    if (value) {
      const data = foldScheme(nestedConfig, props)

      Object.assign(result.style, data.style)
      Object.assign(result.props, data.props)
    }
  }

  return result
}

export const getStyles = (params: StyleProperties & Display, {font, dimension, space, palette, focus}: any) => {
  let css = ''

  if (!params) return css

  let margin: string[] = []
  let padding: string[] = []
  let hoverState = []
  let checkedState = []
  let activeState = []
  let visitedState = []
  let focusState = []
  let disabledState = []


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
      case 'wrap':
        css += 'flex-wrap: wrap;'

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
        css += `border-width: ${value}px;`
    
        break
      case 'radius':
      case 'borderRadius':
        if (params.rounded) break

        css += `border-radius: ${value === 'rounded' ? 100 : value}px;`
    
        break
      case 'rounded':
        css += 'border-radius: 100px;'
        
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
      case 'valignSelf': {
        const prop = maps.valignSelf[params.display]

        if (prop === 'align-self') {
          value = maps.alignFlex[value]
        }

        css += `${prop}: ${value};`

        break
      }
      case 'column':
        css += 'flex-direction: column;'

        break
      case 'm':
        value = spaceValue(value, space)
        margin = [
          `margin-top: ${value};`,
          `margin-right: ${value};`,
          `margin-bottom: ${value};`,
          `margin-left: ${value};`,
        ]

        break
      case 'mx':
        value = spaceValue(value, space)
        margin[1] = `margin-right: ${value};`
        margin[3] = `margin-left: ${value};`

        break
      case 'my':
        value = spaceValue(value, space)
        margin[0] = `margin-top: ${value};`
        margin[2] = `margin-bottom: ${value};`

        break
      case 'mt':
        value = spaceValue(value, space)
        margin[0] = `margin-top: ${value};`

        break
      case 'mr':
        value = spaceValue(value, space)
        margin[1] = `margin-right: ${value};`

        break
      case 'mb':
        value = spaceValue(value, space)
        margin[2] = `margin-bottom: ${value};`

        break
      case 'ml':
        value = spaceValue(value, space)
        margin[3] = `margin-left: ${value};`

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
      case 'backgroundColor':
      case 'borderColor':
        css += `${maps.color[param]}: ${palette[value] || value};`
      
        break
      case 'colorHover':
      case 'backgroundColorHover':
      case 'borderColorHover':
        hoverState.push(`${maps.color[param]}: ${palette[value] || value};`)
            
        break
      case 'colorActive':
      case 'backgroundColorActive':
      case 'borderColorActive':
        activeState.push(`${maps.color[param]}: ${palette[value] || value};`)
            
        break
      case 'colorVisited':
      case 'backgroundColorVisited':
      case 'borderColorVisited':
        visitedState.push(`${maps.color[param]}: ${palette[value] || value};`)
            
        break
      case 'colorFocus':
      case 'backgroundColorFocus':
      case 'borderColorFocus':
        focusState.push(`${maps.color[param]}: ${palette[value] || value};`)
            
        break
      case 'colorChecked':
      case 'backgroundColorChecked':
      case 'borderColorChecked':
        checkedState.push(`${maps.color[param]}: ${palette[value] || value};`)
            
        break
      case 'colorDisabled':
      case 'backgroundColorDisabled':
      case 'borderColorDisabled':
        disabledState.push(`${maps.color[param]}: ${palette[value] || value};`)
            
        break
      case 'borderStyle':
        css += `border-style: ${value};`
            
        break
      case 'focus':
        const color = focus.color[params.variant || 'default']
        css += `
          outline: none;
          &&:focus {
            box-shadow: ${focus.shape} ${palette[color] || color};
            position: relative;
            z-index: 2;
          }
        `
            
        break
      default:
        break
    }
  }

  if (margin.length || padding.length) {
    css += `&&& {
      ${margin.join('')}
      ${padding.join('')}
    }`
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

  if (checkedState.length) {
    css += `${selector.hover}{${hoverState.join('')}}`
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
    css += `${selector.disabled}{cursor: not-allowed;${disabledState.join('')}}`
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

type valueof<T> = T[keyof T]
type ThemeStyle<ComponentTheme> = ComponentTheme extends object ? valueof<FoldThemeParamsReturn<ComponentTheme>>['style'] : never

interface Selector<Props, ComponentTheme> {
  t: (props: Props, theme: Theme, schemeStyle: ThemeStyle<ComponentTheme>) => any;
  f: (props: Props, theme: Theme) => any;
}

export function createClassName<Props, ComponentTheme extends object | null = null>(
  createRule: (schemeStyle: ThemeStyle<ComponentTheme>, props: Props, theme: Theme) => StyleProperties & Display,
  createUserRule: (textRules: string, props: Props, theme: Theme, schemeStyle: ThemeStyle<ComponentTheme>) => any,
): Selector<Props, ComponentTheme>[ComponentTheme extends object ? 't' : 'f']  {
  return (props: Props, theme: Theme, schemeStyle?: ThemeStyle<ComponentTheme>) => {
    const styles = createRule(schemeStyle as any, props, theme)
    const textRules = getStyles(styles, theme)

    const resultRules = createUserRule(textRules, props, theme, schemeStyle as any)
    
    return typeof resultRules === 'string' ? css`${resultRules}` : resultRules
  }
}
