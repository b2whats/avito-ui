import type { Modifier } from '@popperjs/core'

export const customApplyStyles: Partial<Modifier<'applyStyles', { zIndex: number }>> = {
  name: 'applyStyles',
  effect({ state, options }) {
    const initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        bottom: 'auto',
        right: 'auto',
        margin: '0',
        zIndex: options.zIndex || 5,
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
