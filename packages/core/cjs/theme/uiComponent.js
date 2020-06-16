"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.uiComponent = uiComponent;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = require("react");

var _hooks = require("../hooks");

var _cjs = require("../../cjs");

var _mergeTheme = require("./mergeTheme");

function uiComponent(name, theme) {
  return function (render) {
    var WrappedComponent = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
      var override = _ref.override,
          props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["override"]);
      var globalTheme = (0, _cjs.useTheme)();
      var componentTheme = (0, _mergeTheme.mergeTheme)(theme, globalTheme[name], override);
      props = (0, _extends2["default"])({}, componentTheme.defaultProps, props);
      return render(componentTheme.mapProps(props), {
        theme: componentTheme,
        tokens: globalTheme
      }, (0, _hooks.useRefHook)(ref));
    });
    WrappedComponent.displayName = name;
    return WrappedComponent;
  };
}
//# sourceMappingURL=uiComponent.js.map