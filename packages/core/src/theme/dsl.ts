import { SchemeType, Slot, ComponentTheme, BoundSlot } from '../styled-system'

type SlotInternals<Theme, Name> = Theme extends ComponentTheme<infer Props, infer Slots>
    ? Name extends keyof Slots
      ? Slots[Name] extends Slot<infer OutProps>
        ? SchemeType<Props, OutProps>
      : never : never : never
type SlotProps<Theme, Name> = SlotInternals<Theme, Name> extends SchemeType<infer _, infer Props> ? Props : never
type ThemeProps<Theme> = Theme extends ComponentTheme<infer Props, infer _> ? Props : never
type MaybeArray<Item> = Item | Item[]

type SwitchMap<Values, Result> = {
  [Value in Extract<Values, string>]?: Result
}
interface SlotDSL<Props, OutProps> {
  if(
    condition: keyof Props | ((props: Props) => any),
    body: MaybeArray<SchemeType<Props, OutProps>>
  ): BoundSlot<Props, OutProps>
  switch<Prop extends keyof Props>(
    condition: Prop,
    body: SwitchMap<Props[Prop], MaybeArray<SchemeType<Props, OutProps>>>
  ): BoundSlot<Props, OutProps>
  mapped<Prop extends keyof Props, Values, Fallback = never>(
    prop: Prop,
    body: SwitchMap<Props[Prop], Values>,
    fallback?: Fallback | ((value: Props[Prop]) => Fallback),
  ): (props: Props) => Values
}
interface SlotBuilder<Theme, Name> {
  (slot: SlotDSL<ThemeProps<Theme>, SlotProps<Theme, Name>>): MaybeArray<SlotInternals<Theme, Name>>
}

const slotDSL: SlotDSL<any, any> = {
  if: (condition, body) => ({
    $then: Array.isArray(body) ? body : [body],
    $if: typeof condition === 'function' ? condition : (props: any) => props[condition],
  }),
  switch: (condition, options) => {
    const res = { $switch: condition }
    Object.entries(options).forEach(([key, body]) => {
      res[key] = Array.isArray(options[key]) ? body : [body]
    })
    return res
  },
  mapped: (prop, options, fallback) => {
    const fallbackFn: any = typeof fallback === 'function' ? fallback : (() => fallback)
    return (props: any) => {
      const value = props[prop]
      return value in options ? options[value] : fallbackFn(value)
    }
  },
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
  mapProps(map: (props: ThemeProps<Theme>) => Partial<ThemeProps<Theme>> | void) {
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
  theme,
  fragment,
}
