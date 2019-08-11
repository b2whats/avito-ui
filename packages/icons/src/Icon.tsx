import React from 'react'
import styled from '@emotion/styled'
import { icons } from './createIcon'
import { IconProps } from './contract'
import { tokens, Tokens } from '@avito/tokens'

const Svg = styled('svg')<Partial<IconProps>>`
  flex-shrink: 0;
  vertical-align: middle;
  line-height: 1;
  display: inline-block;
  white-space: nowrap;
  height: 1em;

  ${({ size, color, onClick }) => `
    ${size ? `font-size: ${size};` : ''}
    fill: ${color ? color : 'currentColor'};
    cursor: ${onClick ? 'pointer' : 'default'};
  `}
`

const Icon = ({ name, size, color, marker, ...props }: IconProps) => {
  const icon = icons[name]

  if (!icon) {
    throw new Error(`Icon name "${name}" not exist.`)
  }

  // Accessibility
  const aria = props.onClick
        ? { 'aria-hidden': false, role: 'button', tabIndex: 0 }
        : { 'aria-hidden': true, role: 'img' }

  const content = typeof icon.svg === 'function'
        ? icon.svg({ size, color })
        : icon.svg

  return (
    <Svg {...props} viewBox={icon.viewBox} {...aria} data-name={name} data-marker={marker}>
      {content}
    </Svg>
  )
}

require('./icons/')

export default Icon

