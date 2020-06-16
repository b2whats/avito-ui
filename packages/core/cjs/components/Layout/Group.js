"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useGroupHook = useGroupHook;
exports.Group = exports.GroupContext = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

var _theme = require("../../theme");

var _Stack = require("./Stack");

var _core = require("@emotion/core");

var GroupContext = _react["default"].createContext(null);

exports.GroupContext = GroupContext;

function useGroupHook(ref, targetProps) {
  var groupContext = (0, _react.useContext)(GroupContext);
  if (!groupContext) return targetProps;

  var _useState = (0, _react.useState)(''),
      positions = _useState[0],
      setPositions = _useState[1];

  (0, _react.useEffect)(function () {
    if (groupContext && ref.current !== null) {
      groupContext.elements.current.push(ref.current);
      var node = ref.current;
      var prevNode = null;

      while (node) {
        if (node.matches('[role*=group]')) {
          var pos = [];
          node.firstElementChild === prevNode && pos.push('first');
          node.lastElementChild === prevNode && pos.push('last');
          setPositions(pos.join(' '));
          break;
        } else {
          prevNode = node;
          node = node.parentElement;
        }
      }

      var checked = groupContext.checked && groupContext.checked.includes(targetProps.value);

      if (groupContext.mode === 'radio' && checked) {
        (0, _scrollIntoViewIfNeeded["default"])(ref.current, {
          behavior: 'smooth',
          scrollMode: 'if-needed',
          boundary: node
        });
      }
    }
  }, []);

  if (groupContext.block) {
    targetProps.grow = true;
  }

  targetProps['data-group'] = (groupContext.orientation + " " + (groupContext.spacing ? 'spacing' : '') + " " + positions).trim();

  if (groupContext.onClick) {
    var checked = groupContext.checked && groupContext.checked.includes(targetProps.value);
    var isFirstChecked = !groupContext.checked && positions.includes('first');
    targetProps = (0, _extends2["default"])({
      checked: checked || false,
      role: groupContext.mode,
      disabled: groupContext.disabled,
      tabIndex: checked && !targetProps.disabled || isFirstChecked || groupContext.mode !== 'radio' ? 0 : -1,
      onClick: groupContext.onClick,
      onKeyDown: groupContext.onKeyDown
    }, targetProps);
  }

  return targetProps;
}

var Group = function Group(_ref) {
  var children = _ref.children,
      block = _ref.block,
      mode = _ref.mode,
      value = _ref.value,
      name = _ref.name,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children", "block", "mode", "value", "name", "disabled", "onChange"]);
  var elements = (0, _react.useRef)([]);

  if (!onChange && (0, _theme.useTheme)()._demo && mode === 'radio') {
    var _useState2 = (0, _react.useState)(value),
        fallbackValue = _useState2[0],
        fallbackChange = _useState2[1];

    onChange = function onChange(e) {
      return fallbackChange(e.value);
    };

    value = fallbackValue;
  }

  var onClick = function onClick(event) {
    if (!onChange || !mode) return;
    var _ref2 = event,
        target = _ref2.currentTarget;

    if (props.scroll) {
      (0, _scrollIntoViewIfNeeded["default"])(target, {
        behavior: 'smooth',
        scrollMode: 'if-needed'
      });
    }

    var tartetValue = Number.isNaN(Number(target.value)) ? target.value : Number(target.value);
    var update = {
      mode: mode,
      name: name,
      value: value,
      type: 'toggle-group'
    };

    if (mode === 'checkbox') {
      var checked = target.tagName === 'INPUT' ? !target.checked : target.getAttribute('aria-checked') === 'true';
      update.value = Array.isArray(value) ? checked ? value.filter(function (val) {
        return val !== tartetValue;
      }) : [].concat(value, [tartetValue]) : [tartetValue];
      update.value = update.value.length > 0 ? update.value : null;
    }

    if (mode === 'radio') {
      update.value = tartetValue;
    }

    onChange(update);
  };

  var onKeyDown = function onKeyDown(event) {
    var node = event.currentTarget;
    var currentIndex = elements.current.findIndex(function (element) {
      return element === node;
    });
    var count = elements.current.length;
    var next;

    do {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          currentIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
          next = elements.current[currentIndex];
          break;

        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          currentIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;
          next = elements.current[currentIndex];
          break;
      }
    } while (next && next.disabled);

    if (next) {
      next.focus();
      next.click();
    }
  };

  var orientation = props.column ? 'vertical' : 'horizontal';
  var context = {
    onClick: onChange ? onClick : undefined,
    onKeyDown: mode === 'radio' ? onKeyDown : undefined,
    checked: value !== null && value !== undefined ? Array.isArray(value) ? value : [value] : undefined,
    block: block,
    spacing: Boolean(props.spacing),
    mode: mode,
    disabled: disabled,
    elements: elements,
    orientation: orientation
  };
  var aria = {
    role: mode === 'radio' ? 'radiogroup' : 'group',
    'aria-orientation': orientation
  };
  return (0, _core.jsx)(GroupContext.Provider, {
    value: context
  }, (0, _core.jsx)(_Stack.Stack, (0, _extends2["default"])({
    inline: !block
  }, props, aria), children));
};

exports.Group = Group;
//# sourceMappingURL=Group.js.map