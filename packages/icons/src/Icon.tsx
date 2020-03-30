import React from 'react'
import styled from '@emotion/styled'
import { icons } from './createIcon'
import { IconProps } from './contract'

type ComponentProps = Partial<IconProps>

const ClickableArea = styled('button')<ComponentProps>`
  position: relative;
  cursor: pointer;
  border: 0px;
  margin: 0px;
  padding: 0px;
  color: inherit;
  font-size: inherit;
  line-height: 1;
  vertical-align: middle;
  background-color: transparent;
  & > svg {
    vertical-align: top;
  }

  &::before {
    position: absolute;
    content: '';
    ${({ area }) => `
      top: -${area}px;
      bottom: -${area}px;
      left: -${area}px;
      right: -${area}px;
    `} 
  }
`

const Svg = styled('svg')<ComponentProps>`
  flex-shrink: 0;
  vertical-align: middle;

  ${({ size, color, colorHover }) => `
    height: ${size === 'auto' ? '100%' : typeof size === 'number' ? `${size}px` : size || '1em'};
    fill: currentColor;
    ${color ? `color: ${color}` : ''};
    ${colorHover ? `&:hover { color: ${colorHover} }` : ''};
  `}
`

const Icon = ({ className, area = 5, name, marker, onClick, ...props }: IconProps) => {
  const icon = icons[name]

  if (!icon) {
    throw new Error(`Icon name "${name}" not exist.`)
  }

  const aria = {
    role: 'img',
    'aria-hidden': true,
  }

  const other = {
    'data-icon': name,
    'data-marker': marker,
  }

  const content = typeof icon.svg === 'function'
    ? icon.svg(props)
    : icon.svg

  return onClick ?
      <ClickableArea className={className} area={area} onClick={onClick} {...other}>
        <Svg {...props} {...aria} viewBox={icon.viewBox}>{ content }</Svg>
      </ClickableArea> :
      <Svg {...props} className={className} viewBox={icon.viewBox} {...aria} {...other}>{ content }</Svg>
}

require('./icons/')

export default Icon

