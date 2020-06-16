"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SegmentButton = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@avito/core");

var _theme = require("./theme");

var _core2 = require("@emotion/core");

var groupClassName = (0, _core.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
    display: 'flex',
    width: 1,
    shrink: false
  }, themeStyle, props);
}, function (textRules) {
  return "\n    position: relative;\n\n    " + textRules + "\n  ";
});
var buttonClassName = (0, _core.createClassName)(function (themeStyle) {
  return (0, _extends2["default"])({
    display: 'inline-block',
    position: 'relative',
    grow: true,
    height: 1
  }, themeStyle);
}, function (textRules) {
  return "\n    padding: 0px;\n    margin: 0px;\n    border: 0px;\n    background: transparent;\n    font-family: inherit;\n    font-size: inherit;\n    outline: 0;\n    cursor: pointer;\n    user-select: none;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n\n    &::-moz-focus-inner {\n      border: 0;\n    }\n\n    " + textRules + "\n  ";
});
var slideClassName = (0, _core.createClassName)(function (themeStyle) {
  return (0, _extends2["default"])({
    display: 'inline-block',
    height: 1
  }, themeStyle);
}, function (textRules) {
  return "\n    position: absolute;\n    left: 0;\n    transition: transform .2s ease-in;\n    " + textRules + "\n  ";
});
var SegmentButton = (0, _core.uiComponent)('SegmentButton', _theme.segmentButtonTheme)(function (_ref, _ref2) {
  var options = _ref.options,
      name = _ref.name,
      onChange = _ref.onChange,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["options", "name", "onChange"]);
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  props.value = !props.value && options && options.length > 0 ? options[0].value : props.value;
  var windowSize = (0, _core.useWindowSize)();

  var _useRefHook = (0, _core.useRefHook)(),
      ref = _useRefHook[0],
      setRef = _useRefHook[1];

  var _useState = (0, _react.useState)({}),
      geometry = _useState[0],
      setGeometry = _useState[1];

  (0, _react.useEffect)(function () {
    if (!ref.current) return;
    var geometry = {};
    var buttons = ref.current.querySelectorAll('[type=button]');
    buttons.forEach(function (node) {
      geometry[node.value] = {
        transform: "translateX(" + node.offsetLeft + "px)",
        width: node.offsetWidth,
        height: node.offsetHeight
      };
    });
    setGeometry(geometry);
  }, [windowSize.innerWidth]);

  var _foldThemeParams = (0, _core.foldThemeParams)(props, theme),
      Group = _foldThemeParams.Group,
      Button = _foldThemeParams.Button,
      Slide = _foldThemeParams.Slide;

  var groupStyle = groupClassName(props, tokens, Group.style);
  var buttonStyle = buttonClassName(props, tokens, Button.style);
  var slideStyle = slideClassName(props, tokens, Slide.style);

  var _onClick = function onClick(value) {
    if (value === props.value) return;
    onChange && onChange({
      name: name,
      value: value
    });
  };

  var onKeyDown = (0, _react.useCallback)(function (event) {
    var next = event.currentTarget;
    var exit = ref.current.children.length;

    do {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          next = next.nextElementSibling || ref.current.firstChild;
          break;

        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          next = next.previousElementSibling || ref.current.lastChild;
          break;
      }
    } while (next && (next.disabled || next.type !== 'button') && exit--);

    if (next) {
      next.focus();
      next.click();
    }
  }, []);
  return (0, _core2.jsx)("div", (0, _extends2["default"])({
    ref: setRef,
    css: groupStyle,
    role: "radiogroup"
  }, (0, _core.filterProps)(props)), (0, _core2.jsx)("div", {
    css: slideStyle,
    style: geometry[props.value]
  }), options && options.map(function (item) {
    var checked = item.value === props.value;
    return (0, _core2.jsx)("button", {
      key: item.value,
      css: buttonStyle,
      type: "button",
      value: item.value,
      onClick: function onClick() {
        return _onClick(item.value);
      },
      onKeyDown: onKeyDown,
      role: "radio",
      "aria-checked": checked,
      disabled: props.disabled || item.disabled,
      tabIndex: checked ? 0 : -1
    }, item.text);
  }));
});
exports.SegmentButton = SegmentButton;
//# sourceMappingURL=SegmentButton.js.map