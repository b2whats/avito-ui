import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react'
import { useTheme, mergeTheme } from '../../theme/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { Positioner } from '../Positioner/'
import { TooltipProps } from './contract'
import { tooltipTheme } from './theme'

const tooltipClassName = createClassName<Omit<TooltipProps, 'minWidth' | 'width' | 'maxWidth'>, typeof tooltipTheme, 'Tooltip'>(
  (themeStyle, props) => ({
    display: 'block',
    ...themeStyle,
    ...props,
  })
)

const arrowClassName = createClassName<TooltipProps, typeof tooltipTheme, 'Tooltip'>(
  (themeStyle) => ({
    display: 'inline-block',
    ...themeStyle,
  }),
  (textRules, _, __, schemeStyle) => `
    box-sizing: border-box;
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
    }

    [data-popper-placement^='top'] & {
      bottom: -${schemeStyle.width!/2}px;
    }
    [data-popper-placement^='bottom'] & {
      top: -${schemeStyle.width!/2}px;
    }
    [data-popper-placement^='left'] & {
      right: -${schemeStyle.width!/2}px;
    }
    [data-popper-placement^='right'] & {
      left: -${schemeStyle.width!/2}px;
    }

    ${textRules}
  `
)

export const Tooltip = ({ minWidth, width, maxWidth, content, override, ...props }: TooltipProps) => {
  const theme = useTheme()
  const componentTheme = mergeTheme(tooltipTheme, theme.Tooltip, override)

  props = {
    ...componentTheme.defaultProps,
    ...props,
  }

  const targetWidth = useMemo(() => ({
    minWidth, width, maxWidth,
  }), [minWidth, width, maxWidth])

  const { Tooltip, Arrow, CloseIcon } = foldThemeParams(props, componentTheme)
  const tooltipStyle = tooltipClassName(props, theme, Tooltip.style)
  const arrowStyle = arrowClassName(props, theme, Arrow.style)

  const target = (
    <div css={tooltipStyle}>
      {props.arrow && <div css={arrowStyle} data-popper-arrow />}
      {content}
    </div>
  )

  return (
    <Positioner {...props} target={target} targetWidth={targetWidth}>
      {props.children}
    </Positioner>
  )
}