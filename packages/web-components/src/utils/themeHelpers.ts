import { Colors, StyleProperties, dsl} from '@avito/core'

export function dynamicOutline(borderColor: Colors, borderColorHover: Colors): StyleProperties {
  return { borderColor, borderColorHover }
}

export const controlOutlineVariants = dsl.styleMap({
  primary: dynamicOutline('gray20', 'gray28'),
  secondary: dynamicOutline('gray8', 'gray16'),
  success: dynamicOutline('green500', 'green600'),
  warning: dynamicOutline('orange500', 'orange600'),
  error: dynamicOutline('red500', 'red600'),
})
