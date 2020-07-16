import { forwardRef, Ref, MutableRefObject, memo } from 'react'
import { Tokens } from '@avito/tokens'
import { useRefObject } from '../hooks'
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

type Internals<ThemeType, Tokens, Element> = {
  theme: ThemeType
  tokens: Tokens
  testId: ReturnType<typeof withMarker>[0]
  marker: ReturnType<typeof withMarker>[1]
  ref: MutableRefObject<Element | null>
}

type InternalProps<Props, RefType> = Props & { marker?: string, ref: MutableRefObject<RefType> }

export function uiComponent<ThemeType extends object = {}>(
  name: keyof Theme | (string & {}),
  theme: ThemeType = {} as ThemeType,
  options: Options = {}
) {
  options = { memo: true, ...options }
  return <Props, RefType = HTMLElement>(
    render: (
      props: InternalProps<Props, RefType>,
      internal: Internals<ThemeType, Tokens, RefType>,
    ) => JSX.Element | null
  ) => {
    type ExternalProps = Props & UiComponentProps<ThemeType, RefType>
    render = profiler.withMeasure('render')(render)
    const maybeMemo = options.memo ? memo : (component: any) => component
    const WrappedComponent = maybeMemo(forwardRef(profiler.withMeasure(name)((
      { override, ...props }: ExternalProps,
      outerRef: Ref<RefType>
    ) => {
      profiler.start('uiComponent')
      const globalTheme = useTheme()
      const ref = useRefObject(outerRef)
      const componentTheme = mergeTheme(theme, globalTheme[name] as DeepPartial<ThemeType>, override)
      const mappedProps = componentTheme.mapProps({
        ...(componentTheme as any).defaultProps,
        ...props,
        ref,
      }) as InternalProps<Props, RefType>
      const [testId, marker] = withMarker(props.marker)
      profiler.end('uiComponent')

      return render(mappedProps, {
        theme: componentTheme,
        tokens: globalTheme,
        testId,
        marker,
        ref,
      })
    })))
    WrappedComponent.displayName = name
    type Component = <T extends object>(props: ExternalProps & (T extends unknown ? {} : T)) => JSX.Element
    return WrappedComponent as unknown as Component
  }
}
