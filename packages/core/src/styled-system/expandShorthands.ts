import { SpaceProperties, TextProperties, StyleProperties } from './StyleProperties'

type Unset<Keys extends keyof StyleProperties> =
  (style: StyleProperties, remove: boolean) => Omit<StyleProperties, Keys>

function makeDimExpander<Short extends keyof SpaceProperties>(
  [kAll, kx, ky, kt, kr, kb, kl]: (keyof SpaceProperties)[]
): Unset<Short> {
  return function dimExpander(style, remove) {
    const has = { all: kAll in style, x: kx in style, y: ky in style }
    if ((has.all || has.y) && !(kt in style)) style[kt] = has.y ? style[ky] : style[kAll]
    if ((has.all || has.x) && !(kr in style)) style[kr] = has.x ? style[kx] : style[kAll]
    if ((has.all || has.y) && !(kb in style)) style[kb] = has.y ? style[ky] : style[kAll]
    if ((has.all || has.x) && !(kl in style)) style[kl] = has.x ? style[kx] : style[kAll]
    if (remove) {
      delete style[kAll]
      delete style[kx]
      delete style[ky]
    }
    return style
  }
}

export const expand = {
  padding: makeDimExpander<'p' | 'px' | 'py'>(['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl']),
  margin: makeDimExpander<'m' | 'mx' | 'my'>(['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml']),
  text: ((style: TextProperties, remove) => {
    if (style.bold) style.fontWeight = 600
    if (style.light) style.fontWeight = 300
    if (remove) {
      delete style.light
      delete style.bold
    }
    return style
  }) as Unset<'bold' | 'light'>,
}

type Valueof<T> = T[keyof T]
type Shorthands = Valueof<typeof expand> extends Unset<infer Omit> ? Omit : never
export type ExpandedStyleProperties = Omit<StyleProperties, Shorthands>

export function expandShorthands<T extends StyleProperties>(
  style: T,
  inPlace = false,
  remove = false
): Omit<T, Shorthands> {
  if (!inPlace) {
    style = { ...style }
  }
  expand.margin(style, remove)
  expand.padding(style, remove)
  expand.text(style, remove)
  return style
}

export function expandShorthandsDeep<T>(theme: T): T {
  if (!theme || typeof theme !== 'object') {
    return theme
  }

  if (Array.isArray(theme)) {
    return theme.map(item => expandShorthandsDeep(item)) as any
  }

  const res: any = {}
  for (const key in theme) {
    const field = theme[key]
    res[key] = (key === 'style' || key === 'props')
      ? expandShorthands(field, false, true)
      : expandShorthandsDeep(field)
  }
  return res
}
