"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Select = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../");

var _SelectPopup = require("./SelectPopup");

var _core = require("@emotion/core");

//@ts-nocheck
function getItemById(items, id, keyProperty) {
  return items.find(function (item) {
    return item[keyProperty] === id;
  });
}

var Select = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(Select, _PureComponent);

  function Select() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      isPopupOpened: false
    };

    _this.handleWrapperClick = function () {
      _this.setPopupVisible(true);
    };

    _this.handlePopupCancel = function () {
      _this.setPopupVisible(false);
    };

    _this.handlePopupConfirm = function (key) {
      _this.setPopupVisible(false);

      _this.setValue(key);
    };

    _this.handleInputChange = function () {
      var _this$props = _this.props,
          required = _this$props.required,
          selectedKey = _this$props.selectedKey;

      if (selectedKey && !required) {
        _this.resetValue();
      } else {
        _this.setPopupVisible(true);
      }
    };

    _this.setPopupVisible = function (f) {
      _this.setState({
        isPopupOpened: f
      });
    };

    _this.setValue = function (key) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(key);
      }
    };

    _this.resetValue = function () {
      _this.setValue(null);
    };

    return _this;
  }

  var _proto = Select.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        title = _this$props2.title,
        items = _this$props2.items,
        keyProperty = _this$props2.keyProperty,
        displayProperty = _this$props2.displayProperty,
        required = _this$props2.required,
        selectedKey = _this$props2.selectedKey,
        props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["title", "items", "keyProperty", "displayProperty", "required", "selectedKey"]);
    var isPopupOpened = this.state.isPopupOpened;
    var selectedObject = getItemById(items, selectedKey, keyProperty);
    var value = selectedObject && selectedObject[displayProperty];
    return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)(_.Input, (0, _extends2["default"])({}, props, {
      placeholder: title,
      value: value,
      required: required,
      readOnly: true,
      clearable: true,
      onMouseDown: this.handleWrapperClick,
      onChange: this.handleInputChange
    })), isPopupOpened && (0, _core.jsx)(_SelectPopup.SelectPopup, {
      items: items,
      title: title,
      keyProperty: keyProperty,
      displayProperty: displayProperty,
      selectedKey: selectedKey,
      onCancel: this.handlePopupCancel,
      onConfirm: this.handlePopupConfirm
    }));
  };

  return Select;
}(_react.PureComponent);

exports.Select = Select;
Select.defaultProps = {
  keyProperty: 'id',
  displayProperty: 'title',
  required: false
};
//# sourceMappingURL=Select.js.map