import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n      ", " {\n        animation: ", " ", "s linear infinite;\n        transform-origin: center;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    fill: currentColor;\n    height: 1em;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { css, keyframes, foldThemeParams, createClassName } from "../../styled-system/";
import { uiComponent } from "../../theme/";
import { filterProps, isIE } from "../../utils/";
import { iconTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";
var spinAnimation = keyframes(_templateObject());
var iconClassName = createClassName(function (themeStyle, props) {
  return _extends({
    display: 'inline-block',
    valignSelf: 'middle',
    shrink: false
  }, themeStyle, props, {
    height: props.size === 'auto' ? 1 : themeStyle.height || props.size
  });
}, function (textRules, _ref) {
  var spin = _ref.spin,
      rotate = _ref.rotate,
      area = _ref.area,
      shadow = _ref.shadow;
  return css(_templateObject2(), area ? "\n      overflow: visible;\n      cursor: pointer;\n\n      & > rect {\n        stroke: transparent;\n        stroke-width: " + area * 2 + "px;\n        vector-effect: non-scaling-stroke;\n        fill: none;\n      }\n    " : '', // Вложенная анимация это хак, из-за того что в safari вращение происходит не по центру при абсолютном позиционировании элемента
  spin ? css(_templateObject3(), isIE ? '&' : '& > *', spinAnimation, typeof spin === 'boolean' ? 0.5 : spin) : '', rotate ? "transform: rotate(" + rotate + "deg);" : '', shadow ? '& > * { filter: url(#shadow) }' : '', textRules);
});

var shadowMask = ___EmotionJSX("filter", {
  id: "shadow",
  x: "-50%",
  y: "-50%",
  width: "200%",
  height: "200%",
  filterUnits: "objectBoundingBox"
}, ___EmotionJSX("feDropShadow", {
  dx: "0.05",
  dy: "0.05",
  stdDeviation: "1",
  floodColor: "#a9a9a9",
  floodOpacity: "0.8"
}));

export var Icon = uiComponent('Icon', iconTheme)(function (props, _ref2) {
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var aria = {
    role: 'img',
    tabIndex: props.onClick ? 0 : undefined,
    'aria-hidden': true,
    'data-icon': props.name
  }; // IE11 не верно указывает ширину svg без переданного значения witdh

  var setRef = function setRef(node) {
    if (!node || !isIE) return;

    var _node$getAttribute$sp = node.getAttribute('viewBox').split(' '),
        w = _node$getAttribute$sp[2],
        h = _node$getAttribute$sp[3];

    var ratio = Number(w) / Number(h);

    var _node$getBoundingClie = node.getBoundingClientRect(),
        height = _node$getBoundingClie.height;

    node.style.width = height * ratio + 'px';
  };

  var _foldThemeParams = foldThemeParams(props, theme),
      Icon = _foldThemeParams.Icon;

  var iconStyle = iconClassName(props, tokens, Icon.style);
  return ___EmotionJSX("svg", _extends({}, filterProps(props), {
    ref: setRef,
    css: iconStyle
  }, aria), props.shadow && shadowMask, props.area && ___EmotionJSX("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%"
  }), props.children);
});
//# sourceMappingURL=Icon.js.map