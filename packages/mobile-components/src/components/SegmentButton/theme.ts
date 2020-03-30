import { createComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { SegmentButtonProps } from './contract'

export type SegmentButtonTheme = {
  scheme: {
    Group: SchemeType<SegmentButtonProps>,
    Button: SchemeType<SegmentButtonProps>,
    Slide: SchemeType<SegmentButtonProps>,
  },
}

const segmentButtonTheme: SegmentButtonTheme = {
  scheme: {
    Group: {
      style: {
        backgroundColor: 'gray4',
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
        backgroundColor: 'white',
      },
    },
  },
}

export const createSegmentButtonTheme = createComponentTheme('SegmentButton', segmentButtonTheme) 