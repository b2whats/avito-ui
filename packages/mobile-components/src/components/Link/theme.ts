import { DeepPartial, LinkTheme } from '@avito/core'

export const linkTheme: DeepPartial<LinkTheme> = {
  scheme: {
    Link: {
      variant: {
        primary: {
          props: {
            color: 'blue500',
          },
        },
        secondary: {
          props: {
            color: 'gray52',
          },
        },
      },
    },
  },
}