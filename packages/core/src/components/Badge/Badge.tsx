import React, { useRef, useState, useEffect } from 'react'
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

export const Badge = uiComponent('Badge', badgeTheme)<
  BadgeProps,
  HTMLDivElement
>(({ animateChange, ...props }, { theme, tokens, ref }) => {
  const count = formatCount(props.count as any)

  const prevCount = useRef('')
  const [isAnimating, animate] = useState(false)
  useEffect(() => {
    // only animate changes with same digit count
    animate(count.length > 0 && prevCount.current.length === count.length)
    prevCount.current = count
  }, [count])

  const { Badge } = foldThemeParams(props, theme)
  const badgeStyle = badgeClassName(props, tokens, Badge)

  if (!count) return null

  return (
    <div css={badgeStyle} {...filterProps(props)} ref={ref} onTransitionEnd={() => animate(false)}>
      {animateChange === 'wheel'
        ? count.split('').map((digit, index) => (
          <DigitAnimator key={count.length - index} isAnimating={isAnimating} value={digit} />
        ))
        : count}
    </div>
  )
})


const digits = Array(10).fill('').map((_, index) => index)
const countSpinCss = css`
  display: inline-block;
  flex-direction: column;
  transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: -2em center;
  & > * {
    display: inline-block;
    transform-origin: -2em center;
  }
  & > *:not(:first-child) {
    position: absolute;
    left: 0;
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
function DigitAnimator({ value, isAnimating }: any) {
  // do not attempt animating non-numeric symbols
  isAnimating = isAnimating && !Number.isNaN(Number(value))
  return (
    <span css={countSpinCss} data-value={value}>
      <span style={isAnimating ? { visibility: 'hidden' } : undefined} data-digit={value}>{value}</span>
      {isAnimating && digits.map(digit => <span data-digit={digit} key={digit}>{digit}</span>)}
    </span>
  )
}
