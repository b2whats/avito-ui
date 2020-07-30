import { AvatarTheme, dsl } from '@avito/core'

export const avatarTheme = dsl.theme<AvatarTheme>()
  .slot('Wrapper', {
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
  })
  .build()
