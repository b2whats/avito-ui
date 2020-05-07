import { TextTheme } from '@avito/core'

export const textTheme: TextTheme = {
  scheme: {
    Text: {
      preset: {
        title: {
          props: {
            mb: 36,
          },
        },
        'title-small': {
          props: {
            dense: true,
            bold: true,
            mb: 26,
          },
        },
        'heading-large': {
          props: {
            dense: true,
            bold: true,
            mb: 22,
          },
        },
        'heading': {
          props: {
            dense: true,
            mb: 22,
          },
        },
        'heading-small': {
          props: {
            mb: 16,
          },
        },
      },
    },
  },
}
