"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Stack = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _core = require("@emotion/core");

var stackClassName = (0, _styledSystem.createClassName)(function (_, props) {
  return (0, _extends2["default"])({
    display: 'flex',
    valign: !props.column ? 'top' : undefined
  }, props);
}, function (textRules, _ref, _ref2) {
  var column = _ref.column,
      scroll = _ref.scroll,
      spacing = _ref.spacing,
      spacingCross = _ref.spacingCross,
      debug = _ref.debug;
  var space = _ref2.space;
  return "\n    " + (scroll ? "overflow-" + (column ? 'y' : 'x') + ": auto;" : '') + ";\n\n    " + (spacing ? "\n      & > *:not(:last-child) { margin-" + (column ? 'bottom' : 'right') + ": " + (space[spacing] || spacing) + "px; }\n    " : '') + "\n\n    " + (spacingCross ? "\n      && > * { margin-" + (column ? 'right' : 'bottom') + ": " + (space[spacingCross] || spacingCross) + "px; }\n    " : '') + "\n\n    " + (debug ? "\n      outline: 1px solid red;\n      & > * {\n        background-color: #A1DFFF;\n      }\n\n      & > :nth-child(2n) {\n        background-color: #ffd173;\n      }\n    " : '') + "\n\n    " + textRules + "\n  ";
});

var Stack = /*#__PURE__*/_react["default"].forwardRef(function (_ref3, ref) {
  var as = _ref3.as,
      children = _ref3.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, ["as", "children"]);
  var theme = (0, _theme.useTheme)();
  var stackStyle = stackClassName(props, theme);
  var Tag = as || 'div';
  return (0, _core.jsx)(Tag, (0, _extends2["default"])({
    ref: ref,
    css: stackStyle
  }, (0, _utils.filterProps)(props)), children);
});

exports.Stack = Stack;
Stack.displayName = 'Stack';
//# sourceMappingURL=Stack.js.map