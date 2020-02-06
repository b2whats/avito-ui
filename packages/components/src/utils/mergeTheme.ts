import deepmerge from 'deepmerge'
import memoize from 'fast-memoize'

const mergeTheme = memoize((target, reference) => deepmerge(target, reference))

export default mergeTheme