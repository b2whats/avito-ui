import { styled } from '../../utils/'
import { focus } from '../../styled-system/'
import { LinkProps } from './contract'

const Link = styled('a')<LinkProps>`
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;

  ${({ underline, inherit, noVisited, variant, theme: { link, variants } }) => {
    const underlineStyle = (visible?: boolean | string) => visible ? `
      border-bottom-color: currentColor;
      border-bottom-style: ${typeof underline === 'string' ? underline : 'solid'};
    ` : ''
    
    return `
      font-family: ${link.fontFamily};
      padding-bottom: ${link.underline_offset};
      color: inherit;
      border-bottom: ${link.underline_height} solid transparent;

      &:link {
        color: ${inherit ? 'currentColor' : variants[`${variant}_color_normal`]};
        ${underlineStyle(link.underline_normal)}
      }

      &:visited {
        color: ${noVisited ? 'currentColor' : link.color_visited};
      }

      &:hover {
        color: ${variants[`${variant}_color_hover`]};
        ${underlineStyle(link.underline_hover)}
      }

      &:active {
        color: ${variants[`${variant}_color_active`]};
      }

      ${underlineStyle(underline)}
    `
  }}

  ${focus}
`

Link.defaultProps = {
  variant: 'primary',
}

export default Link