import { styled } from '@avito/core'

type CardProps = {
  inset: 'squish' | 'square',
  width: string,
}

const insetMap = {
  squish: ['8px', '16px'],
  square: ['16px', '16px'],
}

export const CardDoc = styled('div')<CardProps>`
  box-sizing: border-box;
  line-height: 0;
  ${({ inset, width }) => `
    box-shadow: inset ${insetMap[inset][0]} ${insetMap[inset][1]} 0 #c7dcbf, inset -${insetMap[inset][0]} -${insetMap[inset][1]} #c7dcbf;
    padding: ${insetMap[inset][1]} ${insetMap[inset][0]};
    width: ${width};
  `}
`

CardDoc.defaultProps = {
  inset: 'squish',
  width: 'auto',
}

export default CardDoc