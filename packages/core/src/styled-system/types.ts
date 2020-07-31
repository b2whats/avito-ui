import { StyleProperties } from './StyleProperties'

type UnionToIntersection<U> =
  (boolean extends U ? (k: U) => void : U extends any ? (k: U) => void : never) extends ((k: infer I) => void)
  ? I : never
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true
type OnlyLiteralString<T> = T extends string ? T : never
type Computable<T, Arg> = { [K in keyof T]: (T[K] | ((arg: Arg) => T[K])) }
// String literals on unions, maybe optional
// preset: 'force' | 'none', preset: 'force' and preset?: 'force' will all pass
type IsSwitchable<T> = IsUnion<NonNullable<T>> extends true ? true : T extends string | undefined ? true : false

export interface Slot<OutProps = never> {}
export interface BoundSlot<InProps, OutProps = never> extends Slot<OutProps> {}

export type SchemeType<
  Props extends { [K in keyof Props]: Props[K] },
  ComponentsProps = never
> = {
  style?: Partial<Computable<StyleProperties, Props>>
  props?: Partial<Computable<ComponentsProps, Props>>
  // Срабатывает ошибка рекурсии https://github.com/microsoft/TypeScript/issues/34933 в компоненте Icon
  // Если написать так React.FunctionComponent<ComponentsProps>
  component?: any
} & {
  [Key in keyof Props]?: IsSwitchable<Props[Key]> extends true
    ? { [Key2 in OnlyLiteralString<Props[Key]>]?: SchemeType<Props, ComponentsProps> }
    : SchemeType<Props, ComponentsProps>
}

export type ComponentTheme<Props, Scheme = {}> = {
  defaultProps?: Partial<Props>
  mapProps?: (props: Props) => Partial<Props>
  scheme: {
    [K in keyof Scheme]: Scheme[K] extends (Slot<infer OutProps> | undefined)
      ? BoundSlot<Props, OutProps>
      : Scheme[K]
  }
}

export type CastThemeProps<Theme, Props> = Theme extends ComponentTheme<infer _, infer Slots>
  ? ComponentTheme<Props, Slots>
  : never
