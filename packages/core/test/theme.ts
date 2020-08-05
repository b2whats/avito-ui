import { diff } from 'deep-object-diff'
import { foldThemeParams } from '../src'
import { cartesian, prettyProps } from './helpers'

export function describeTheme(name: string, theme: any, propValues: any[] = [{}]) {
  describe(name, () => {
    // snapshot actual theme
    it('snap', () => expect(theme).toMatchSnapshot())
    const base = applyTheme(theme, {})
    // theme applied to default props
    it('base', () => expect(base).toMatchSnapshot())
    // effects of prop combos on theme
    it('fuzz', () => {
      propValues.forEach(orthoProps => {
        cartesian(orthoProps).forEach(props => {
          if (Object.keys(props).length === 0) {
            // we already have base snapshot
            return
          }
          expect(diff(base, applyTheme(theme, props))).toMatchSnapshot(prettyProps(props))
        })
      })
    })
  })
}

function applyTheme(theme: any, props: any) {
  return foldThemeParams(theme.mapProps({ ...theme.defaultProps, ...props }), theme)
}
