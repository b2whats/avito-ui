"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.ThemeProvider = ThemeProvider;

var _emotionTheming = require("emotion-theming");

var _react = _interopRequireWildcard(require("react"));

var _tokens = require("@avito/tokens");

var _utils = require("../utils/");

var _mergeTheme = require("./mergeTheme");

var _useTheme = require("./useTheme");

var _core = require("@emotion/core");

function ThemeProvider(_ref) {
  var _ref$defaultTheme = _ref.defaultTheme,
      defaultTheme = _ref$defaultTheme === void 0 ? _tokens.tokens : _ref$defaultTheme,
      theme = _ref.theme,
      children = _ref.children;
  var globalTheme = (0, _useTheme.useTheme)();
  var currentTeme = (0, _mergeTheme.mergeTheme)(defaultTheme, globalTheme, theme);
  (0, _react.useEffect)(function () {
    // необходимо для mobile safari что бы в нем работали состояния :active
    _utils.isMobileSafari && document.body.setAttribute('ontouchstart', '');
  }, []);
  return (0, _core.jsx)(_emotionTheming.ThemeProvider, {
    theme: currentTeme
  }, children);
}
//# sourceMappingURL=ThemeProvider.js.map