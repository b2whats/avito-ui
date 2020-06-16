"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Select = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _icons = require("@avito/core/icons");

var _theme = require("./theme");

var _core2 = require("@emotion/core");

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  outline: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  opacity: 0;\n\n  /* \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u043B\u0438\u043A */\n  pointer-events: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var selectStyle = (0, _core.css)(_templateObject());
var Select = (0, _core.uiComponent)('Select', _theme.selectTheme)(function (_ref, _ref2) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$getValue = _ref.getValue,
      getValue = _ref$getValue === void 0 ? function (option) {
    return option.value;
  } : _ref$getValue,
      _ref$getText = _ref.getText,
      getText = _ref$getText === void 0 ? function (option) {
    return option.label;
  } : _ref$getText,
      _ref$placeholderOptio = _ref.placeholderOption,
      placeholderOption = _ref$placeholderOptio === void 0 ? 'Не выбрано' : _ref$placeholderOptio,
      _ref$clearable = _ref.clearable,
      clearable = _ref$clearable === void 0 ? true : _ref$clearable,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["options", "getValue", "getText", "placeholderOption", "clearable", "placeholder", "value"]);
  var theme = _ref2.theme;

  var renderCore = function renderCore(props) {
    var selectedOption = options.find(function (option) {
      return getValue(option) == props.value;
    });
    var textState = selectedOption ? {} : {
      'data-placeholder': true
    };
    return (0, _core2.jsx)(_react["default"].Fragment, null, (0, _core2.jsx)(_core.Text, (0, _extends2["default"])({
      truncate: true
    }, textState), selectedOption ? getText(selectedOption) : placeholder), !props.readOnly && (0, _core2.jsx)("select", (0, _extends2["default"])({}, (0, _core.filterProps)(props), {
      css: selectStyle
    }), (!props.value || clearable) && (0, _core2.jsx)("option", {
      value: ""
    }, placeholderOption), options.map(function (option) {
      var value = getValue(option);
      return (0, _core2.jsx)("option", {
        key: value,
        value: value
      }, getText(option));
    })));
  };

  value = !value && !placeholderOption && options[0] ? getValue(options[0]) : value;
  return (0, _core2.jsx)(_core.Input, (0, _extends2["default"])({
    iconAfter: (0, _core2.jsx)(_icons.ChevronNarrowIcon, {
      rotate: 180
    })
  }, props, {
    value: value,
    override: theme,
    renderCore: renderCore
  }));
});
exports.Select = Select;
//# sourceMappingURL=Select.js.map