import React from 'react'
import { omit, pick } from '@avito/core/utils/'
import { useTheme } from '@avito/core/theme/'
import { createClassName } from '@avito/core/styled-system/'
import { GridProps } from './contract'

// &::before хак против выпадания отрицательных margins из родителя для правильного задания высоты
const gridWrapperClassName = createClassName<GridProps>(
  (_, props) => ({
    display: 'block',
    width: 1,
    ...omit(props, 'align', 'valign'),
  }),
  (textRules, { debug }) => (`
    &::before {
      content: '';
      display: table;
    }

    ${debug ? `
      outline: 1px solid red;
    ` : ''}

    ${textRules}
  `)
)

const gridClassName = createClassName<GridProps>(
  (_, props) => ({
    display: 'flex',
    ...pick(props, 'align', 'valign'),
  }),
  (textRules, { spacing, spacingY, debug }, { space, palette }) => (`
    flex-wrap: wrap;

    ${spacing ? `
      margin-left: -${space[spacing] || spacing}px;
      & > * {
        border-left: ${space[spacing] || spacing}px solid transparent;
        background-clip: padding-box;
      }
    ` : ''}
    ${spacingY ? `
      margin-top: -${space[spacingY] || spacingY}px;
      & > * {
        margin-top: ${space[spacingY] || spacingY}px;
      }
    ` : ''}

    ${debug ? `
      & > * {
        background-color: ${palette.blue200};
        background-clip: padding-box;
      }

      & > :nth-child(2n) {
        background-color: ${palette.yellow200};
      }
    ` : ''}

    ${textRules}
  `)
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