import React, { useRef, useState, useLayoutEffect } from 'react'
import { foldThemeParams, css, createClassName } from '../../styled-system'
import { uiComponent } from '../../theme'
import { formatCount, trueMap, gapStyle } from '../../utils'
import { AppearAnimation } from '../Animations'
import { makeOverlay } from '../Layout/makeOverlay'
import { BadgeProps } from './contract'
import { badgeTheme } from './theme'

const badgeClassName = createClassName<BadgeProps, typeof badgeTheme>({
  display: 'inline-block',
  mapPropsToStyle: true,
  cssRewrite: (textRules, props, { palette }, { height }) => `
    overflow: hidden;
    white-space: nowrap;
    // the only vertical centering that works
    vertical-align: middle;
    line-height: ${height}px;

    ${gapStyle(props, palette)}

    ${textRules}
  `,
})

export const Badge = uiComponent('Badge', badgeTheme)<BadgeProps>((props, { theme, tokens }) => {
  const count = formatCount(props.count as any, props)

  const { Badge } = foldThemeParams(props, theme)
  const badgeStyle = badgeClassName(props, tokens, Badge)

  return (
    <AppearAnimation css={badgeStyle} {...props} show={!!count} cacheChildrenOnExit>
      {props.animateChange === 'slide'
        ? count.split('').map((digit, index) => <DigitAnimator key={count.length - index} value={digit} />)
        : count}
    </AppearAnimation>
  )
}).static(Badge => ({
  Over: makeOverlay(Badge, {
    slot: 'badge',
    pickProps: trueMap(['size', 'count', 'animateChange', 'kind', 'showZero', 'gap', 'gapSize', 'gapColor']),
  }),
}))

const digits = Array(10).fill('').map((_, index) => index)
const countSpinCss = css`
  display: inline-block;
  transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  & > * {
    display: inline-block;
    width: 0;
  }
  ${digits.map(digit => `
    &[data-value="${digit}"] {
      transform: translate3d(0, ${2 * digit}em, 0);
    }
    & > *[data-digit="${digit}"] {
      transform: translate3d(0, ${-2 * digit}em, 0);
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
