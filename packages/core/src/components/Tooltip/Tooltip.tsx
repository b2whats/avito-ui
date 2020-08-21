import React from 'react'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { uiComponent } from '../../theme/'
import { filterProps } from '../../utils/'
import { Positioner, PositionerProps } from '../Positioner/'
import { TooltipProps } from './contract'
import { tooltipTheme } from './theme'

const tooltipClassName = createClassName<TooltipProps, typeof tooltipTheme>({
  mapPropsToStyle: ({ minWidth, width, maxWidth, zIndex, ...props }) => props,
  display: 'block',
})

const arrowClassName = createClassName<TooltipProps, typeof tooltipTheme>({
  display: 'inline-block',
  cssRewrite: (textRules, { arrowOffset }) => `
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
      bottom: -${arrowOffset}px;
    }
    [data-popper-placement^='bottom'] & {
      top: -${arrowOffset}px;
    }
    [data-popper-placement^='left'] & {
      right: -${arrowOffset}px;
    }
    [data-popper-placement^='right'] & {
      left: -${arrowOffset}px;
    }

    ${textRules}
  `,
})

export const Tooltip = uiComponent('Tooltip', tooltipTheme)<TooltipProps>((
  { content, ...props },
  { theme, tokens, marker }
) => {
  if (!content) return props.children

  const { Tooltip, Arrow, Close } = foldThemeParams(props, theme)
  const tooltipStyle = tooltipClassName(props, tokens, Tooltip)
  const arrowStyle = arrowClassName(props, tokens, Arrow)

  const target: PositionerProps['target'] = ({ close }) => (
    <div css={tooltipStyle} {...filterProps(props)}>
      {props.arrow && <div css={arrowStyle} data-popper-arrow />}
      {props.closable && Close.component && <Close.component {...Close} onClick={close} marker={marker('close')} />}
      {content}
    </div>
  )

  return (
    <Positioner {...props} target={target}>
      {props.children}
    </Positioner>
  )
})
