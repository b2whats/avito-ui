import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useTheme } from '../../utils/'
import { foldThemeParams, createClassName } from '../../styled-system/'
import { SpinnerProps } from './contract'
import { SpinnerTheme } from './theme'

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const spinnerClassName = createClassName<SpinnerProps, SpinnerTheme>(
  (themeStyle, props) => ({
    display: 'inline-block',
    ...themeStyle,
    ...props,
    width: themeStyle.width || props.size as number,
    height: themeStyle.width || props.size,
    borderStyle: 'solid',
    borderColor: 'currentColor',
    borderWidth: props.thickness,
    borderRadius: 'rounded',
  }),
  (textRules, { speed }) => css`
    box-sizing: border-box;
    animation: ${spin} ${speed}s linear infinite;
    ${textRules}

    border-bottom-color: transparent;
  `,
)

const Spinner = (props: SpinnerProps) => {
  const theme = useTheme()

  props = {
    size: 'm',
    speed: 0.5,
    thickness: 2,
    ...props,
  }

  const { Spinner } = foldThemeParams<SpinnerTheme>(theme.spinner, props)
  const spinnerStyle = spinnerClassName(props, theme, Spinner.style)

  return (
    <div css={spinnerStyle} data-component='spinner' />
  )
}

export default Spinner