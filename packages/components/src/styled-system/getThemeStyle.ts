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

type SpaceValues = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'none' | 'auto' 

type SpaceProperties = Partial<{
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

const schemeParams = (config: any, props: any) => {
  let result: any = {}

  if (!config) return null

  const { style, checked, ...configProps } = config

  if (style) {
    Object.assign(result, style)
  }

  if (checked && (props.checked || props['aria-checked'])) {
    Object.assign(result, checked)
  }

  for (const prop in configProps) {
    const propValue = props[prop]

    if (propValue || propValue === 0) {
      const nestedConfig = configProps[prop][propValue]
  
      Object.assign(result, schemeParams(nestedConfig, props))
    }
  }

  return result
}

const spaceValue = (value: string | number, spaces: {}): string => {
  if (typeof value === 'number') {
    return `${value}px`
  } else {
    return spaces[value] ? `${spaces[value]}px` : value
  }
}

export const getStyles = (params, theme: { font, height, space, palette }) => {
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

    if (!value && value !== 0) continue

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
        const weightMap = {
          light: 300,
          normal: 400,
          bold: 600,
        }

        css += `font-weight: ${weightMap[value]};`

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
      case 'width':
      case 'minWidth':
      case 'maxWidth':
        css += `${param}: ${value > 1 ? `${value}px` : `${value * 100}%`};`

        break
      case 'height':
      case 'minHeight':
      case 'maxHeight':
        css += `${param}: ${height[value] ||  value > 1 ? `${value}px` : `${value * 100}%`};`

        break
      case 'display':
        if (params.block || params.inline) break

        css += `display: ${value};`

        break
      case 'inline':
        const inlineMap = {
          block: 'block',
          inline: 'block',
          'inline-block': 'block',
          'flex': 'flex',
          'inline-flex': 'flex',
        }
  
        css += `display: ${inlineMap[params.display] || 'inline'};`

        break
      case 'block': {
        const blockMap = {
          block: 'block',
          inline: 'block',
          'inline-block': 'block',
          'flex': 'flex',
          'inline-flex': 'flex',
        }

        css += `display: ${blockMap[params.display] || 'block'};`

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
        const displayMap = {
          block: 'text-align',
          inline: 'text-align',
          'inline-block': 'text-align',
          'flex': 'justify-content',
          'inline-flex': 'justify-content',
        }
        const prop = displayMap[params.display]

        if (prop === 'justify-content') {
          value = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end',
            justify: 'space-between',
          }[value]
        }

        css += `${prop}: ${value};`

        break
      }
      case 'valign': {
        const valueMap = {
          top: 'flex-start',
          middle: 'center',
          bottom: 'flex-end',
          baseline: 'baseline',
          stretch: 'baseline',
        }

        css += `align-items: ${valueMap[value]};`

        break
      }
      case 'valignSelf': {
        const valueMap = {
          top: 'flex-start',
          middle: 'center',
          bottom: 'flex-end',
          baseline: 'baseline',
          stretch: 'baseline',
        }

        css += `align-self: ${valueMap[value]};`

        break
      }
      case 'm':
        spaces.push(`margin: ${spaceValue(value, space)};`)

        break
      case 'mx': {
        const dimension = spaceValue(value, space)

        spaces.push(`margin-left: ${dimension};margin-right: ${dimension};`)

        break
      }
      case 'my': {
        const dimension = spaceValue(value, space)

        spaces.push(`margin-top: ${dimension};margin-bottom: ${dimension};`)

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
        const dimension = spaceValue(value, space)
  
        spaces.push(`padding-left: ${dimension};padding-right: ${dimension};`)
  
        break
      }
      case 'py': {
        const dimension = spaceValue(value, space)
  
        spaces.push(`padding-top: ${dimension};padding-bottom: ${dimension};`)
  
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


export const getThemeStyle = (name, props, theme, extra) => {
  const { scheme, kind } = theme[name]
  const themeParams = {}
  const result = {}

  for (const name in scheme) {
    themeParams[name] = schemeParams(scheme[name], props)
  }

  for (const name in themeParams) {
    const boxParams = { ...themeParams[name], ...kind, ...filterUndefined(extra)}

    result[name] = css`${getStyles(boxParams, theme)}`
  }

  return result
}
