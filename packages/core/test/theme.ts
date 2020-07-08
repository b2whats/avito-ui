import { foldThemeParams } from '../src'
import { cartesian } from './helpers'

export function describeTheme(name: string, theme: any, propValues: any[] = [{}]) {
  describe(name, () => {
    it('snap', () => expect(theme).toMatchSnapshot())
    it('fuzz', () => propValues.forEach(orthoProps => fuzz(orthoProps, theme)))
  })
}

function fuzz(propValues: { [K: string]: any[] }, theme: any) {
  cartesian(propValues).forEach(props => {
    expect(foldThemeParams(props, theme)).toMatchSnapshot(JSON.stringify(props))
  })
}
