interface PickFn {
  <T, K extends (keyof T)[]>
  (obj: T, ...keys: K): {
    [K2 in Extract<keyof T, K[number]>]: T[K2]
  }
}

export const pick: PickFn = (obj, ...keys) => {
  let ret: any = {}

  let key: keyof typeof obj
  for (key of keys) {
    if (key in obj) {
      ret[key] = obj[key]
    }
  }
  return ret
}