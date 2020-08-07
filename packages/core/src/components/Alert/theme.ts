import { CardTheme } from '../Card/theme'

export const alertTheme: CardTheme = {
  scheme: {
    Card: {
      props: {
        pt: 20,
        pb: 22,
        pl: 24,
        pr: 24,
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
    },
    Close: {
      props: {

      },
    },
    Image: {
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
    },
    Content: {
      props: {
        p: 0,
      },
    },
  },
}
