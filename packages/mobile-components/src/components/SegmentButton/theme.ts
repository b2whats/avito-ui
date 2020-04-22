import { SchemeType } from '@avito/core'
import { SegmentButtonProps } from './contract'

export type SegmentButtonTheme = {
  scheme: {
    Group: SchemeType<SegmentButtonProps>,
    Button: SchemeType<SegmentButtonProps>,
    Slide: SchemeType<SegmentButtonProps>,
  },
}

export const segmentButtonTheme: SegmentButtonTheme = {
  scheme: {
    Group: {
      style: {
        bg: 'gray4',
      },
      size: {
        s: {
          style: {
            borderRadius: 5,
            height: 32,
            p: 4,
          },
        },
        m: {
          style: {
            borderRadius: 5,
            height: 44,
            p: 4,
          },
        },
        l: {
          style: {
            borderRadius: 5,
            height: 50,
            p: 4,
          },
        },
      },
    },
    Button: {
      style: {
        focus: true,
        borderRadius: 5,
        color: 'gray48',
        colorChecked: 'black',
        colorDisabled: 'gray24',
      },
    },
    Slide: {
      style: {
        borderRadius: 5,
        bg: 'white',
      },
    },
  },
}
