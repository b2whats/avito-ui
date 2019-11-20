import { css } from '@emotion/core'

type TextProperties = Partial<{
  fontFamily: string,
  fontSize: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl' | number,
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

type DimensionProperties = Partial<{
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

export type SpaceProperties = Partial<{
  m: SpaceValues,
  mx: SpaceValues,
  my: SpaceValues,
  mt: SpaceValues,
  mr: SpaceValues,
  mb: SpaceValues,
  ml: SpaceValues,

  p: SpaceValues,
  px: SpaceValues,
  py: SpaceValues,
  pt: SpaceValues,
  pr: SpaceValues,
  pb: SpaceValues,
  pl: SpaceValues,
}>

type Valign = 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
type Align = 'left' | 'center' | 'right' | 'justify'

type IndentProperties = Partial<{
  align: Align,
  valign: Valign,
  valignSelf: Valign,
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

type StyleProperties = TextProperties & DimensionProperties & SpaceProperties & IndentProperties & ColorProperties

export type SchemeType<Props extends { [K in Prop]: Props[K] }, Prop extends keyof Props> = {
  style?: Partial<StyleProperties>,
} & {
  [Key in Prop]?: NonNullable<Props[Key]> extends string
    ? { [Key2 in Props[Key]]?: SchemeType<Props, Exclude<Prop,Key>> }
    : NonNullable<Props[Key]> extends boolean
      ? SchemeType<Props, Exclude<Prop,Key>>
      : never
}

export type PresetType<Props> = {
  [key: string]: Partial<Props>
}

const computedCrop = (crop: number, targetHeight: number) => {
  const value = (crop + (targetHeight - 1) * 16) / 32 

  return Math.round(value * 10) / 10
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
}

const schemeParams = (config: any, props: any) => {
  let result: any = {}

  if (!config) return null

  const { style, ...configProps } = config

  if (style) {
    Object.assign(result, style)
  }

  // Кажется это больше не нужно
  // if (checked && (props.checked || props['aria-checked'])) {
  //   Object.assign(result, checked)
  // }

  // Что бы меньше проверок делать тут, можно валидировать конфиг из темы в дев режиме 
  for (const prop in configProps) {
    const propValue = props[prop]

    if (propValue === true) {
      Object.assign(result, configProps[prop].style)
    } else if (propValue || propValue === 0) {
      const nestedConfig = configProps[prop][propValue]
  
      Object.assign(result, schemeParams(nestedConfig, props))
    }
  }

  return result
}

export const getStyles = (params, {font, dimension, space, palette}) => {
  if (!params) return null

  let css = ''
  let spaces = []
  let hover = []
  let active = []
  let visited = []
  let checked = []
  let focus = []
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
        if (params.lineHeight) break

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
        css += `${param}: ${value > 1 ? `${value}px` : `${value * 100}%`};`

        break
      case 'height':
      case 'minHeight':
      case 'maxHeight':
        css += `${param}: ${dimension.rowHeight[value] ||  value > 1 ? `${value}px` : `${value * 100}%`};`

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
      case 'valign': {
        css += `align-items: ${maps.alignFlex[value]};`

        break
      }
      case 'valignSelf': {
        css += `align-self: ${maps.alignFlex[value]};`

        break
      }
      case 'm':
        spaces.push(`margin: ${spaceValue(value, space)};`)

        break
      case 'mx': {
        const val = spaceValue(value, space)

        spaces.push(`margin-left: ${val};margin-right: ${val};`)

        break
      }
      case 'my': {
        const val = spaceValue(value, space)

        spaces.push(`margin-top: ${val};margin-bottom: ${val};`)

        break
      }
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
      case 'px': {
        const val = spaceValue(value, space)
  
        spaces.push(`padding-left: ${val};padding-right: ${val};`)
  
        break
      }
      case 'py': {
        const val = spaceValue(value, space)
  
        spaces.push(`padding-top: ${val};padding-bottom: ${val};`)
  
        break
      }
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
        css += `${param}: ${palette[value] || value};`
      
        break
      case 'colorHover':
      case 'backgroundColorHover':
      case 'borderColorHover':
        hover.push(`${param}: ${palette[value] || value};`)
            
        break
      case 'colorActive':
      case 'backgroundColorActive':
      case 'borderColorActive':
        active.push(`${param}: ${palette[value] || value};`)
            
        break
      case 'colorVisited':
      case 'backgroundColorVisited':
      case 'borderColorVisited':
        visited.push(`${param}: ${palette[value] || value};`)
            
        break
      case 'colorChecked':
      case 'backgroundColorChecked':
      case 'borderColorChecked':
        checked.push(`${param}: ${palette[value] || value};`)
            
        break
      case 'colorFocus':
      case 'backgroundColorFocus':
      case 'borderColorFocus':
        focus.push(`${param}: ${palette[value] || value};`)
            
        break
      case 'colorDisabled':
      case 'backgroundColorDisabled':
      case 'borderColorDisabled':
        disabled.push(`${param}: ${palette[value] || value};`)
            
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
  if (focus.length) {
    css += `${selector.focus}{${focus.join('')}}`
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
  const { scheme, kind } = theme[name]
  const themeParams = {}
  const result = {}

  for (const name in scheme) {
    themeParams[name] = schemeParams(scheme[name], props)
  }

  for (const name in themeParams) {
    const boxParams = { ...themeParams[name], ...filterUndefined(extra[name])}

    result[name] = css`${getStyles(boxParams, theme)}`
  }

  return result
}
