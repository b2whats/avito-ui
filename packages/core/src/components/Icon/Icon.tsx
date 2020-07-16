import React from 'react'
import { css, keyframes, foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps, isIE } from '../../utils/'
import { BaseIconProps } from './contract'
import { iconTheme } from './theme'

/* IE11 вращает не по центру, transform-origin должен быть тут */
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); transform-origin: 50% 50%;  }
  100% { transform: rotate(360deg); transform-origin: 50% 50%; }
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
  (textRules, { spin, rotate, area, shadow }) => css`
    fill: currentColor;
    height: 1em;

    &:focus {
      outline: none;
    }

    ${area ? `
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
      ${isIE ? '&' : '& > *'} {
        animation: ${spinAnimation} ${typeof spin === 'boolean' ? 0.5 : spin}s linear infinite;
        transform-origin: center;
      }
    ` : ''}

    ${rotate ? `transform: rotate(${rotate}deg);` : ''}

    ${shadow ? '& > * { filter: url(#shadow) }' : ''}

    ${textRules}
    box-sizing: content-box;
  `
)

const shadowMask = (
  <filter id='shadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox'>
    <feDropShadow dx='0.05' dy='0.05' stdDeviation='1' floodColor='#a9a9a9' floodOpacity='0.8' />
  </filter>
)

export const Icon = uiComponent('Icon', iconTheme, { memo: false })<
  BaseIconProps,
  SVGSVGElement
>((props, { theme, tokens, testId }) => {
  const aria = {
    role: props.role || (props.onClick ? 'button' : 'img'),
    tabIndex: props.onClick ? 0 : undefined,
    'aria-hidden': true,
    'data-icon': props.name,
  }

  // IE11 не верно указывает ширину svg без переданного значения witdh
  const setRef = (node: any) => {
    if (!node || !isIE) return

    const [,,width, height] = node.getAttribute('viewBox').split(' ')
    const ratio = Number(width) / Number(height)
    const { clientHeight } = node

    node.style.width = clientHeight * ratio + 'px'
  }

  const { Icon } = foldThemeParams(props, theme)
  const iconStyle = iconClassName(props, tokens, Icon.style)

  return (
    <svg {...filterProps(props)} css={iconStyle} ref={setRef} {...aria} {...testId()}>
      {props.shadow && shadowMask}
      {props.area && <rect x='0' y='0' width='100%' height='100%' />}
      { props.children }
    </svg>
  )
})
