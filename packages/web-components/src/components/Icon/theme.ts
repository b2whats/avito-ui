import { DeepPartial, IconTheme } from '@avito/core'

export const iconTheme: DeepPartial<IconTheme> = {
  scheme: {
    Icon: {
      size: {
        l: {
          style: {
            height: 28,
          },
        },
      },
    },
  },
  // @ts-ignore - временно, пока не будет найдено решения передачи выбранной темы в примеры
  platform: 'web',
}