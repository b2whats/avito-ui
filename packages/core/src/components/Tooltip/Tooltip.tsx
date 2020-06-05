import React from 'react'
import { uiComponent } from '../../theme/'
import { filterProps } from '../../utils/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Positioner, PositionerProps } from '../Positioner/'
import { TooltipProps } from './contract'
import { tooltipTheme } from './theme'

const tooltipClassName = createClassName<Omit<TooltipProps, 'minWidth' | 'width' | 'maxWidth'>, typeof tooltipTheme, 'Tooltip'>(
  (themeStyle, props) => ({
    display: 'block',
    ...themeStyle,
    ...props,
    minWidth: undefined,
    width: undefined,
    maxWidth: undefined,
  })
)

const arrowClassName = createClassName<TooltipProps, typeof tooltipTheme, 'Arrow'>(
  (themeStyle) => ({
    display: 'inline-block',
    ...themeStyle,
  }),
  (textRules, _, __, themeStyle) => `
    visibility: hidden;
    background-color: inherit;

    &::before {
      content: '';
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      transform: rotate(45deg);
      display: inline-block;
      vertical-align: top;
      visibility: visible;
      background-color: inherit;
      border-radius: inherit;
    }

    [data-popper-placement^='top'] & {
      bottom: -${themeStyle.offset}px;
    }
    [data-popper-placement^='bottom'] & {
      top: -${themeStyle.offset}px;
    }
    [data-popper-placement^='left'] & {
      right: -${themeStyle.offset}px;
    }
    [data-popper-placement^='right'] & {
      left: -${themeStyle.offset}px;
    }

    ${textRules}
  `
)

export const Tooltip = uiComponent('Tooltip', tooltipTheme)(({ content, ...props }: TooltipProps, { theme, tokens }) => {
  const { Tooltip, Arrow, Close } = foldThemeParams(props, theme)
  const tooltipStyle = tooltipClassName(props, tokens, Tooltip.style)
  const arrowStyle = arrowClassName(props, tokens, Arrow.style)

  const target: PositionerProps['target'] = ({ close }) => (
    <div css={tooltipStyle} {...filterProps(props)}>
      {props.arrow && <div css={arrowStyle} data-popper-arrow />}
      {props.closable && Close.component && <Close.component {...Close.props} onClick={close} />}
      {content}
    </div>
  )

  return (
    <Positioner {...props} target={target}>
      {props.children}
    </Positioner>
  )
})