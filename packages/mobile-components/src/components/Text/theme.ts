import { TextTheme } from '@avito/core'

export const textTheme: Partial<TextTheme> = {
  deriveProps: {
    preset: {
      title: {
        props: {
          mb: 36,
          size: 'xxl',
        },
      },
      'title-small': {
        props: {
          dense: true,
          bold: true,
          mb: 26,
          size: 'xl',
        },
      },
      'heading-large': {
        props: {
          dense: true,
          bold: true,
          mb: 22,
          size: 'l',
        },
      },
      'heading': {
        props: {
          dense: true,
          mb: 22,
          size: 'l',
        },
      },
      'heading-small': {
        props: {
          mb: 16,
          size: 'm',
        },
      },
    },
  },
}
