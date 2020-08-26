import { StyleProperties } from './StyleProperties'

type Computable<T, Arg> = { [K in keyof T]: (T[K] | ((arg: Arg) => T[K])) }

export type SchemeType<
  Props extends { [K in keyof Props]: Props[K] },
  ComponentsProps = StyleProperties
> = Partial<Computable<ComponentsProps, Props>> & {
  // Срабатывает ошибка рекурсии https://github.com/microsoft/TypeScript/issues/34933 в компоненте Icon
  // Если написать так React.FunctionComponent<ComponentsProps>
  component?: any
}

export interface Slot<OutProps = StyleProperties> {}
export interface BoundSlot<InProps, OutProps = StyleProperties> extends Slot<OutProps> {}
export type ComponentTheme<Props, Scheme = {}> = {
  defaultProps?: Partial<Props>
  mapProps?: (props: Props) => Partial<Props> | void
  scheme: {
    [K in keyof Scheme]: Scheme[K] extends (Slot<infer OutProps> | undefined)
      ? BoundSlot<Props, OutProps>
      : Scheme[K]
  }
}

export type CastThemeProps<Theme, Props> = Theme extends ComponentTheme<infer _, infer Slots>
  ? ComponentTheme<Props, Slots>
  : never
