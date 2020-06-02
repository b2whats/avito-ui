import { useTheme } from '.'
import { mergeTheme } from './mergeTheme'
import { Theme } from './contract'
import { DeepPartial } from '../utils'
import { forwardRef, Ref, FunctionComponent, MutableRefObject, ReactNode } from 'react'
import { Tokens } from '@avito/tokens'
import { useRefHook } from '../hooks'

type RefContainer<Element> = [MutableRefObject<Element | null>, (e: Element) => void]

export function uiComponent<ThemeType extends object>(name: keyof Theme, theme: ThemeType) {
  return <Props, RefType = HTMLElement>(
    render: (props: Props, theme: { theme: ThemeType, tokens: Tokens }, ref: RefContainer<RefType>) => ReactNode
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
        useRefHook(ref)) as React.ReactElement
    })
    WrappedComponent.displayName = name
    return WrappedComponent as unknown as FunctionComponent<ExternalProps>
  }
}
