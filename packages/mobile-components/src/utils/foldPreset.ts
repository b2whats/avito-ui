export type PresetType<Props extends { [K in Prop]: Props[K] }, Type, Prop extends keyof Props> = {
  style?: Partial<Type>,
  checked?: Partial<Type>,
} & {
  [Key in Prop]?: NonNullable<Props[Key]> extends string ? {
    [Key2 in Props[Key]]?: PresetType<Props, Type, Exclude<Prop,Key>>
  } : never
}

export const foldPreset = (preset: any, props: any) => {
  let result: any = {}

  if (!preset) return result

  const { style, checked, ...presetProps } = preset

  if (style) {
    result = {...result, ...style}
  }

  if (checked && (props.checked || props['aria-checked'])) {
    result = {...result, ...checked}
  }

  for (const prop in presetProps) {
    if (prop in props && props[prop]) {
      const propValue = props[prop]
      const nestedPreset = presetProps[prop][propValue]

      result = {...result, ...foldPreset(nestedPreset, props)}
    }
  }

  return result
}