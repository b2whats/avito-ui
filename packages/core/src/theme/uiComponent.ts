import { forwardRef, Ref, MutableRefObject, memo } from 'react'
import { Tokens } from '@avito/tokens'
import { useRefHook } from '../hooks'
import { DeepPartial, profiler, withMarker } from '../utils/'
import { useTheme } from '.'
import { Theme } from './contract'
import { mergeTheme } from './mergeTheme'

export interface UiComponentProps<ThemeType, RefType> {
  override?: DeepPartial<ThemeType>
  ref?: Ref<RefType> | MutableRefObject<RefType> | MutableRefObject<RefType | null>
  marker?: string
}

type Options = {
  memo?: boolean
}

type InternalProps<ThemeType, Tokens, Element> = {
  theme: ThemeType
  tokens: Tokens
  testId: ReturnType<typeof withMarker>[0]
  marker: ReturnType<typeof withMarker>[1]
  ref: MutableRefObject<Element | null>
  setRef: (e: Element) => void
}

export function uiComponent<ThemeType extends object>(name: keyof Theme, theme: ThemeType, options: Options = {}) {
  options = { memo: true, ...options }
  return <Props, RefType = HTMLElement>(
    render: (
      props: Props & { marker?: string },
      internal: InternalProps<ThemeType, Tokens, RefType>,
    ) => JSX.Element | null
  ) => {
    type ExternalProps = Props & UiComponentProps<ThemeType, RefType>
    render = profiler.withMeasure('render')(render)
    const WrappedComponent = forwardRef(profiler.withMeasure(name)((
      { override, ...props }: ExternalProps,
      outerRef: Ref<RefType>
    ) => {
      profiler.start('uiComponent')
      const globalTheme = useTheme()
      const componentTheme = mergeTheme(theme, globalTheme[name] as DeepPartial<ThemeType>, override)
      const mappedProps = componentTheme.mapProps({
        ...(componentTheme as any).defaultProps,
        ...props,
      }) as Props
      const [ref, setRef] = useRefHook(outerRef)
      const [testId, marker] = withMarker(props.marker)
      profiler.end('uiComponent')

      return render(mappedProps, {
        theme: componentTheme,
        tokens: globalTheme,
        testId,
        marker,
        ref,
        setRef,
      })
    }))
    WrappedComponent.displayName = name
    type Component = <T extends object>(props: ExternalProps & (T extends unknown ? {} : T)) => JSX.Element
    return (options.memo ? memo(WrappedComponent) : WrappedComponent) as unknown as Component
  }
}
