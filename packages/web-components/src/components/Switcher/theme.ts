import { SwitcherTheme, dsl, Box, Spinner } from '@avito/core'

export const switcherTheme = dsl.theme<SwitcherTheme>()
  .defaultProps({
    shape: 'square',
    positionLoading: true,
  })
  .slot('Switch', slot => [
    {
      style: {
        borderWidth: 0,
        p: 2,
        borderRadius: 2,
      },
    },
    slot.if(props => !props.checked, {
      style: {
        bg: 'gray28',
        bgDisabled: 'gray8',
        bgHover: 'gray40',
      },
    }),
    slot.if('checked', {
      style: {
        bgDisabled: 'gray20',
      },
    }),
    slot.switch('size', dsl.styleMap({
      s: {
        height: 20,
        width: 40,
      },
      m: {
        height: 24,
        width: 48,
      },
      l: {
        height: 28,
        width: 56,
      },
    })),
  ])
  .slot('Icon', slot => [
    {
      component: Box,
      props: {
        bg: 'white',
        height: 1,
        width: 0.39,
        borderRadius: 2,
        px: 2,
      },
    },
    slot.switch('size', dsl.propMap('width', {
      s: 14,
      m: 18,
      l: 22,
    })),
    slot.switch('variant', dsl.propMap('color', {
      primary: 'blue500',
      secondary: 'blue500',
      success: 'green500',
      warning: 'orange500',
      error: 'red500',
    })),
    slot.if('loading', {
      component: Spinner,
      props: {
        size: 'auto',
      },
    }),
  ])
  .build()
