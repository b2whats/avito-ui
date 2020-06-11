import { forwardRef, Ref, MutableRefObject } from 'react'
import { Tokens } from '@avito/tokens'
import { useRefHook } from '../hooks'
import { DeepPartial } from '../utils'
import { useTheme } from '.'
import { Theme } from './contract'
import { mergeTheme } from './mergeTheme'

type RefContainer<Element> = [MutableRefObject<Element | null>, (e: Element) => void]

export function uiComponent<ThemeType extends object>(name: keyof Theme, theme: ThemeType) {
  return <Props, RefType = HTMLElement>(
    render: (props: Props, theme: { theme: ThemeType, tokens: Tokens }, ref: RefContainer<RefType>) => JSX.Element | null
  ) => {
    type ExternalProps = Props & {
      override?: DeepPartial<ThemeType>,
      ref?: Ref<RefType>,
    }
    const WrappedComponent = forwardRef(({ override, ...props }: ExternalProps, ref: Ref<RefType>) => {
      const globalTheme = useTheme()
      const componentTheme = mergeTheme(theme, globalTheme[name] as DeepPartial<ThemeType>, override)
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
    type Component =<T extends object>(props: ExternalProps & T) => JSX.Element
    return WrappedComponent as unknown as Component
  }
}
