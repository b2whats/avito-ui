const userAgent = typeof window !== 'undefined' && window.navigator.userAgent

export const isMobileSafari = userAgent && (/(iPad|iPhone|iPod)/i).test(userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury)/i).test(userAgent)
export const isIE = userAgent && (/(MSIE |Trident.*rv[ :])([0-9]+)/i).test(userAgent)
