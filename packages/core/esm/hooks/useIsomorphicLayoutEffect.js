import { useLayoutEffect, useEffect } from 'react';
export var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document ? useLayoutEffect : useEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map