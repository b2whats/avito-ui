import { ComponentTheme } from '../../theme/'
import { PresetType } from '../../utils/'
import { TextProps } from './contract'

// export type TextTheme = {
//   size_xxxxxl_fontSize: string,
//   size_xxxxl_fontSize: string,
//   size_xxxl_fontSize: string,
//   size_xxl_fontSize: string,
//   size_xl_fontSize: string,
//   size_l_fontSize: string,
//   size_m_fontSize: string,
//   size_s_fontSize: string,

//   lineHeight_l: number,
//   lineHeight_m: number,
//   lineHeight_s: number,
//   lineHeight_none: number,
  
//   fontFamily: string,
//   fontWeight: number,
//   color: string,

//   strike_offset: string,
//   strike_height: string,

//   underline_offset: string,
//   underline_height: string,

//   crop_top: number,
//   crop_bottom: number,

//   crop_s_top: number,
//   crop_s_bottom: number,
//   crop_m_top: number,
//   crop_m_bottom: number,
//   crop_l_top: number,
//   crop_l_bottom: number,

//   preset: {
//     Text: PresetType<TextProps, TextProps, 'kind' | 'size'>,
//   },
// }

const computedFontSize = (base: number, ratio: number) => ({
  size_xxxxxl_fontSize: `${Math.ceil(base * ratio ** 6)}px`,
  size_xxxxl_fontSize: `${Math.ceil(base * ratio ** 5)}px`,
  size_xxxl_fontSize: `${Math.ceil(base * ratio ** 4)}px`,
  size_xxl_fontSize: `${Math.ceil(base * ratio ** 3)}px`,
  size_xl_fontSize: `${Math.ceil(base * ratio ** 2)}px`,
  size_l_fontSize: `${Math.ceil(base * ratio)}px`,
  size_m_fontSize: `${base}px`,
  size_s_fontSize: `${Math.ceil(base / ratio)}px`,
})

const computedCrop = (crop: number, targetHeight: number) => {
  const value = (crop + (targetHeight - 1) * 16) / 32 

  return Math.round(value * 10) / 10
}

// export const textTheme: ComponentTheme<TextTheme> = ({ font, palette }, override) => {

//   const defaultTheme = {
//     ...computedFontSize(font.fontSize, font.sizeScale),
  
//     fontFamily: font.fontFamily,
//     fontWeight: font.fontWeight,
//     color: palette.gray90,

//     lineHeight_l: font.lineHeight + 0.1,
//     lineHeight_m: font.lineHeight,
//     lineHeight_s: font.lineHeight - 0.15,
//     lineHeight_none: 1,
  
//     strike_offset: '4px',
//     strike_height: '2px',

//     underline_offset: '0px',
//     underline_height: '1px',
  
//     crop_top: 3,
//     crop_bottom: 4,
//     ...override,
//   } as TextTheme

//   const preset: TextTheme['preset'] = {
//     Text: {
//       kind: {
//         h1: {
//           style: {
//             as: 'h1',
//             size: 'xxxxxl',
//             bold: true,
//             mb: 'xl',
//             lineHeight: 's',
//           },
//         },
//         h2: {
//           style: {
//             as: 'h2',
//             size: 'xxxxl',
//             bold: true,
//             mb: 'xl',
//             lineHeight: 's',
//           },
//         },
//         h3: {
//           style: {
//             as: 'h3',
//             size: 'xxl',
//             mb: 'm',
//             lineHeight: 's',
//           },
//         },
//         h4: {
//           style: {
//             as: 'h4',
//             size: 'xl',
//             mb: 's',
//             lineHeight: 's',
//           },
//         },
//         h5: {
//           style: {
//             as: 'h5',
//             size: 'l',
//             mb: 's',
//             lineHeight: 's',
//           },
//         },
//         h6: {
//           style: {
//             as: 'h6',
//             size: 'm',
//             mb: 's',
//             lineHeight: 's',
//           },
//         },
//         caption: {
//           style: {
//             as: 'div',
//             size: 'm',
//             mb: 's',
//             lineHeight: 'm',
//             color: 'gray50',
//           },
//         },
//         p: {
//           style: {
//             as: 'p',
//             size: 'm',
//             mb: 's',
//             lineHeight: 'm',
//             light: true,
//           },
//         },
//         li: {
//           style: {
//             as: 'li',
//             size: 'm',
//             lineHeight: 'm',
//             light: true,
//           },
//         },
//         label: {
//           style: {
//             as: 'label',
//             size: 'm',
//             lineHeight: 'm',
//             light: true,
//           },
//         },
//       },
//     },
//   }

//   const computedTheme = () => ({
//     crop_s_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_s),
//     crop_s_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_s),
//     crop_m_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_m),
//     crop_m_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_m),
//     crop_l_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_l),
//     crop_l_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_l),
//   })

