"use strict";

exports.__esModule = true;
exports.filterProps = void 0;
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|inputMode|defaultValue|defaultChecked|innerHTML|alt|autoComplete|autoPlay|capture|checked|className|content|contentEditable|disabled|draggable|form|formAction|hidden|spellCheck|href|hrefLang|htmlFor|id|lang|max|maxLength|media|method|min|minLength|multiple|muted|name|noValidate|open|pattern|placeholder|playsInline|preload|radioGroup|readOnly|referrerPolicy|rel|required|role|rows|rowSpan|selected|src|srcSet|style|tabIndex|target|title|type|value|about|datatype|typeof|autoCapitalize|autoCorrect|autoSave|alphabetic|autoReverse|viewBox|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = function isPropValid(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
};

var filterProps = function filterProps(props) {
  var ret = {};

  for (var prop in props) {
    if (isPropValid(prop)) {
      ret[prop] = props[prop];
    }
  }

  return ret;
};

exports.filterProps = filterProps;
//# sourceMappingURL=filterProps.js.map