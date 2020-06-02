import applyStyles from '@popperjs/core/lib/modifiers/applyStyles'
import type { ApplyStylesModifier } from '@popperjs/core/lib/modifiers/applyStyles'

export const customApplyStyles: ApplyStylesModifier = {
  ...applyStyles,
  effect(args) { applyStyles.effect!(args); return () => {} },
}