import { AvatarTheme, DeepPartial } from '@avito/core'

export const avatarTheme: DeepPartial<AvatarTheme> = {
  scheme: {
    Wrapper: {
      style: {
        bg: 'gray4',
      },
      type: {
        shop: {
          style: {
            borderRadius: 5,
          },
        },
      },
    },
  },
}
