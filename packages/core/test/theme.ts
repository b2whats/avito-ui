import { foldThemeParams } from '../src/'
import { flattenSets, prettyProps } from './helpers'

export function describeTheme(name: string, theme: any, propValues: any = {}) {
  describe(name, () => {
    // snapshot actual theme
    it('snap', () => expect(theme).toMatchSnapshot())
    const base = applyTheme(theme, {})
    // theme applied to default props
    it('base', () => expect(base).toMatchSnapshot())
    // effects of prop combos on theme
    it('fuzz', () => {
      flattenSets(propValues.sets || [])
        // we already havea base snapshot
        .filter(props => Object.keys(props).length)
        .forEach(props => expect(schemeDiff(base, applyTheme(theme, props))).toMatchSnapshot(prettyProps(props)))
    })
  })
}

function applyTheme(theme: any, props: any) {
  return foldThemeParams(theme.mapProps({ ...theme.defaultProps, ...props }), theme)
}

const isObject = (obj: any) => typeof obj === 'object' && obj != null
function schemeDiff(before: object, after: object) {
  const result = {}
  for (const newKey in after) {
    if (before[newKey] === after[newKey]) continue
    // recurse on objects, but not components
    if (isObject(before[newKey]) && isObject(after[newKey]) && newKey !== 'component') {
      const subDiff = schemeDiff(before[newKey], after[newKey])
      if (Object.keys(subDiff).length) {
        result[newKey] = subDiff
      }
    } else {
      result[newKey] = after[newKey]
    }
  }
  for (const oldKey in before) {
    if (!(oldKey in after)) {
      result[oldKey] = undefined
    }
  }
  return result
}
