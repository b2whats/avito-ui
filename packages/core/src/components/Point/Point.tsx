import React from 'react'
import { foldThemeParams, css, createClassName, keyframes } from '../../styled-system'
import { uiComponent } from '../../theme'
import { filterProps } from '../../utils'
import { PointProps } from './contract'
import { pointTheme } from './theme'

const pulseAnimation = keyframes`
  0%, 100% { transform: scale(1);    opacity: 0.1;    }
  4%       { transform: scale(3.10); opacity: 0.31; }
  8%       { transform: scale(2.25); opacity: 0.225;  }
  12%      { transform: scale(2.60); opacity: 0.26;   }
  16%      { transform: scale(2.45); opacity: 0.245; }
  20%      { transform: scale(2.52); opacity: 0.252;  }
  24%, 88% { transform: scale(2.5);    opacity: 0.25;   }
`

const pointClassName = createClassName<PointProps, typeof pointTheme>({
  display: 'inline-block',
  mapPropsToStyle: true,
  cssRewrite: (textRules, { gapSize, gapColor, show, pulse }, { palette }) => css`
    position: relative;

    ${ gapSize && gapColor ?
      `box-shadow: 0 0 0 ${gapSize}px ${palette[gapColor] || gapColor};` : ''}

    &::after${ pulse ? ', &::before' : '' } {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      background-color: inherit;
    }
    &::before {
      pointer-events: none;
      animation: ${pulseAnimation} 4s cubic-bezier(0.445,  0.050, 0.550, 0.950) infinite;
    }

    transform: scale(${show ? 1 : 0});
    transition: transform 300ms ${ show
      ? 'cubic-bezier(0.12, 0.4, 0.29, 1.46)'
      : 'cubic-bezier(0.71, -0.46, 0.88, 0.6)' };

    ${textRules}
  `,
})

export const Point = uiComponent('Point', pointTheme)<PointProps>((props, { theme, tokens }) => {
  const { Point } = foldThemeParams(props, theme)
  const pointStyle = pointClassName(props, tokens, Point)

  return <div css={pointStyle} {...filterProps(props)} />
})
