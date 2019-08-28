import React from 'react'
import memoize from 'fast-memoize'
import { styled, useTheme } from '../../utils'
import { space, focus } from '../../styled-system'
import { VariantsProps } from './contract'
import { VariantsTheme } from './theme'

import { StyledComponent } from '@emotion/styled-base'

type States = 'hover' | 'active' | 'selected' | 'focus'
type UnionToObject <T extends string, V> = {
  [key in T]?: V
}
type StatesMap = UnionToObject<States, boolean>

type GetStyles = (
  theme: VariantsTheme,
  property: 'border' | 'background' | 'color',
  type: VariantsProps['border'] | VariantsProps['background'] | VariantsProps['color'],
  variant?: VariantsProps['variant'],
  state?: string,
) => any

const statesMap = (value: string): StatesMap => value.split(' ').reduce((acc, state) => {
  acc[state] = true

  return acc
}, {})

const getStyles: GetStyles = memoize((theme, property, type, variant, states = '') => {
  if (!type) return

  let themeVar
  let prop

  if (property === 'border') {
    themeVar = 'borderColor'
    prop = 'border-color'
  }
  if (property === 'background') {
    themeVar = 'backgroundColor'
    prop = 'background-color'
  }
  if (property === 'color') {
    themeVar = 'color'
    prop = 'color'
  }

  const map = statesMap(states)

  const styles = {
    normal: null,
    hover: null,
    active: null,
    focus: null,
    disabled: null,
  }

  for (const state in styles) {
    if (type === 'colored' && variant) {
      styles[state] = theme[`${variant}_${themeVar}_${state}`]
    } else if (type === 'contrast') {
      styles[state] = theme[`${variant}_${themeVar}_contrast${state === 'disabled' ? '_disabled' : ''}`]
    } else if (type === 'mixed' && variant) {
      if (property === 'color') {
        styles[state] = theme[`mixed_${themeVar}_${state}`]
          ? theme[`${variant}_${themeVar}_${state}`]
          : theme[`${variant}_${themeVar}_contrast${state === 'disabled' ? '_disabled' : ''}`]
      } else {
        styles[state] = theme[`mixed_${themeVar}_${state}`]
          ? theme[`${variant}_${themeVar}_${state}`]
          : theme[`gray_${themeVar}_${state}`]
      }
    } else {
      styles[state] = theme[`gray_${themeVar}_${state}`]
    }
  }

  return `
    & { ${prop}: ${styles.normal}; }
    ${map.selected ? `&[aria-checked=true] { ${prop}: ${styles.active}; }` : ''}
    ${map.hover ? `&:hover { ${prop}: ${styles.hover}; z-index: 1; }` : ''}
    ${map.active ? `&:active { ${prop}: ${styles.active}; }` : ''}
    ${map.focus ? `&:focus { ${prop}: ${styles.focus}; }` : ''}
    &:disabled { ${prop}: ${styles.disabled}; }
  `
})

const Variants = styled('span')<VariantsProps>`
  ${({theme, border, borderState, variant}) => getStyles(theme.variants, 'border', border, variant, borderState)}
  ${({theme, background, backgroundState, variant}) => getStyles(theme.variants, 'background', background, variant, backgroundState)}
  ${({theme, color, colorState, variant}) => getStyles(theme.variants, 'color', color, variant, colorState)}
  ${(props) => props.focus && focus(props)}

  ${space}
`

export default Variants as StyledComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, VariantsProps, ReturnType<typeof useTheme>>