import { dsl } from '../../theme'
import { CardTheme } from '../Card/theme'

export const alertTheme = dsl.theme<CardTheme>()
  .slot('Card', {
    props: {
      pt: 20,
      pb: 22,
      px: 24,
      borderColor: 'gray12',
      borderWidth: 1,
    },
    variant: {
      primary: {
        props: {
          borderColor: 'transparent',
          bg: 'blue50',
        },
      },
      secondary: {
        props: {
          borderColor: 'transparent',
          bg: 'gray4',
        },
      },
      success: {
        props: {
          borderColor: 'transparent',
          bg: 'green100',
        },
      },
      warning: {
        props: {
          borderColor: 'transparent',
          bg: 'orange50',
        },
      },
      error: {
        props: {
          borderColor: 'transparent',
          bg: 'red100',
        },
      },
    },
  })
  .slot('Close', {
    props: {

    },
  })
  .slot('Image', {
    props: {
      order: 0,
      size: 28,
      mr: 18,
      valignSelf: 'top',
    },
    variant: {
      primary: {
        props: {
          color: 'blue600',
        },
      },
      secondary: {
        props: {
          color: 'gray64',
        },
      },
      success: {
        props: {
          color: 'green600',
        },
      },
      warning: {
        props: {
          color: 'orange700',
        },
      },
      error: {
        props: {
          color: 'red500',
        },
      },
    },
  })
  .slot('Content', {
    props: {
      p: 0,
    },
  })
  .build()
