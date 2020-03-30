interface OmitFn {
  <T, K extends (keyof T)[]>
  (obj: T, ...keys: K): {
      [K2 in Exclude<keyof T, K[number]>]: T[K2]
  }
}

const omit: OmitFn = (obj, ...keys) => {
  let ret: any = {}

  let key: keyof typeof obj
  for (key in obj) {
    if (!(keys.includes(key))) {
      ret[key] = obj[key]
    }
  }
  return ret
}

export default omit