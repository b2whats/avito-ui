import React from 'react'
import { useTheme, omit, pick } from '../../utils'
import { createClassName } from '../../styled-system/'
import { GridProps } from './contract'

// &::before хак против выпадания отрицательных margins из родителя для правильного задания высоты
const gridWrapperClassName = createClassName<GridProps>(
  (_, props) => ({ display: 'block', ...omit(props, 'align', 'valign')}),
  (textRules, { debug }) => (`
    box-sizing: border-box;

    &::before {
      content: '';
      display: table;
    }

    ${debug ? `
      outline: 1px solid red;
    ` : ''}

    ${textRules}
  `),
)

const gridClassName = createClassName<GridProps>(
  (_, props) => ({ display: 'flex', ...pick(props, 'align', 'valign')}),
  (textRules, { space, spaceY, debug }, { space: spaceToken, palette }) => (`
    box-sizing: border-box;
    flex-wrap: wrap;

    ${space ? `
      margin-left: -${spaceToken[space] || space}px;
      & > * {
        border-left: ${spaceToken[space] || space}px solid transparent;
        background-clip: padding-box;
      }
    ` : ''}
    ${spaceY ? `
      margin-top: -${spaceToken[spaceY] || spaceY}px;
      & > * {
        margin-top: ${spaceToken[space] || space}px;
      }
    ` : ''}

    ${debug ? `
      & > * {
        background-color: ${palette.blue20};
        background-clip: padding-box;
      }

      & > :nth-child(2n) {
        background-color: ${palette.yellow20};
      }
    ` : ''}

    ${textRules}
  `),
)

const Grid = ({ children, ...props }: GridProps) => {
  const theme = useTheme()
  const gridWrapperStyle = gridWrapperClassName(props, theme)
  const gridStyle = gridClassName(props, theme)

  return (
    <div css={gridWrapperStyle}>
      <div css={gridStyle}>
        { children }
      </div>
    </div>
  )
}

export default Grid