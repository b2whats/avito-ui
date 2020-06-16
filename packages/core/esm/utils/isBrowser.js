var userAgent = typeof window !== 'undefined' && window.navigator.userAgent;
export var isMobileSafari = userAgent && /(iPad|iPhone|iPod)/i.test(userAgent) && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent);
export var isIE = userAgent && /(MSIE |Trident.*rv[ :])([0-9]+)/i.test(userAgent);
//# sourceMappingURL=isBrowser.js.map