"use strict";

exports.__esModule = true;
exports.numberFormatter = void 0;

var _makeFormatter = require("./makeFormatter");

var numberFormatter = (0, _makeFormatter.makeFormatter)(function (_ref) {
  var positiveOnly = _ref.positiveOnly,
      maxIntDigits = _ref.maxIntDigits,
      maxFracDigits = _ref.maxFracDigits;
  var accept = new RegExp([positiveOnly ? '' : '^-', '\\d+', maxFracDigits ? '[,.]' : ''].filter(function (frag) {
    return frag;
  }).join('|'), 'g');
  return {
    accept: accept,
    format: function format(str) {
      var _ref2 = (str.match(accept) || []).join('').match(/^(-)?(\d*)([,.])?(\d*)/) || [],
          _ref2$ = _ref2[0],
          isNumeric = _ref2$ === void 0 ? false : _ref2$,
          _ref2$2 = _ref2[1],
          sign = _ref2$2 === void 0 ? '' : _ref2$2,
          _ref2$3 = _ref2[2],
          _int = _ref2$3 === void 0 ? '' : _ref2$3,
          _ref2$4 = _ref2[3],
          sep = _ref2$4 === void 0 ? '' : _ref2$4,
          _ref2$5 = _ref2[4],
          frac = _ref2$5 === void 0 ? '' : _ref2$5;

      if (!isNumeric) return '';

      var prettyInt = "" + (positiveOnly ? '' : sign) + _int // remove leading zeroes
      .replace(/^0+(?!$)/, '') // trim length
      .substring(0, maxIntDigits) // thousand separator
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

      if (!maxFracDigits) return prettyInt;
      return "" + prettyInt + sep + frac.substring(0, maxFracDigits);
    },
    replace: function replace(v) {
      return v.replace(',', '.');
    },
    parse: function parse(stringValue) {
      return (stringValue.match(accept) || []).join('');
    }
  };
}, {
  maxIntDigits: 15,
  maxFracDigits: 0,
  positiveOnly: true
});
exports.numberFormatter = numberFormatter;
//# sourceMappingURL=numberFormatter.js.map