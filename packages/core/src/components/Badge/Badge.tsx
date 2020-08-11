import React, { useRef, useState, useEffect } from 'react'
import { foldThemeParams, css } from '../../styled-system'
import { uiComponent } from '../../theme'
import { formatCount } from '../../utils'
import { Box } from '../Layout'
import { BadgeProps } from './contract'
import { badgeTheme } from './theme'

const hideOverflow = css`overflow: hidden;`

export const Badge = uiComponent('Badge', badgeTheme)<
  BadgeProps
>(({ gapSize, gapColor, animateChange, ...props }, { tokens, theme }) => {
  const count = formatCount(props.count as any)

  const prevCount = useRef('')
  const [isAnimating, animate] = useState(false)
  useEffect(() => {
    // only animate changes with same digit count
    animate(count.length > 0 && prevCount.current.length === count.length)
    prevCount.current = count
  }, [count])

  if (!count) return null


  const shadow = gapSize && gapColor
    ? `0 0 0 ${gapSize}px ${tokens.palette[gapColor] || gapColor};` : false
  const { Badge } = foldThemeParams(props, theme)

  return (
    <Box css={hideOverflow} {...Badge} {...props} shadow={shadow} onTransitionEnd={() => animate(false)}>
      {animateChange === 'wheel'
        ? count.split('').map((digit, index) => (
          <DigitAnimator key={`${count.length}:${index}`} isAnimating={isAnimating} value={digit} />
        ))
        : count}
    </Box>
  )
})


const digits = Array(10).fill('').map((_, index) => index)
const countSpinCss = css`
  display: inline-flex;
  flex-direction: column;
  transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: -2em center;
  & > * {
    transform-origin: -2em center;
  }
  & > *:not(:first-child) {
    position: absolute;
  }
  ${digits.map(digit => `
    &[data-value="${digit}"] {
      transform: rotate(${36 * digit}deg);
    }
    & > *[data-digit="${digit}"] {
      transform: rotate(${-36 * digit}deg);
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
