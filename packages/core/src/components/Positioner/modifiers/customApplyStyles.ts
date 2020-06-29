import type { ApplyStylesModifier } from '@popperjs/core/lib/modifiers/applyStyles'

export const customApplyStyles: Partial<ApplyStylesModifier> = {
  effect({ state }) {
    const initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        bottom: 'auto',
        right: 'auto',
        margin: '0',
        zIndex: 1,
      },
      arrow: {
        position: 'absolute',
      },
      reference: {},
    }

    Object.assign(state.elements.popper.style, initialStyles.popper)

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow)
    }
    return () => {}
  },
}
