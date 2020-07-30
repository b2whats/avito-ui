import { IconTheme, dsl } from '@avito/core'

export const iconTheme = dsl.theme<IconTheme>()
  .mapProps(({ onClick }) => ({
    ...onClick && { area: 6 },
  }))
  .defaultProps({
    size: 'm',
  })
  .slot('Icon', {
    size: {
      s: {
        style: {
          height: 16,
        },
      },
      m: {
        style: {
          height: 20,
        },
      },
      l: {
        style: {
          height: 24,
        },
      },
    },
    variant: {
      primary: {
        style: {
          color: 'blue500',
        },
      },
      secondary: {
        style: {
          color: 'gray52',
        },
      },
      error: {
        style: {
          color: 'red500',
        },
      },
      success: {
        style: {
          color: 'green500',
        },
      },
      warning: {
        style: {
          color: 'yellow500',
        },
      },
    },
  })
  .build()
