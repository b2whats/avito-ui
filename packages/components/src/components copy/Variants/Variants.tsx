import React from 'react'
import { styled } from '../../utils'
import { space, dimension, shadows, position, fonts } from '../../styled-system'
import { VariantsProps, VariantsColor } from './contract'

type GetStyles = (
  props: VariantsProps & { theme: NonNullable<VariantsProps['theme']> }
) => string

type GetCssProp = (
  theme: NonNullable<VariantsProps['theme']>['variants'],
  themeVar: string,
  state: string,
  value?: VariantsColor,
  variant?: VariantsProps['variant'],
) => string

const mapColor = {
  color: 'color',
  borderColor: 'border-color',
  backgroundColor: 'background-color',
}

const getCssProp: GetCssProp = (theme, themeVar, state, value, variant) => {
  if (!value) return ''

  let color

  if (value === 'colored' && variant) {
    color = theme[`${variant}_${themeVar}_${state}`]
  } else if (value === 'contrast') {
    color = theme[`contrast_${themeVar}_${state}`]
  } else if (value === 'transparent') {
    color = 'transparent'
  } else if (value === 'contrast-light') {
    color = theme[`contrast_light_${themeVar}_${state}`]
  }

  if (!color) return ''

  return `${mapColor[themeVar]}: ${color};`

}

const getStyles: GetStyles = ({ theme, variant, adjacentSelector, ...props}) => {
  const variantsTheme = theme.variants
  const focusTheme = theme.focus
  let selector
  
  if (adjacentSelector) {
    selector = {
      normal: `${adjacentSelector} + &`,
      checked: `${adjacentSelector}:checked + &, ${adjacentSelector}[aria-checked=true] + &`,
      hover: `${adjacentSelector}:hover + &`,
      active: `${adjacentSelector}:active + &`,
      focus: `${adjacentSelector}:focus + &`,
      disabled: `${adjacentSelector}:disabled + &, ${adjacentSelector}[aria-disabled=true] + &`,
    }
  } else {
    selector = {
      normal: '&',
      checked: '&[aria-checked=true]',
      hover: '&:hover',
      active: '&:active',
      focus: '&&:focus',
      disabled: '&:disabled, &[aria-disabled=true]',
    }
  }

  let resultRule = ''
  let rule = ''

  rule += getCssProp(variantsTheme, 'color', 'normal', props.color, variant)
  rule += getCssProp(variantsTheme, 'borderColor', 'normal', props.border, variant)
  rule += getCssProp(variantsTheme, 'backgroundColor', 'normal', props.background, variant)

  if (rule !== '') {
    resultRule += `${selector.normal} {${rule}}`

    rule = ''
  }

  rule += getCssProp(variantsTheme, 'color', 'checked', props.colorChecked, variant)
  rule += getCssProp(variantsTheme, 'borderColor', 'checked', props.borderChecked, variant)
  rule += getCssProp(variantsTheme, 'backgroundColor', 'checked', props.backgroundChecked, variant)

  if (rule !== '') {
    resultRule += `${selector.checked} {${rule}}`

    rule = ''
  }

  rule += getCssProp(variantsTheme, 'color', 'hover', props.colorHover, variant)
  rule += getCssProp(variantsTheme, 'borderColor', 'hover', props.borderHover, variant)
  rule += getCssProp(variantsTheme, 'backgroundColor', 'hover', props.backgroundHover, variant)

  if (rule !== '') {
    resultRule += `${selector.hover} {
      ${rule}
      z-index: 1;
    }`

    rule = ''
  }

  rule += getCssProp(variantsTheme, 'color', 'active', props.colorActive, variant)
  rule += getCssProp(variantsTheme, 'borderColor', 'active', props.borderActive, variant)
  rule += getCssProp(variantsTheme, 'backgroundColor', 'active', props.backgroundActive, variant)

  if (rule !== '') {
    resultRule += `${selector.active} {${rule}}`

    rule = ''
  }

  rule += getCssProp(variantsTheme, 'color', 'focus', props.colorFocus, variant)
  rule += getCssProp(variantsTheme, 'borderColor', 'focus', props.borderFocus, variant)
  rule += getCssProp(variantsTheme, 'backgroundColor', 'focus', props.backgroundFocus, variant)

  if (props.focus) {
    rule += `
      ${!props.position ? 'position: relative;' : ''}
      box-shadow: ${focusTheme} ${variantsTheme[`${variant || 'primary'}_focus`]};
      outline: none;
      z-index: 2;
    `
  }

  if (rule !== '') {
    resultRule += `${selector.focus} {${rule}}`

    rule = ''
  }

  rule += getCssProp(variantsTheme, 'color', 'disabled', props.colorDisabled, variant)
  rule += getCssProp(variantsTheme, 'borderColor', 'disabled', props.borderDisabled, variant)
  rule += getCssProp(variantsTheme, 'backgroundColor', 'disabled', props.backgroundDisabled, variant)

  if (rule !== '') {
    resultRule += `${selector.disabled} {${rule}}`

    rule = ''
  }

  return resultRule
}

const Variants = styled('div')<VariantsProps>`
  box-sizing: border-box;
  &[disabled] {
    pointer-events: none;
  }

  ${({ borderRadius, borderWidth, borderStyle }) => `
    ${borderRadius ? `border-radius: ${borderRadius};`: ''}
    ${borderWidth ? `border-width: ${borderWidth};`: ''}
    ${borderStyle ? `border-style: ${borderStyle};`: ''}
  `}

  ${fonts}
  ${getStyles}
  ${position}
  ${space}
  ${dimension}
  ${shadows}
`

export default Variants