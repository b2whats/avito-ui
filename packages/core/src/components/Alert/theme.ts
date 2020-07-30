import { dsl } from '../../theme'
import { CardTheme } from '../Card/theme'

export const alertTheme = dsl.theme<CardTheme>()
  .slot('Card', slot => [
    {
      props: {
        pt: 20,
        pb: 22,
        px: 24,
        borderColor: props => props.variant ? 'transparent' : 'gray12',
        borderWidth: 1,
      },
    },
    slot.switch('variant', {
      primary: {
        props: {
          bg: 'blue50',
        },
      },
      secondary: {
        props: {
          bg: 'gray4',
        },
      },
      success: {
        props: {
          bg: 'green100',
        },
      },
      warning: {
        props: {
          bg: 'orange50',
        },
      },
      error: {
        props: {
          bg: 'red100',
        },
      },
    }),
  ])
  .slot('Close', {
    props: {},
  })
  .slot('Image', slot => [
    {
      props: {
        order: 0,
        size: 28,
        mr: 18,
        valignSelf: 'top',
      },
    },
    slot.switch('variant', {
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
    }),
  ])
  .slot('Content', {
    props: {
      p: 0,
    },
  })
  .build()
