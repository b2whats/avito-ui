"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextareaCore = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks/");

var _styledSystem = require("../../styled-system/");

var _utils = require("../../utils/");

var _core = require("@emotion/core");

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  resize: none;\n  box-sizing: border-box;\n  overflow: auto;\n  width: 100%;\n  min-height: 1em;\n  height: 100%;\n  padding: 0px;\n  margin: 0px;\n  border-width: 0;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  outline: none;\n  background-color: transparent;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-text-fill-color: currentcolor;\n\n  &[disabled] {\n    cursor: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var textareaStyle = (0, _styledSystem.css)(_templateObject());

var TextareaCore = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var maxRows = _ref.maxRows,
      autoSize = _ref.autoSize,
      resizable = _ref.resizable,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["maxRows", "autoSize", "resizable"]);

  var _useRefHook = (0, _hooks.useRefHook)(ref),
      textarea = _useRefHook[0],
      setRef = _useRefHook[1];

  props = (0, _extends2["default"])({}, props, {
    ref: setRef,
    autoCorrect: 'off',
    spellCheck: false
  });

  var resize = function resize() {
    var node = textarea.current;
    if (!node) return; // Placeholder создает скрол когда не помещается, поэтому когда текста в нем очень много, высота высчиывается исходя из количества строк placeholder
    // То есть при первоначальном вводе текста текстовое поле сожмется до минимальной ширины

    var placeholder = node.placeholder,
        value = node.value;

    if (value) {
      node.style.height = 'auto';
      node.style.height = node.scrollHeight + "px";
    } else {
      node.placeholder = '';
      node.style.height = 'auto';
      node.style.height = node.scrollHeight + "px";
      node.placeholder = placeholder;
    }
  };

  var preventClick = (0, _utils.invokeAll)(function (event) {
    if (event.detail === 0) event.stopPropagation();
  }, props.onClick);
  (0, _react.useLayoutEffect)(function () {
    var node = textarea.current;
    if (!node) return;
    node.style.resize = resizable ? 'auto' : 'none';

    if (maxRows) {
      var _window$getComputedSt = window.getComputedStyle(node),
          lineHeight = _window$getComputedSt.lineHeight,
          paddingTop = _window$getComputedSt.paddingTop,
          paddingBottom = _window$getComputedSt.paddingBottom,
          borderTopWidth = _window$getComputedSt.borderTopWidth,
          borderBottomWidth = _window$getComputedSt.borderBottomWidth;

      node.style.maxHeight = "calc(" + maxRows + " * " + lineHeight + " + " + paddingTop + " + " + paddingBottom + " + " + borderTopWidth + " + " + borderBottomWidth + ")";
    }
  }, [maxRows, resizable]);
  (0, _react.useEffect)(function () {
    autoSize && resize();
  }, [autoSize, props.value]);
  return (0, _core.jsx)("textarea", (0, _extends2["default"])({
    css: textareaStyle
  }, (0, _utils.filterProps)(props), {
    onClick: preventClick
  }));
});

exports.TextareaCore = TextareaCore;
//# sourceMappingURL=TextareaCore.js.map