import deepmerge from 'deepmerge'
import memoize from 'fast-memoize'
// import { getStyles } from '../packages/mobile-components/src/styled-system/getThemeStyle'
// import tokens from '../packages/tokens/src/mav'
const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

const params5 = {
  fontFamily: 'Ariial',
  fontSize: 's',
  lineHeight: 1.2,
  crop: true,
  m: 12,
}

const params10 = {
  fontFamily: 'Ariial',
  fontSize: 's',
  lineHeight: 1.2,
  crop: true,
  m: 12,
  pb: 10,
  color: 'red50',
  borderColor: 'red50',
  backgroundColorHover: 'red50',
  borderColorFocus: 'red50',
}

const params20 = {
  fontFamily: 'Ariial',
  fontSize: 's',
  lineHeight: 1.2,
  bold: true,
  uppercase: true,
  truncate: true,
  crop: true,
  m: 12,
  mx: 12,
  pt: 10,
  p: 10,
  py: 10,
  pb: 10,
  color: 'red50',
  borderColor: 'red50',
  backgroundColorHover: 'red50',
  backgroundColorActive: 'red50',
  colorVisited: 'red50',
  borderColorChecked: 'red50',
  borderColorFocus: 'red50',
}

const buttonTheme = {
  scheme: {
    Spinner: {
      size: {
        s: {
          props: {
            size: 's',
          },
        },
        m: {
          props: {
            size: 'm',
          },
        },
        l: {
          props: {
            size: 'l',
          },
        },
      },
    },
    IconBefore: {
      size: {
        s: {
          props: {
            size: 's',
          },
        },
        m: {
          props: {
            size: 's',
          },
        },
        l: {
          props: {
            size: 'm',
          },
        },
      },
    },
    IconAfter: {
      size: {
        s: {
          props: {
            size: 's',
          },
        },
        m: {
          props: {
            size: 's',
          },
        },
        l: {
          props: {
            size: 'm',
          },
        },
      },
    },
    Text: {
      props: {
        size: 's',
      },
      iconBefore: {
        props: {
          ml: 6,
        },
      },
      iconAfter: {
        props: {
          mr: 6,
        },
      },
      kind: {
        flat: {
          props: {
            uppercase: true,
          },
        },
      },
    },
    Button: {
      style: {
        borderRadius: 3,
        px: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        focus: true,
      },
      size: {
        s: {
          style: {
            py: 4,
            minHeight: 's',
          },
        },
        m: {
          style: {
            py: 6,
            minHeight: 'm',
          },
        },
        l: {
          style: {
            py: 8,
            minHeight: 'l',
          },
        },
      },
      iconBefore: {
        children: {
          style: {
            pl: 12,
          },
        },
      },
      iconAfter: {
        children: {
          style: {
            pr: 12,
          },
        },
      },
      preset: {
        primary: {
          style: {
            color: 'white',
            colorDisabled: 'blue50',
            backgroundColor: 'blue500',
            backgroundColorActive: 'blue800',
            backgroundColorDisabled: 'blue300',
          },
        },
        accent: {
          style: {
            color: 'white',
            colorDisabled: 'gray48',
            backgroundColor: 'green500',
            backgroundColorActive: 'green800',
            backgroundColorDisabled: 'gray4',
          },
        },
        secondary: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray48',
            backgroundColor: 'blue50',
            backgroundColorActive: 'blue100',
            backgroundColorDisabled: 'gray4',
          },
        },
        default: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray8',
            backgroundColorDisabled: 'gray4',
          },
          checked: {
            style: {
              color: 'white',
              colorDisabled: 'blue50',
              backgroundColor: 'blue500',
              backgroundColorActive: 'blue800',
              backgroundColorDisabled: 'blue300',
            },
          },
        },
        defaultOnSurface: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            backgroundColor: 'gray8',
            backgroundColorActive: 'gray12',
            backgroundColorDisabled: 'gray8',
          },
        },
        defaultDark: {
          style: {
            color: 'white',
            colorDisabled: 'gray40',
            backgroundColor: 'gray68',
            backgroundColorActive: 'gray76',
            backgroundColorDisabled: 'gray76',
          },
        },
        outline: {
          style: {
            color: 'black',
            colorDisabled: 'gray48',
            backgroundColor: 'white',
            borderColor: 'gray8',
            backgroundColorActive: 'gray8',
            //backgroundColorDisabled: 'gray4',
          },
        },
        pay: {
          style: {
            color: 'white',
            colorDisabled: 'gray40',
            backgroundColor: 'black',
            backgroundColorActive: 'gray76',
            backgroundColorDisabled: 'gray68',
          },
        },
        appInstall: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray48',
            backgroundColor: 'gray4',
            backgroundColorActive: 'gray8',
            backgroundColorDisabled: 'gray4',
          },
        },
        linkIncreased: {
          style: {
            color: 'blue500',
            colorDisabled: 'gray40',
            backgroundColor: 'white',
            backgroundColorActive: 'gray4',
            backgroundColorDisabled: 'white',
          },
        },
      },
      kind: {
        default: {
          style: {
            backgroundColor: 'blue50',
            backgroundColorHover: 'blue60',
            backgroundColorActive: 'blue70',
            backgroundColorChecked: 'blue70',
            backgroundColorDisabled: 'blue30',
            color: 'white',
            colorDisabled: 'gray30',
          },
          variant: {
            primary: {
              style: {
                backgroundColor: 'blue50',
                backgroundColorHover: 'blue60',
                backgroundColorActive: 'blue70',
                backgroundColorChecked: 'blue70',
                backgroundColorDisabled: 'blue30',
              },
            },
            secondary: {
              style: {
                backgroundColor: 'gray50',
                backgroundColorHover: 'gray60',
                backgroundColorActive: 'gray70',
                backgroundColorChecked: 'gray70',
                backgroundColorDisabled: 'gray30',
                color: 'black',
                colorDisabled: 'gray70',
              },
            },
            success: {
              style: {
                backgroundColor: 'green50',
                backgroundColorHover: 'green60',
                backgroundColorActive: 'green70',
                backgroundColorChecked: 'green70',
                backgroundColorDisabled: 'green30',
              },
            },
            warning: {
              style: {
                backgroundColor: 'yellow50',
                backgroundColorHover: 'yellow60',
                backgroundColorActive: 'yellow70',
                backgroundColorChecked: 'yellow70',
                backgroundColorDisabled: 'yellow30',
                color: 'black',
                colorDisabled: 'gray70',
              },
            },
            error: {
              style: {
                backgroundColor: 'red50',
                backgroundColorHover: 'red60',
                backgroundColorActive: 'red70',
                backgroundColorChecked: 'red70',
                backgroundColorDisabled: 'red30',
              },
            },
          },
        },
        outline: {
          style: {
            borderColor: 'gray32',
            borderColorHover: 'gray40',
            borderColorActive: 'gra52',
            borderColorDisabled: 'gray24',
            backgroundColor: 'gray32',
            backgroundColorHover: 'gray40',
            backgroundColorActive: 'gray52',
            backgroundColorChecked: 'gray32',
          },
          variant: {
            primary: {
              style: {
                color: 'blue500',
                colorHover: 'blue600',
                colorActive: 'blue700',
                colorDisabled: 'blue300',
              },
              checked: {
                style: {
                  color: 'red500',
                  colorHover: 'red600',
                  colorActive: 'red700',
                  colorDisabled: 'red300',
                  backgroundColor: 'red300',
                },
              },
            },
            secondary: {
              style: {
                color: 'gray50',
                colorHover: 'gray60',
                colorActive: 'gray70',
                colorDisabled: 'gray30',
              },
            },
            success: {
              style: {
                color: 'green50',
                colorHover: 'green60',
                colorActive: 'green70',
                colorDisabled: 'green30',
              },
            },
            warning: {
              style: {
                color: 'yellow50',
                colorHover: 'yellow60',
                colorActive: 'yellow70',
                colorDisabled: 'yellow30',
              },
            },
            error: {
              style: {
                color: 'red50',
                colorHover: 'red60',
                colorActive: 'red70',
                colorDisabled: 'red30',
              },
            },
          },
        },
        flat: {
          style: {
            borderColor: 'gray30',
            borderColorHover: 'gray40',
            borderColorActive: 'gra50',
            borderColorDisabled: 'gray20',
            backgroundColor: 'gray30',
            backgroundColorHover: 'gray40',
            backgroundColorActive: 'gray50',
            backgroundColorChecked: 'gray30',
          },
          variant: {
            primary: {
              style: {
                color: 'blue50',
                colorHover: 'blue60',
                colorActive: 'blue70',
                colorDisabled: 'blue30',
              },
            },
            secondary: {
              style: {
                color: 'gray50',
                colorHover: 'gray60',
                colorActive: 'gray70',
                colorDisabled: 'gray30',
              },
            },
            success: {
              style: {
                color: 'green50',
                colorHover: 'green60',
                colorActive: 'green70',
                colorDisabled: 'green30',
              },
            },
            warning: {
              style: {
                color: 'yellow50',
                colorHover: 'yellow60',
                colorActive: 'yellow70',
                colorDisabled: 'yellow30',
              },
            },
            error: {
              style: {
                color: 'red50',
                colorHover: 'red60',
                colorActive: 'red70',
                colorDisabled: 'red30',
              },
            },
          },
        },
      },
    },
  },
}



const cache = new WeakMap()

const memo = memoize((componentTheme, globalComponentTheme, override) => deepmerge.all([componentTheme, globalComponentTheme, override]))

const createComponentTheme = (componentTheme, globalComponentTheme, override) => {
  let cursor = cache

  if (!cursor.has(componentTheme)) {
    cursor.set(componentTheme, new WeakMap())
  }
  cursor = cursor.get(componentTheme)
  
  if (!cursor.has(globalComponentTheme)) {
    cursor.set(globalComponentTheme, new WeakMap())
  }
  cursor = cursor.get(globalComponentTheme)
  
  if (!cursor.has(override)) {
    cursor.set(override, deepmerge.all([componentTheme, globalComponentTheme, override]))
  }
  
  var a =  cursor.get(override)
  console.log(a)
  return a
}

suite
  .add('weak', function() {
    createComponentTheme(buttonTheme, buttonTheme, buttonTheme)
  })
  .add('memo', function() {
    memo(buttonTheme, buttonTheme, buttonTheme)
  })
  // .add('getStyles - 10', function() {
  //   getStyles(params10, tokens)
  // })
  // .add('getStyles - 20', function() {
  //   getStyles(params20, tokens)
  // })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .run({ 'async': true })