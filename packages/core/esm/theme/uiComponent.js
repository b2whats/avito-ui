import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import { forwardRef } from 'react';
import { useRefHook } from "../hooks";
import { useTheme } from '.';
import { mergeTheme } from "./mergeTheme";
export function uiComponent(name, theme) {
  return function (render) {
    var WrappedComponent = /*#__PURE__*/forwardRef(function (_ref, ref) {
      var override = _ref.override,
          props = _objectWithoutPropertiesLoose(_ref, ["override"]);

      var globalTheme = useTheme();
      var componentTheme = mergeTheme(theme, globalTheme[name], override);
      props = _extends({}, componentTheme.defaultProps, props);
      return render(componentTheme.mapProps(props), {
        theme: componentTheme,
        tokens: globalTheme
      }, useRefHook(ref));
    });
    WrappedComponent.displayName = name;
    return WrappedComponent;
  };
}
//# sourceMappingURL=uiComponent.js.map