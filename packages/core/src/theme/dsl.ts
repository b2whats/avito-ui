import { SchemeType, Slot, ComponentTheme, BoundSlot } from '../styled-system'

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
type SlotProps<Theme, Name> = SlotInternals<Theme, Name> extends SchemeType<infer _, infer Props> ? Props : never
type ThemeProps<Theme> = Theme extends ComponentTheme<infer Props, infer _> ? Props : never
type MaybeArray<Item> = Item | Item[]

type SwitchMap<Props, Prop extends keyof Props, OutProps> = {
  [Value in Extract<Props[Prop], string>]?: MaybeArray<SchemeType<Props, OutProps>>
}
interface SlotDSL<Props, OutProps> {
  if(
    condition: keyof Props | ((props: Props) => any),
    body: MaybeArray<SchemeType<Props, OutProps>>
  ): BoundSlot<Props, OutProps>
  switch<Prop extends keyof Props>(
    condition: Prop,
    body: SwitchMap<Props, Prop, OutProps>
  ): BoundSlot<Props, OutProps>
}
interface SlotBuilder<Theme, Name> {
  (slot: SlotDSL<ThemeProps<Theme>, SlotProps<Theme, Name>>): MaybeArray<SlotInternals<Theme, Name>>
}

const slotDSL: SlotDSL<any, any> = {
  if: (condition, body) => ({
    $then: body,
    $if: typeof condition === 'function' ? condition : (props: any) => props[condition],
  }),
  switch: (condition, options) => ({ ...options, $switch: condition }),
}

class ThemeBuilder<Theme extends ComponentTheme<any, any>> {
  private theme: Theme = { scheme: {} } as any

  slot<Name extends keyof Theme['scheme']>(
    name: Name,
    parts: MaybeArray<SlotInternals<Theme, Name>> | SlotBuilder<Theme, Name> = []
  ): ThemeBuilder<Theme> {
    parts = typeof parts === 'function' ? parts(slotDSL) : parts
    parts = Array.isArray(parts) ? parts : [parts]
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

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type CommonProps<Slots> = UnionToIntersection<Slots extends BoundSlot<infer Props, infer _> ? Props : never>
type CommonOutProps<Slots> = UnionToIntersection<Slots extends BoundSlot<infer _, infer Out> ? Out : never>
export function fragment<Slots extends BoundSlot<any, any>>(
  builder: MaybeArray<Slots> | ((slot: SlotDSL<CommonProps<Slots>, CommonOutProps<Slots>>) => MaybeArray<Slots>)
) {
  return builder
}

export const dsl = {
  wrapValues,
  styleMap,
  propMap,
  theme,
  fragment,
}
