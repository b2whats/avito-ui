import React from 'react'
import styled from '@emotion/styled'
import { icons } from './createIcon'
import { IconProps } from './contract'

const Svg = styled('svg')<Partial<IconProps>>`
  flex-shrink: 0;
  vertical-align: middle;
  line-height: 1;
  display: inline-block;
  white-space: nowrap;

  ${({ size, color, onClick }) => `
    height: ${size === 'auto' ? '100%' : size || '1em'};
    fill: currentColor;
    ${color ? `color: ${color};` : ''};
    ${onClick ? 'cursor: pointer;' : ''};
  `}
`

const Icon = ({ name, marker, ...props }: IconProps) => {
  const icon = icons[name]

  if (!icon) {
    throw new Error(`Icon name "${name}" not exist.`)
  }

  // Accessibility
  const aria = props.onClick
    ? { 'aria-hidden': false, role: 'button', tabIndex: 0 }
    : { 'aria-hidden': true, role: 'img' }

  const content = typeof icon.svg === 'function'
    ? icon.svg(props)
    : icon.svg

  return (
    <Svg {...props} viewBox={icon.viewBox} {...aria} data-name={name} data-marker={marker}>
      {content}
    </Svg>
  )
}

require('./icons/')

export default Icon

