import { styled } from '../utils'

type CardProps = {
  inset: 'squish' | 'square',
  width: string,
}

const insetMap = {
  squish: {
    x: '16px',
    y: '8px',
  },
  square: {
    x: '16px',
    y: '16px',
  },
}

const CardDoc = styled('div')<CardProps>`
  box-sizing: border-box;
  line-height: 0;
  ${({ inset, width }) => `
    box-shadow: inset ${insetMap[inset].x} ${insetMap[inset].y} 0 #c7dcbf, inset -${insetMap[inset].x} -${insetMap[inset].y} #c7dcbf;
    padding: ${insetMap[inset].y} ${insetMap[inset].x};
    width: ${width};
  `}
`

CardDoc.defaultProps = {
  inset: 'squish',
  width: 'auto'
}

export default CardDoc