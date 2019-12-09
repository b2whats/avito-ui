import { ComponentTheme } from '../../theme/'
import { SchemeType } from '../../styled-system/'
import { InputProps } from './contract'
import { IconProps } from '../Icon/contract'
import { SpinnerProps } from '../Spinner/contract'

export type InputTheme = {
  deletePlaceholderOnFocus: boolean,
  scheme: {
    IconBefore: SchemeType<InputProps, IconProps>,
    Input: SchemeType<InputProps>,
    InputField: SchemeType<InputProps>,
    IconClear: SchemeType<InputProps, IconProps>,
    IconAfter: SchemeType<InputProps, IconProps>,
  },
}

export const inputTheme: ComponentTheme<InputTheme> = (_, override) => {
  const component = {
    deletePlaceholderOnFocus: true,
  }
  const scheme: InputTheme['scheme'] = {
    IconBefore: {
      props: {
        color: '#BCBCBC',
      },
      size: {
        s: {
          props: {
            size: 's',
            ml: 10,
            mr: 8,
          },
        },
        m: {
          props: {
            size: 's',
            ml: 10,
            mr: 8,
          },
        },
        l: {
          props: {
            ml: 10,
            mr: 8,
            size: 'm',
          },
        },
      },
    },
    IconAfter: {
      props: {
        color: '#BCBCBC',
      },
      size: {
        s: {
          props: {
            size: 's',
            mx: 10,
          },
        },
        m: {
          props: {
            size: 's',
            mx: 10,
          },
        },
        l: {
          props: {
            size: 'm',
            mx: 10,
          },
        },
      },
    },
    
    IconClear: {
      props: {
        color: '#BCBCBC',
        name: 'cross',
        area: 10,
      },
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
    InputField: {
      size: {
        s: {
          style: {
            px: 16,
          },
        },
        m: {
          style: {
            px: 16,
          },
        },
        l: {
          style: {
            px: 16,
          },
        },
      },
      iconBefore: {
        style: {
          pl: 'none',
        },
      },
      iconAfter: {
        style: {
          pr: 'none',
        },
      },
      clearable: {
        style: {
          pr: 'none',
        },
      },
    },
    Input: {
      style: {
        borderRadius: 5,
        focus: true,
        placeholderColor: '#858585',
      },
      size: {
        s: {
          style: {
            fontSize: 16,
            minHeight: 's',
          },
        },
        m: {
          style: {
            fontSize: 16,
            minHeight: 'm',
          },
        },
        l: {
          style: {
            fontSize: 16,
            minHeight: 'l',
          },
        },
      },
      variant: {
        primary: {
          style: {
            color: 'black',
            colorDisabled: 'gray70',
            backgroundColor: '#F5F5F5',
            backgroundColorDisabled: 'gray30',
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
  }
  

  return {
    ...component,
    scheme,
  }
}
