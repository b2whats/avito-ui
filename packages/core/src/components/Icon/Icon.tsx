import React from 'react'
import { filterProps } from '../../utils/'
import { useTheme, mergeTheme } from '../../theme/'
import { css, keyframes, foldThemeParams, createClassName } from '../../styled-system/'
import { BaseIconProps } from './contract'
import { iconTheme } from './theme'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const iconClassName = createClassName<BaseIconProps, typeof iconTheme>(
  (themeStyle, props) => ({
    display: 'inline-block',
    valignSelf: 'middle',
    shrink: false,
    ...themeStyle,
    ...props,
    height: props.size === 'auto' ? 1 : themeStyle.height || props.size,
  }),
  (textRules, { spin, rotate, area = 0, onClick, shadow }) => css`
    fill: currentColor;
    height: 1em;

    ${onClick ? `
      overflow: visible;
      cursor: pointer;

      & > rect {
        stroke: transparent;
        stroke-width: ${area * 2}px;
        vector-effect: non-scaling-stroke;
        fill: none;
      }
    ` : ''}

    ${// Вложенная анимация это хак, из-за того что в safari вращение происходит не по центру при абсолютном позиционировании элемента
      spin ? css`
      & > * {
        animation: ${spinAnimation} ${typeof spin === 'boolean' ? 0.5 : spin}s linear infinite;
        transform-origin: center;
      }
    ` : ''}

    ${rotate ? `transform: rotate(${rotate}deg);` : ''}

    ${shadow ? '& > * { filter: url(#shadow) }' : ''}

    ${textRules}
  `
)

const shadowMask = (
  <filter id='shadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox'>
    <feDropShadow dx='0.05' dy='0.05' stdDeviation='1' floodColor='#a9a9a9' floodOpacity='0.8'/>
  </filter>
)

export const Icon = ({ override, ...props }: BaseIconProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(iconTheme, theme.Icon, override)

  props = {
    ...componentTheme.defaultProps,
    ...props,
  }

  const aria = {
    role: 'img',
    'aria-hidden': true,
    'data-icon': props.name,
  }

  const { Icon } = foldThemeParams(props, componentTheme)
  const iconStyle = iconClassName(props, theme, Icon.style)

  return (
    <svg {...filterProps(props)} css={iconStyle} {...aria}>
      {props.shadow && shadowMask}
      {props.onClick && <rect x='0' y='0' width='100%' height='100%' />}
      { props.children }
    </svg>
  )
}