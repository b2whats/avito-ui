import React from 'react'
import { DeepPartial, SwitcherTheme, dsl, Box, Spinner } from '@avito/core'

export const switcherTheme: DeepPartial<SwitcherTheme> = {
  positionLoading: true,
  defaultProps: {
    shape: 'square',
  },
  scheme: {
    Switch: {
      style: {
        bg: 'gray28',
        bgDisabled: 'gray8',
        bgHover: 'gray40',
        borderWidth: 0,
        p: 2,
        borderRadius: 2,
      },
      checked: {
        style: {
          bgDisabled: 'gray20',
        },
      },
      size: dsl.styleMap({
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
      }),
    },
    Icon: {
      component: Box,
      props: {
        bg: 'white',
        height: 1,
        width: 0.39,
        borderRadius: 2,
        px: 2,
      },
      size: dsl.propMap('width', {
        s: 14,
        m: 18,
        l: 22,
      }),
      variant: dsl.propMap('color', {
        primary: 'blue500',
        secondary: 'blue500',
        success: 'green500',
        warning: 'orange500',
        error: 'red500',
      }),
      loading: {
        component: Spinner,
        props: {
          size: 'auto',
        },
      },
    },
  },
}
