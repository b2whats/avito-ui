"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ListItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@avito/core");

var _theme = require("./theme");

var _core2 = require("@emotion/core");

var ListItem = (0, _core.uiComponent)('ListItem', _theme.listItemTheme)(function (_ref, _ref2) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children"]);
  var theme = _ref2.theme;

  // Необходимо прервать 3DTouch что бы он не прерывал событие клика
  // TODO: Протестировать на телефоне с HapticTouch
  //const setTouchRef = usePrevent3DTouch()
  var _useMeasure = (0, _core.useMeasure)(),
      bounds = _useMeasure[0],
      setMeasureRef = _useMeasure[1];

  var _useRefHook = (0, _core.useRefHook)(setMeasureRef),
      _ = _useRefHook[0],
      setRef = _useRefHook[1];

  var beforeValign = props.beforeValign === 'auto' ? bounds && _theme.listItemTheme.beforeTreshold < bounds.height ? 'top' : 'middle' : props.beforeValign;
  var afterValign = props.afterValign === 'auto' ? bounds && _theme.listItemTheme.afterTreshold < bounds.height ? 'top' : 'middle' : props.afterValign;

  var _foldThemeParams = (0, _core.foldThemeParams)(props, theme),
      ListItem = _foldThemeParams.ListItem,
      Before = _foldThemeParams.Before,
      StackText = _foldThemeParams.StackText,
      Label = _foldThemeParams.Label,
      Caption = _foldThemeParams.Caption,
      Link = _foldThemeParams.Link,
      After = _foldThemeParams.After;

  var before = props.before && (0, _core2.jsx)(_core.Box, (0, _extends2["default"])({}, Before.props, {
    valignSelf: beforeValign
  }), props.before);
  var after = props.after && (0, _core2.jsx)(_core.Box, (0, _extends2["default"])({}, After.props, {
    valignSelf: afterValign
  }), props.after);

  var renderSlot = function renderSlot(Component, element, props) {
    return typeof element === 'string' && element ? (0, _core2.jsx)(Component, props, element) : typeof element === 'function' ? element(props) : /*#__PURE__*/(0, _react.isValidElement)(element) ? (0, _core2.jsx)(element.type, (0, _extends2["default"])({}, props, element.props)) : undefined;
  };

  var preventFocus = function preventFocus(event) {
    event.preventDefault();
  };

  var events = props.onClick && !props.disabled && {
    onMouseDown: preventFocus,
    onClick: props.onClick,
    as: 'label'
  };
  return (0, _core2.jsx)(_core.Stack, (0, _extends2["default"])({
    ref: setRef
  }, ListItem.props, props, events), before, (0, _core2.jsx)(_core.Stack, (0, _extends2["default"])({
    column: true,
    grow: true
  }, StackText.props), renderSlot(_core.Text, props.label, Label.props), renderSlot(_core.Text, props.caption, Caption.props), renderSlot(_core.Text, props.link, Link.props)), after);
});
exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.js.map