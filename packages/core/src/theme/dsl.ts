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
