import { forwardRef, Ref, MutableRefObject, memo } from 'react'
import { Tokens } from '@avito/tokens'
import { useRefHook } from '../hooks'
import { DeepPartial, profiler, withMarker } from '../utils/'
import { useTheme } from '.'
import { Theme } from './contract'
import { mergeTheme } from './mergeTheme'

type RefContainer<Element> = [MutableRefObject<Element | null>, (e: Element) => void]

export interface UiComponentProps<ThemeType, RefType> {
  override?: DeepPartial<ThemeType>
  ref?: Ref<RefType>
  marker?: string
}

type Options = {
  memo?: boolean
}

type InternalProps<ThemeType, Tokens> = {
  theme: ThemeType
  tokens: Tokens
  testId: ReturnType<typeof withMarker>[0]
  marker: ReturnType<typeof withMarker>[1]
}

export function uiComponent<ThemeType extends object>(name: keyof Theme, theme: ThemeType, options: Options = {}) {
  options = { memo: true, ...options }
  return <Props, RefType = HTMLElement>(
    render: (
      props: Props & { marker?: string },
      internal: InternalProps<ThemeType, Tokens>,
      ref: RefContainer<RefType>,
    ) => JSX.Element | null
  ) => {
    type ExternalProps = Props & UiComponentProps<ThemeType, RefType>
    render = profiler.withMeasure('render')(render)
    const WrappedComponent = forwardRef(profiler.withMeasure(name)((
      { override, ...props }: ExternalProps,
      ref: Ref<RefType>
    ) => {
      profiler.start('uiComponent')
      const globalTheme = useTheme()
      const componentTheme = mergeTheme(theme, globalTheme[name] as DeepPartial<ThemeType>, override)
      const mappedProps = componentTheme.mapProps({
        ...(componentTheme as any).defaultProps,
        ...props,
      }) as Props
      const refArg = useRefHook(ref)
      const [testId, marker] = withMarker(props.marker)
      profiler.end('uiComponent')

      return render(mappedProps, { theme: componentTheme, tokens: globalTheme, testId, marker }, refArg)
    }))
    WrappedComponent.displayName = name
    type Component = <T extends object>(props: ExternalProps & (T extends unknown ? {} : T)) => JSX.Element
    return (options.memo ? memo(WrappedComponent) : WrappedComponent) as unknown as Component
  }
}
