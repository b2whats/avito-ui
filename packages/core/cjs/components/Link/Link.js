"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system");

var _theme = require("../../theme");

var _Text = require("../Text/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var Link = (0, _theme.uiComponent)('Link', _theme2.linkTheme)(function (_ref, _ref2) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children"]);
  var theme = _ref2.theme;

  if (props.noVisited) {
    props.colorVisited = undefined;
    props.bgVisited = undefined;
    props.borderColorVisited = undefined;
  }

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(props, theme),
      Link = _foldThemeParams.Link;

  return (0, _core.jsx)(_Text.Text, (0, _extends2["default"])({
    as: "a"
  }, Link.props, props), children);
});
exports.Link = Link;
//# sourceMappingURL=Link.js.map