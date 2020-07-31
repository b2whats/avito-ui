import { SchemeType, Slot, ComponentTheme } from '../styled-system'

type WrappedMap<Key extends string, Map> = { [MapKey in keyof Map]: { [key in Key]: Map[MapKey] } }

export const wrapValues = <Key extends string, Map>(wrapKey: Key, map: Map) => {
  const res: any = {}
  for (const key in map) {
    res[key] = { [wrapKey]: map[key] } as any
  }
  return res as WrappedMap<Key, Map>
}

interface MaybeWrapMap<TopKey extends string> {
  <Map>(map: Map): WrappedMap<TopKey, Map>
  <ItemKey extends string, Map>(itemKey: ItemKey, map: Map): WrappedMap<TopKey, WrappedMap<ItemKey, Map>>
}

export const propMap: MaybeWrapMap<'props'> = (key: any, map?: any) =>
  wrapValues('props', map ? wrapValues(key, map) : key)

export const styleMap: MaybeWrapMap<'style'> = (key: any, map?: any) =>
  wrapValues('style', map ? wrapValues(key, map) : key)

type SlotInternals<Theme, Name> = Theme extends ComponentTheme<infer Props, infer Slots>
    ? Name extends keyof Slots
      ? Slots[Name] extends Slot<infer OutProps>
        ? SchemeType<Props, OutProps>
      : never : never : never
type ThemeProps<Theme> = Theme extends ComponentTheme<infer Props, infer _> ? Props : never


class ThemeBuilder<Theme extends ComponentTheme<any, any>> {
  private theme: Theme = { scheme: {} } as any

  slot<Name extends keyof Theme['scheme']>(
    name: Name,
    parts = {} as SlotInternals<Theme, Name>
  ): ThemeBuilder<Theme> {
    this.theme.scheme[name as string] = parts
    return this
  }
  defaultProps(props: Partial<ThemeProps<Theme>>) {
    this.theme.defaultProps = props
    return this
  }
  mapProps(map: (props: ThemeProps<Theme>) => Partial<ThemeProps<Theme>>) {
    this.theme.mapProps = map
    return this
  }
  build() {
    return this.theme
  }
}

export function theme<Theme extends { scheme: object }>() {
  return new ThemeBuilder<Theme>()
}

export const dsl = {
  wrapValues,
  styleMap,
  propMap,
  theme,
}
