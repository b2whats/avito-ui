"use strict";

exports.__esModule = true;
exports.isIE = exports.isMobileSafari = void 0;
var userAgent = typeof window !== 'undefined' && window.navigator.userAgent;
var isMobileSafari = userAgent && /(iPad|iPhone|iPod)/i.test(userAgent) && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent);
exports.isMobileSafari = isMobileSafari;
var isIE = userAgent && /(MSIE |Trident.*rv[ :])([0-9]+)/i.test(userAgent);
exports.isIE = isIE;
//# sourceMappingURL=isBrowser.js.map