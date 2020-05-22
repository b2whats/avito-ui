import { useTheme } from '.'
import { mergeTheme } from './mergeTheme'
import { Theme } from './contract'
import { DeepPartial } from '../utils'
import { forwardRef, Ref, FunctionComponent, MutableRefObject } from 'react'
import { Tokens } from '@avito/tokens'
import { useRefHook } from '../hooks'

type AvitoProps<ThemeType> = {
  override?: DeepPartial<ThemeType>
}
type RefContainer<Element> = [MutableRefObject<Element | null>, (e: Element) => void]

export function uiComponent<ThemeType extends object>(name: keyof Theme, theme: ThemeType) {
  return <Props extends AvitoProps<ThemeType>, RefType = HTMLElement>(
    render: (props: Props, theme: { theme: ThemeType, tokens: Tokens }, ref: RefContainer<RefType>) => JSX.Element
  ) => {
    const WrappedComponent = forwardRef((props: Props, ref: Ref<RefType>) => {
      const globalTheme = useTheme()
      const componentTheme = mergeTheme(theme, globalTheme[name] as DeepPartial<ThemeType>, props.override)
      props = {
        ...(componentTheme as any).defaultProps,
        ...props,
      }
      return render(
        componentTheme.mapProps(props) as Props,
        { theme: componentTheme, tokens: globalTheme },
        useRefHook(ref))
    })
    WrappedComponent.displayName = name
    return WrappedComponent as unknown as FunctionComponent<Props>
  }
}
