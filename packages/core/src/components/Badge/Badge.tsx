import React, { useRef, useState, useLayoutEffect } from 'react'
import { foldThemeParams, css, createClassName } from '../../styled-system'
import { uiComponent } from '../../theme'
import { formatCount, filterProps } from '../../utils'
import { BadgeProps } from './contract'
import { badgeTheme } from './theme'

const badgeClassName = createClassName<BadgeProps, typeof badgeTheme>({
  display: 'inline-block',
  mapPropsToStyle: true,
  cssRewrite: (textRules, { gapSize, gapColor }, { palette }, { height }) => `
    overflow: hidden;
    // the only vertical centering that works
    vertical-align: middle;
    line-height: ${height}px;

    ${ gapSize && gapColor ?
      `box-shadow: 0 0 0 ${gapSize}px ${palette[gapColor] || gapColor};` : ''}

    ${textRules}
  `,
})

export const Badge = uiComponent('Badge', badgeTheme)<BadgeProps>((props, { theme, tokens }) => {
  const count = formatCount(props.count as any)

  const { Badge } = foldThemeParams(props, theme)
  const badgeStyle = badgeClassName(props, tokens, Badge)

  if (!count) return null
  return (
    <div css={badgeStyle} {...filterProps(props)}>
      {props.animateChange === 'wheel'
        ? count.split('').map((digit, index) => <DigitAnimator key={count.length - index} value={digit} />)
        : count}
    </div>
  )
})


const digits = Array(10).fill('').map((_, index) => index)
const countSpinCss = css`
  display: inline-block;
  transform-origin: -2em center;
  transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  & > * {
    display: inline-block;
    transform-origin: -2em center;
    width: 0;
    line-height: 0;
  }
  ${digits.map(digit => `
    &[data-value="${digit}"] {
      transform: translateZ(0) rotate(${36 * digit}deg);
    }
    & > *[data-digit="${digit}"] {
      transform: translateZ(0) rotate(${-36 * digit}deg);
    }
  `)}
`
function DigitAnimator({ value }: { value: string }) {
  const firstRender = useRef(true)
  const [isAnimating, animate] = useState(false)
  useLayoutEffect(() => {
    !Number.isNaN(Number(value)) && !firstRender.current && animate(true)
    firstRender.current = false
  }, [value])

  return (
    <>
      <span css={countSpinCss} data-value={value} onTransitionEnd={() => animate(false)}>
        {isAnimating && digits.map(digit => <span data-digit={digit} key={digit}>{digit}</span>)}
      </span>
      { isAnimating
        ? <span style={{ visibility: 'hidden' }}>{value}</span>
        : value }
    </>
  )
}
