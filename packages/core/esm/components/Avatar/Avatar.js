import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";
import _extends from "@babel/runtime/helpers/esm/extends";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: inherit;\n  max-width: 100%;\n  max-height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Children, useState, useEffect, isValidElement } from 'react';
import { foldThemeParams, createClassName, css } from "../../styled-system";
import { uiComponent } from "../../theme";
import { filterProps, omit } from "../../utils";
import { Text } from "../Text";
import { avatarTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var avatarClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: 'inline-flex',
    position: 'relative',
    shrink: false,
    grow: false
  }, themeStyle, props);
}, function (textRules) {
  return "\n    user-select: none;\n    & *:nth-child(2) {\n      /* position badge above overlay */\n      z-index: 1;\n    }\n    " + textRules + "\n  ";
});
var imageClassName = css(_templateObject());
export var Avatar = uiComponent('Avatar', avatarTheme)(function (props, _ref, _ref2) {
  var theme = _ref.theme,
      tokens = _ref.tokens;
  var _ = _ref2[0],
      setRef = _ref2[1];

  var _useState = useState(props.src == null),
      isFallback = _useState[0],
      setFallback = _useState[1];

  var onError = function onError() {
    return setFallback(true);
  };

  useEffect(function () {
    return setFallback(props.src == null);
  }, [props.src]);

  var _foldThemeParams = foldThemeParams(_extends({}, props, {
    isFallback: isFallback
  }), theme),
      Wrapper = _foldThemeParams.Wrapper,
      Badge = _foldThemeParams.Badge,
      Fallback = _foldThemeParams.Fallback;

  var Tag = props.as || 'span';
  var alt = props.alt || 'Пользователь';
  var aria = {
    role: props.onClick ? 'button' : 'img',
    'aria-disabled': props.disabled
  };

  var renderFallback = function renderFallback(children, fallbackProps) {
    return /*#__PURE__*/isValidElement(children) ? ___EmotionJSX(children.type, _extends({}, fallbackProps, children.props)) : typeof children === 'function' ? Children.only(children(fallbackProps)) : typeof children === 'string' ? ___EmotionJSX(Text, {
      crop: true
    }, children) : typeof props.alt === 'string' ? ___EmotionJSX(Text, {
      crop: true
    }, props.alt[0].toUpperCase()) : ___EmotionJSX(Fallback.component, fallbackProps);
  }; // FIXME put onClick on img / fallback for easier badge clicks?


  return ___EmotionJSX(Tag, _extends({
    css: avatarClassName(props, tokens, Wrapper.style)
  }, aria, filterProps(omit(props, 'src'))), isFallback ? renderFallback(props.children, Fallback.props) : ___EmotionJSX("img", {
    css: imageClassName,
    draggable: "false",
    src: props.src,
    onError: onError,
    alt: alt
  }), props.badge && ___EmotionJSX(props.badge.type, _extends({}, Badge.props, props.badge.props)));
});
//# sourceMappingURL=Avatar.js.map