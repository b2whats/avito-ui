import { styled } from '../../utils/'
import { Icon as IconBase } from '@avito/icons'

import { focus, space } from '../../styled-system/'
import { IconProps } from './contract'

const Icon = styled(IconBase,{
  shouldForwardProp: prop => prop !== 'size' && prop !== 'variant',
})<IconProps>`
  ${({ size, color, variant, onClick, theme: { icon, palette, variants }}) => (`
    font-size: ${icon[`size_${size}`] || size};
    
    ${
      color ? `fill: ${palette[color]};` : 
      variant ? `fill: ${variants[`${variant}_color_normal`]};` : ''
    }

    ${onClick && variant ? `&:hover { fill: ${variants[`${variant}_color_hover`]}; }` : ''};
  `)}

  ${focus}
  ${space}
`

Icon.defaultProps = {
  size: 'm',
}

export default Icon