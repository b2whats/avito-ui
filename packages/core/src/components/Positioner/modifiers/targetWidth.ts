import { Modifier } from '@popperjs/core'

type Width = 'reference' | number
type Options = {
  minWidth: Width,
  width: Width,
  maxWidth: Width
}
export type TargetWidthModifier = Modifier<'targetWidth', Options>

export const targetWidth: TargetWidthModifier = {
  name: 'targetWidth',
  enabled: true,
  fn: () => {},
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  effect: ({ state, options }) => {
    for (const [property, value] of Object.entries(options)) {
      if (value === 'reference') {
        state.elements.popper.style[property] = `${(state.elements.reference as HTMLElement).offsetWidth}px`
      }

      if (typeof value === 'number') {
        state.elements.popper.style[property] = Math.abs(value) > 1 ? `${value}px` : `${value * 100}%`
      }
    }

    return () => {}
  },
}