//   return {
//     ...defaultTheme,
//     preset,
//     ...computedTheme(),
//   }
// }


export type TextTheme = {
  scheme: {
    Text: PresetType<TextProps, TextProps, 'kind' | 'size'>,
  },
  strike_offset: string,
  strike_height: string,

  underline_offset: string,
  underline_height: string,

  crop_top: number,
  crop_bottom: number,

  crop_s_top: number,
  crop_s_bottom: number,
  crop_m_top: number,
  crop_m_bottom: number,
  crop_l_top: number,
  crop_l_bottom: number,
}

export const textTheme: ComponentTheme<TextTheme> = ({ font, palette }, override) => {
  const scheme = {
    Text: {
      style: {
        fontSize: 'm',
        lineHeight: 'normal',
        fontWeight: 'normal',
        color: 'gray90',
      },
      size: {
        xs: {
          style: {
            fontSize: 'xs',
          },
        
        },
        s: {
          style: {
            fontSize: 's',
          },
        },
        m: {
          style: {
            fontSize: 'm',
          },
        },
        l: {
          style: {
            fontSize: 'l',
          },
        },
        xl: {
          style: {
            fontSize: 'xl',
          },
        },
        xxl: {
          style: {
            fontSize: 'xxl',
          },
        },
        xxxl: {
          style: {
            fontSize: 'xxxl',
          },
        },
      },
      variant: {
        primary: {
          style: {
            color: 'blue50',
          },
        },
        secondary: {
          style: {
            color: 'gray50',
          },
        },
        error: {
          style: {
            color: 'red50',
          },
        },
        success: {
          style: {
            color: 'green50',
          },
        },
        warning: {
          style: {
            color: 'yellow50',
          },
        },
      },
      kind: {
        h1: {
          style: {
            fontSize: 'xxxl',
          },
        },
        h2: {
          style: {
            fontSize: 'xxl',
            lineHeight: 'dense',
            fontWeight: 'bold',
          },
        },
        h3: {
          style: {
            fontSize: 'xl',
            lineHeight: 'dense',
            fontWeight: 'bold',
          },
        },
        h4: {
          style: {
            fontSize: 'xl',
            lineHeight: 'dense',
          },
        },
        h5: {
          style: {
            fontSize: 'l',
          },
        },
      },
    },
  }

  const defaultTheme = {
    ...computedFontSize(font.fontSize, font.sizeScale),
  
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    color: palette.gray90,

    lineHeight_l: font.lineHeight + 0.1,
    lineHeight_m: font.lineHeight,
    lineHeight_s: font.lineHeight - 0.15,
    lineHeight_none: 1,
  
    strike_offset: '4px',
    strike_height: '2px',

    underline_offset: '0px',
    underline_height: '1px',
  
    crop_top: 3,
    crop_bottom: 4,
    ...override,
  } as TextTheme

  const preset: TextTheme['preset'] = {
    Text: {
      kind: {
        h1: {
          style: {
            as: 'h1',
            size: 'xxxxxl',
            bold: true,
            mb: 'xl',
            lineHeight: 's',
          },
        },
        h2: {
          style: {
            as: 'h2',
            size: 'xxxxl',
            bold: true,
            mb: 'xl',
            lineHeight: 's',
          },
        },
        h3: {
          style: {
            as: 'h3',
            size: 'xxl',
            mb: 'm',
            lineHeight: 's',
          },
        },
        h4: {
          style: {
            as: 'h4',
            size: 'xl',
            mb: 's',
            lineHeight: 's',
          },
        },
        h5: {
          style: {
            as: 'h5',
            size: 'l',
            mb: 's',
            lineHeight: 's',
          },
        },
        h6: {
          style: {
            as: 'h6',
            size: 'm',
            mb: 's',
            lineHeight: 's',
          },
        },
        caption: {
          style: {
            as: 'div',
            size: 'm',
            mb: 's',
            lineHeight: 'm',
            color: 'gray50',
          },
        },
        p: {
          style: {
            as: 'p',
            size: 'm',
            mb: 's',
            lineHeight: 'm',
            light: true,
          },
        },
        li: {
          style: {
            as: 'li',
            size: 'm',
            lineHeight: 'm',
            light: true,
          },
        },
        label: {
          style: {
            as: 'label',
            size: 'm',
            lineHeight: 'm',
            light: true,
          },
        },
      },
    },
  }

  const computedTheme = () => ({
    crop_s_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_s),
    crop_s_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_s),
    crop_m_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_m),
    crop_m_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_m),
    crop_l_top: computedCrop(defaultTheme.crop_top, defaultTheme.lineHeight_l),
    crop_l_bottom: computedCrop(defaultTheme.crop_bottom, defaultTheme.lineHeight_l),
  })

  return {
    ...defaultTheme,
    preset,
    ...computedTheme(),
  }
}