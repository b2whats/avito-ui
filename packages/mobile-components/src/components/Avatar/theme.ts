import { AvatarTheme, dsl } from '@avito/core'

export const avatarTheme = dsl.theme<AvatarTheme>()
  .slot('Wrapper', slot => [
    {
      style: {
        bg: 'gray4',
        overlayActive: 'black24',
      },
    },
    slot.if(props => props.type === 'shop', {
      style: {
        shape: undefined,
        borderRadius: 5,
      },
    }),
  ])
  .build()
