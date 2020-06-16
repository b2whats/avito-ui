"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Toggle = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks/");

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _Layout = require("../Layout/");

var _Text = require("../Text/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

var toggleClassName = (0, _styledSystem.createClassName)(function (_, props) {
  return (0, _extends2["default"])({
    display: 'inline-flex',
    valign: 'baseline'
  }, props, {
    shape: undefined
  });
}, function (textRules) {
  return "\n    position: relative;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n\n    & > input {\n      clip: rect(0, 0, 0, 0);\n      height: 1px;\n      position: absolute;\n      white-space: nowrap;\n      width: 1px;\n      margin: -1px;\n      border-width: 0;\n      border-style: initial;\n      border-color: initial;\n      border-image: initial;\n      overflow: hidden;\n      padding: 0;\n    }\n\n    &[aria-disabled] {\n      pointer-events: none;\n    }\n\n    " + textRules + "\n  ";
});
var switchClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: 'inline-flex',
    shrink: false,
    shape: props.shape,
    adjacentSelector: 'input',
    variant: props.variant
  }, themeStyle);
}, function (textRules) {
  return "\n    transition: background-color 0.2s ease 0s;\n    -webkit-user-select: none;\n\n    &::before {\n      content: 'x';\n      width: 0px;\n      overflow: hidden;\n      align-self: center;\n      color: transparent;\n    }\n\n    " + textRules + "\n  ";
});
var Toggle = (0, _theme.uiComponent)('Toggle', _theme2.toggleTheme)(function (_ref, _ref2, _ref3) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["className", "children"]);
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var ref = _ref3[0],
      setRef = _ref3[1];
  var groupProps = (0, _Layout.useGroupHook)(ref, props); // Uncontrolled input for demos

  if (tokens._demo && !groupProps.onChange && groupProps.mode === 'checkbox') {
    var _useState = (0, _react.useState)(groupProps.checked || false),
        _checked = _useState[0],
        _onChange = _useState[1];

    groupProps.checked = _checked;

    groupProps.onChange = function (v) {
      return _onChange(v.checked);
    };
  }

  (0, _react.useEffect)(function () {
    if (props.indeterminate !== undefined && ref.current) {
      ref.current.indeterminate = props.indeterminate;
    }
  }, [props.indeterminate]);
  var checked = groupProps.indeterminate ? 'mixed' : Boolean(groupProps.checked);
  var aria = {
    role: groupProps.role || groupProps.mode,
    'aria-checked': checked,
    'aria-invalid': groupProps.variant === 'error',
    'aria-disabled': groupProps.disabled,
    'aria-busy': groupProps.loading
  };

  var preventFocus = function preventFocus(event) {
    event.preventDefault();
  };

  var preventLabelClick = (0, _utils.invokeAll)(function (event) {
    return event.stopPropagation();
  }, groupProps.onClick);

  var onChange = function onChange() {
    var value = {
      name: groupProps.name,
      value: groupProps.value,
      checked: !groupProps.checked,
      type: aria.role
    };
    groupProps.onChange && groupProps.onChange(value);
  };

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(groupProps, theme),
      Toggle = _foldThemeParams.Toggle,
      Switch = _foldThemeParams.Switch,
      Icon = _foldThemeParams.Icon,
      Label = _foldThemeParams.Label;

  var toggleStyle = toggleClassName(groupProps, tokens, Toggle.style);
  var switchStyle = switchClassName(groupProps, tokens, Switch.style);
  var label = props.label && (0, _core.jsx)(_Text.Text, (0, _extends2["default"])({}, Label.props, {
    crop: true
  }), props.label);
  return (0, _core.jsx)("label", (0, _extends2["default"])({
    ref: (0, _hooks.usePrevent3DTouch)(),
    css: toggleStyle
  }, aria, {
    onMouseDown: preventFocus
  }), props.labelPosition === 'start' && label, (0, _core.jsx)("input", (0, _extends2["default"])({}, (0, _utils.filterProps)(groupProps), {
    ref: setRef,
    type: props.mode,
    onChange: onChange,
    onClick: preventLabelClick
  })), (0, _core.jsx)("div", {
    css: switchStyle,
    className: className
  }, children && children({
    checked: checked,
    loading: props.loading,
    Icon: Icon
  })), props.labelPosition === 'end' && label);
});
exports.Toggle = Toggle;
//# sourceMappingURL=Toggle.js.map