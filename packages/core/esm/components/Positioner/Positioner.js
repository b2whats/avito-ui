import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import { createPopper } from '@popperjs/core';
import React, { useRef, useState, useMemo, useCallback, useEffect, Children, cloneElement } from 'react';
import { animated, Transition } from 'react-spring';
import { useIsomorphicLayoutEffect } from "../../hooks/";
import { uiComponent } from "../../theme/";
import { invokeAll } from "../../utils/";
import { NodeResolver } from "../NodeResolver/";
import { Portal } from "../Portal/";
import { targetWidth, customApplyStyles } from "./modifiers/";
import { positionerTheme } from "./theme";
import { jsx as ___EmotionJSX } from "@emotion/core";

var getModifiers = function getModifiers(_ref) {
  var minWidth = _ref.minWidth,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      props = _objectWithoutPropertiesLoose(_ref, ["minWidth", "width", "maxWidth"]);

  var modifiersName = ['offset', 'arrow', 'flip', 'preventOverflow', 'hide'];
  var modifiers = [customApplyStyles, targetWidth];
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

export var Positioner = uiComponent('Positioner', positionerTheme)(function (props, _ref2) {
  var theme = _ref2.theme;

  var _useState = useState(Boolean(props.open)),
      localOpen = _useState[0],
      setLocalOpen = _useState[1];

  var targetRef = useRef(null);
  var referenceRef = useRef(null);
  var toggleTimerId = useRef();
  var options = useMemo(function () {
    return {
      strategy: props.strategy,
      placement: props.placement,
      modifiers: getModifiers(props)
    };
  }, [props.placement, props.strategy, props.offset, props.arrow, props.hide, props.flip, props.preventOverflow, props.minWidth, props.width, props.maxWidth]);
  var handleToggle = useCallback(function (toggle) {
    clearTimeout(toggleTimerId.current);
    toggleTimerId.current = setTimeout(function () {
      setLocalOpen(toggle);
      toggle ? props.onOpen && props.onOpen() : props.onClose && props.onClose();
    }, toggle ? props.delayIn : props.delayOut);
  }, [props.delayIn, props.delayOut, props.onClose, props.onOpen]); // Обрабатываем внещний стейт open

  useIsomorphicLayoutEffect(function () {
    if (props.open === undefined || props.open === localOpen) return;
    handleToggle(props.open);
  }, [props.open]); // Создаем инстанс popper

  useIsomorphicLayoutEffect(function () {
    var target = targetRef.current;
    var reference = referenceRef.current;
    if (!reference || !target) return;
    target.style.margin = '0px';
    var popper = createPopper(reference, target, options);
    return function () {
      popper.destroy();
    };
  }, [localOpen, options, props.usePortal]); // Устанавливаем глобальный обрабочики при открытии

  useEffect(function () {
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
  var reference = Children.only(props.children);
  var eventHandlers = {};
  var aria = {
    'aria-haspopup': true,
    'aria-expanded': localOpen
  };

  if (props.trigger === 'click') {
    eventHandlers = {
      onClick: invokeAll(reference.props.onClick, function () {
        return handleToggle(!localOpen);
      })
    };
  }

  if (props.trigger === 'hover') {
    eventHandlers = {
      onFocus: invokeAll(reference.props.onFocus, function () {
        return handleToggle(true);
      }),
      onBlur: invokeAll(reference.props.onBlur, function () {
        return handleToggle(false);
      }),
      onMouseEnter: invokeAll(reference.props.onMouseEnter, function () {
        return handleToggle(true);
      }),
      onMouseLeave: invokeAll(reference.props.onMouseLeave, function () {
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
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(NodeResolver, {
    ref: referenceRef
  }, /*#__PURE__*/cloneElement(reference, _extends({}, aria, eventHandlers))), ___EmotionJSX(Portal, {
    active: Boolean(props.usePortal)
  }, ___EmotionJSX(Transition, _extends({
    items: localOpen
  }, animation), function (style, item) {
    return item && ___EmotionJSX(animated.div, {
      ref: targetRef,
      style: style
    }, target);
  })));
});
//# sourceMappingURL=Positioner.js.map