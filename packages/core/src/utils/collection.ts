const filterProperties = (obj: object, isAllowed: (k: string) => boolean) => {
  let ret: any = {}
  for (let key in obj) {
    if (isAllowed(key)) {
      ret[key] = obj[key]
    }
  }
  return ret
}


interface OmitFn {
  <T, K extends (keyof T)[]>(obj: T, ...keys: K): Omit<T, K[number]>
  <T, Filter extends { [Key in keyof T]?: any }>(obj: T, filter: Filter): Omit<T, keyof Filter>
}
export const omit: OmitFn = (obj: any, ...keys: any[]) => filterProperties(
  obj,
  typeof keys[0] === 'object' ? key => !keys[0][key] : key => !(keys.includes(key)))


interface PickFn {
  <T, K extends (keyof T)[]>(obj: T, ...keys: K): Pick<T, K[number]>
  <T, Filter extends { [Key in keyof T]?: any }>(obj: T, filter: Filter): Pick<T, Extract<keyof Filter, keyof T>>
}
export const pick: PickFn = (obj: any, ...keys: any[]) => filterProperties(
  obj,
  typeof keys[0] === 'object' ? key => keys[0][key] : key => (keys.includes(key)))


export function trueMap<Keys extends string>(keys: Keys[] | readonly Keys[]) {
  const map = {} as { [K in Keys]: true }
  keys.forEach(key => map[key] = true)
  return map
}

export type TrueMap<T> = { [K in T extends string ? T : keyof Required<T>]: true }
