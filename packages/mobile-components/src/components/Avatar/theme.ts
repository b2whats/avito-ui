import { AvatarTheme, DeepPartial } from '@avito/core'

export const avatarTheme: DeepPartial<AvatarTheme> = {
  scheme: {
    Wrapper: {
      style: {
        bg: 'gray4',
        overlayActive: 'black24',
      },
      type: {
        shop: {
          style: {
            shape: undefined,
            borderRadius: 5,
          },
        },
      },
    },
  },
}
