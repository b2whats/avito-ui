"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Positioner = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _core = require("@popperjs/core");

var _react = _interopRequireWildcard(require("react"));

var _reactSpring = require("react-spring");

var _hooks = require("../../hooks/");

var _theme = require("../../theme/");

var _utils = require("../../utils/");

var _NodeResolver = require("../NodeResolver/");

var _Portal = require("../Portal/");

var _modifiers = require("./modifiers/");

var _theme2 = require("./theme");

var _core2 = require("@emotion/core");

var getModifiers = function getModifiers(_ref) {
  var minWidth = _ref.minWidth,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["minWidth", "width", "maxWidth"]);
  var modifiersName = ['offset', 'arrow', 'flip', 'preventOverflow', 'hide'];
  var modifiers = [_modifiers.customApplyStyles, _modifiers.targetWidth];
  modifiersName.forEach(function (name) {
    if (name in props) {
      modifiers.push({
        name: name,
        enabled: Boolean(props[name]),
        options: props[name] || undefined
      });
    }
  });

  if (minWidth || width || maxWidth) {
    modifiers.push({
      name: 'targetWidth',
      enabled: true,
      options: {
        minWidth: minWidth,
        width: width,
        maxWidth: maxWidth
      }
    });
  }

  return modifiers;
};

var Positioner = (0, _theme.uiComponent)('Positioner', _theme2.positionerTheme)(function (props, _ref2) {
  var theme = _ref2.theme;

  var _useState = (0, _react.useState)(Boolean(props.open)),
      localOpen = _useState[0],
      setLocalOpen = _useState[1];

  var targetRef = (0, _react.useRef)(null);
  var referenceRef = (0, _react.useRef)(null);
  var toggleTimerId = (0, _react.useRef)();
  var options = (0, _react.useMemo)(function () {
    return {
      strategy: props.strategy,
      placement: props.placement,
      modifiers: getModifiers(props)
    };
  }, [props.placement, props.strategy, props.offset, props.arrow, props.hide, props.flip, props.preventOverflow, props.minWidth, props.width, props.maxWidth]);
  var handleToggle = (0, _react.useCallback)(function (toggle) {
    clearTimeout(toggleTimerId.current);
    toggleTimerId.current = setTimeout(function () {
      setLocalOpen(toggle);
      toggle ? props.onOpen && props.onOpen() : props.onClose && props.onClose();
    }, toggle ? props.delayIn : props.delayOut);
  }, [props.delayIn, props.delayOut, props.onClose, props.onOpen]); // Обрабатываем внещний стейт open

  (0, _hooks.useIsomorphicLayoutEffect)(function () {
    if (props.open === undefined || props.open === localOpen) return;
    handleToggle(props.open);
  }, [props.open]); // Создаем инстанс popper

  (0, _hooks.useIsomorphicLayoutEffect)(function () {
    var target = targetRef.current;
    var reference = referenceRef.current;
    if (!reference || !target) return;
    target.style.margin = '0px';
    var popper = (0, _core.createPopper)(reference, target, options);
    return function () {
      popper.destroy();
    };
  }, [localOpen, options, props.usePortal]); // Устанавливаем глобальный обрабочики при открытии

  (0, _react.useEffect)(function () {
    var target = targetRef.current;
    var reference = referenceRef.current;
    if (!reference || !target) return;

    var handleScroll = function handleScroll() {
      return handleToggle(false);
    };

    var handleСlick = function handleСlick() {
      return handleToggle(false);
    };

    var handlePressEsc = function handlePressEsc(event) {
      return event.key === 'Escape' && handleToggle(false);
    };

    var handleOutsideClick = function handleOutsideClick(event) {
      if (target.contains(event.target) || reference.contains(event.target)) return;
      handleToggle(false);
    };

    props.closeOnOutsideClick && document.addEventListener('click', handleOutsideClick, true);
    props.closeOnClick && document.addEventListener('click', handleСlick);
    props.closeOnScroll && document.addEventListener('scroll', handleScroll);
    props.closeOnEsc && document.addEventListener('keydown', handlePressEsc);
    return function () {
      props.closeOnOutsideClick && document.removeEventListener('click', handleOutsideClick, true);
      props.closeOnClick && document.removeEventListener('click', handleСlick);
      props.closeOnScroll && document.removeEventListener('scroll', handleScroll);
      props.closeOnEsc && document.removeEventListener('keydown', handlePressEsc);
    };
  }, [localOpen, handleToggle, props.closeOnOutsideClick, props.closeOnScroll, props.closeOnEsc]);

  var reference = _react.Children.only(props.children);

  var eventHandlers = {};
  var aria = {
    'aria-haspopup': true,
    'aria-expanded': localOpen
  };

  if (props.trigger === 'click') {
    eventHandlers = {
      onClick: (0, _utils.invokeAll)(reference.props.onClick, function () {
        return handleToggle(!localOpen);
      })
    };
  }

  if (props.trigger === 'hover') {
    eventHandlers = {
      onFocus: (0, _utils.invokeAll)(reference.props.onFocus, function () {
        return handleToggle(true);
      }),
      onBlur: (0, _utils.invokeAll)(reference.props.onBlur, function () {
        return handleToggle(false);
      }),
      onMouseEnter: (0, _utils.invokeAll)(reference.props.onMouseEnter, function () {
        return handleToggle(true);
      }),
      onMouseLeave: (0, _utils.invokeAll)(reference.props.onMouseLeave, function () {
        return handleToggle(false);
      })
    };
    aria.tabIndex = 0;
  }

  var animation = typeof props.animation === 'string' ? theme.transitions[props.animation] : props.animation;
  var target = typeof props.target === 'function' ? props.target({
    close: function close() {
      return handleToggle(false);
    }
  }) : props.target;
  return (0, _core2.jsx)(_react["default"].Fragment, null, (0, _core2.jsx)(_NodeResolver.NodeResolver, {
    ref: referenceRef
  }, /*#__PURE__*/(0, _react.cloneElement)(reference, (0, _extends2["default"])({}, aria, eventHandlers))), (0, _core2.jsx)(_Portal.Portal, {
    active: Boolean(props.usePortal)
  }, (0, _core2.jsx)(_reactSpring.Transition, (0, _extends2["default"])({
    items: localOpen
  }, animation), function (style, item) {
    return item && (0, _core2.jsx)(_reactSpring.animated.div, {
      ref: targetRef,
      style: style
    }, target);
  })));
});
exports.Positioner = Positioner;
//# sourceMappingURL=Positioner.js.map