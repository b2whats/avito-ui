export function cartesian<T extends { [K: string]: any[] }>(valuesByKey: T): { [K in keyof T]: any }[] {
  let res: any[] = [{}]
  Object.entries(valuesByKey).forEach(([key, values]) => {
    res = res.reduce(
      (acc, partial) => [...acc, ...values.map(value => ({ ...partial, [key]: value }))],
      [])
  })
  return res
}

export function flattenSets(orthogonals: any[]): any[] {
  return orthogonals.reduce((acc, dimensions) => acc.concat(cartesian(dimensions)), [])
}

export const prettyProps = (props: object) => {
  return Object.entries(props).map(([prop, value]) => {
    if (value instanceof Object && value.type) {
      return `${prop}={jsx}`
    }
    if (typeof value === 'boolean' && value) {
      return prop
    }
    return `${prop}=${JSON.stringify(value)}`
  }).join(' ')
}
