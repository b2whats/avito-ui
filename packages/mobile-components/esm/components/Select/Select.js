import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
//@ts-nocheck
import React, { PureComponent } from 'react';
import { Input } from "../../";
import { SelectPopup } from "./SelectPopup";
import { jsx as ___EmotionJSX } from "@emotion/core";

function getItemById(items, id, keyProperty) {
  return items.find(function (item) {
    return item[keyProperty] === id;
  });
}

export var Select = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Select, _PureComponent);

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
        props = _objectWithoutPropertiesLoose(_this$props2, ["title", "items", "keyProperty", "displayProperty", "required", "selectedKey"]);

    var isPopupOpened = this.state.isPopupOpened;
    var selectedObject = getItemById(items, selectedKey, keyProperty);
    var value = selectedObject && selectedObject[displayProperty];
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Input, _extends({}, props, {
      placeholder: title,
      value: value,
      required: required,
      readOnly: true,
      clearable: true,
      onMouseDown: this.handleWrapperClick,
      onChange: this.handleInputChange
    })), isPopupOpened && ___EmotionJSX(SelectPopup, {
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
}(PureComponent);
Select.defaultProps = {
  keyProperty: 'id',
  displayProperty: 'title',
  required: false
};
//# sourceMappingURL=Select.js.map