import { SpaceProperties, TextProperties, StyleProperties, LayoutProperties } from './StyleProperties'

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
  layout: ((style: LayoutProperties, remove) => {
    if (style.inline) style.displayOutside = 'inline'
    if (style.block) style.displayOutside = 'block'
    if (remove) {
      delete style.inline
      delete style.block
    }
    return style
  }) as Unset<'inline' | 'block'>,
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
  expand.layout(style, remove)
  expand.text(style, remove)
  return style
}

// isStyle prevents expanding tokens
export function expandShorthandsDeep<
  T extends object & { $if?: any, $switch?: any } & StyleProperties
>(theme: T, isStyle = false): T {
  if (!theme || typeof theme !== 'object') {
    return theme
  }

  if (Array.isArray(theme)) {
    return theme.map(item => expandShorthandsDeep(item, !item.$if && !item.$switch)) as any
  }

  if (isStyle) {
    return expandShorthands(theme, false, true) as T
  }

  const res: any = {}
  for (const key in theme) {
    // start expanding when hitting "scheme"
    res[key] = expandShorthandsDeep(theme[key])
  }
  return res
}
