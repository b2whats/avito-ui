import React from 'react'
import { styled } from '../../utils/'
import { focus } from '../../styled-system/'
import { LinkProps } from './contract'

const Link = styled('a')<LinkProps>`
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  ${({ underline, inherit, noVisited, variant, theme: { link, variants } }) => {
    const underlineStyle = (visible?: boolean | string) => visible ? `
      padding-bottom: ${link.underline_offset};
      border-bottom: ${link.underline_height} ${typeof underline === 'string' ? underline : 'solid'} currentColor;
    ` : ''
    
    return `
      font-family: ${link.fontFamily};
      color: inherit;

      &:link {
        color: ${variant ? variants[`${variant}_color_normal`] : inherit ? 'currentColor' : link.color_normal};
        ${underlineStyle(link.underline_normal)}
      }

      &:visited {
        color: ${noVisited ? 'currentColor' : link.color_visited};
      }

      &:hover {
        color: ${variant ? variants[`${variant}_color_hover`] : link.color_hover};
        ${underlineStyle(link.underline_hover)}
      }

      &:active {
        color: ${variant ? variants[`${variant}_color_active`] : link.color_active};
      }

      ${underlineStyle(underline)}
    `
  }}

  &:focus {
    ${focus}
  }
`

Link.defaultProps = {
  variant: 'primary',
}

export default Link