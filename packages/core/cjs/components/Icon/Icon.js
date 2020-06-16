"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Icon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("../../styled-system/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _theme2 = require("./theme");

var _core = require("@emotion/core");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n      ", " {\n        animation: ", " ", "s linear infinite;\n        transform-origin: center;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n    fill: currentColor;\n    height: 1em;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var spinAnimation = (0, _styledSystem.keyframes)(_templateObject());
var iconClassName = (0, _styledSystem.createClassName)(function (themeStyle, props) {
  return (0, _extends2["default"])({
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
  return (0, _styledSystem.css)(_templateObject2(), area ? "\n      overflow: visible;\n      cursor: pointer;\n\n      & > rect {\n        stroke: transparent;\n        stroke-width: " + area * 2 + "px;\n        vector-effect: non-scaling-stroke;\n        fill: none;\n      }\n    " : '', // Вложенная анимация это хак, из-за того что в safari вращение происходит не по центру при абсолютном позиционировании элемента
  spin ? (0, _styledSystem.css)(_templateObject3(), _utils.isIE ? '&' : '& > *', spinAnimation, typeof spin === 'boolean' ? 0.5 : spin) : '', rotate ? "transform: rotate(" + rotate + "deg);" : '', shadow ? '& > * { filter: url(#shadow) }' : '', textRules);
});
var shadowMask = (0, _core.jsx)("filter", {
  id: "shadow",
  x: "-50%",
  y: "-50%",
  width: "200%",
  height: "200%",
  filterUnits: "objectBoundingBox"
}, (0, _core.jsx)("feDropShadow", {
  dx: "0.05",
  dy: "0.05",
  stdDeviation: "1",
  floodColor: "#a9a9a9",
  floodOpacity: "0.8"
}));
var Icon = (0, _theme.uiComponent)('Icon', _theme2.iconTheme)(function (props, _ref2) {
  var theme = _ref2.theme,
      tokens = _ref2.tokens;
  var aria = {
    role: 'img',
    tabIndex: props.onClick ? 0 : undefined,
    'aria-hidden': true,
    'data-icon': props.name
  }; // IE11 не верно указывает ширину svg без переданного значения witdh

  var setRef = function setRef(node) {
    if (!node || !_utils.isIE) return;

    var _node$getAttribute$sp = node.getAttribute('viewBox').split(' '),
        w = _node$getAttribute$sp[2],
        h = _node$getAttribute$sp[3];

    var ratio = Number(w) / Number(h);

    var _node$getBoundingClie = node.getBoundingClientRect(),
        height = _node$getBoundingClie.height;

    node.style.width = height * ratio + 'px';
  };

  var _foldThemeParams = (0, _styledSystem.foldThemeParams)(props, theme),
      Icon = _foldThemeParams.Icon;

  var iconStyle = iconClassName(props, tokens, Icon.style);
  return (0, _core.jsx)("svg", (0, _extends2["default"])({}, (0, _utils.filterProps)(props), {
    ref: setRef,
    css: iconStyle
  }, aria), props.shadow && shadowMask, props.area && (0, _core.jsx)("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%"
  }), props.children);
});
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map