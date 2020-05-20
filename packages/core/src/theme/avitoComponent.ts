import { useTheme } from '../theme'
import { mergeTheme } from './mergeTheme'
import { Theme } from './contract'
import { DeepPartial } from '../utils'
import { forwardRef, Ref, FunctionComponent } from 'react'
import { Tokens } from '@avito/tokens'

type AvitoProps<ThemeType> = {
  override?: DeepPartial<ThemeType>
}

export function avitoComponent<ThemeType extends object>(name: keyof Theme, theme: ThemeType) {
  return <Props extends AvitoProps<ThemeType>, RefType>(
    render: (props: Props, theme: { theme: ThemeType, tokens: Tokens }, ref: React.Ref<RefType>) => JSX.Element
  ) => {
    const WrappedComponent = forwardRef((props: Props, ref: Ref<RefType>) => {
      const globalTheme = useTheme()
      const componentTheme = mergeTheme(theme, globalTheme[name] as DeepPartial<ThemeType>, props.override)
      props = {
        ...(componentTheme as any).defaultProps,
        ...props,
      }
      return render(
        componentTheme.deriveProps(props) as Props,
        { theme: componentTheme, tokens: globalTheme },
        ref)
    })
    return WrappedComponent as unknown as FunctionComponent<Props>
  }
}
