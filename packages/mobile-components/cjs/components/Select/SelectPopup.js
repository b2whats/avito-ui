"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SelectPopup = SelectPopup;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@avito/core");

var _ = require("../../");

var _Icon = require("../Icon");

var _core2 = require("@emotion/core");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n    position: absolute;\n    top: 14px;\n    left: 11px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n    text-align: center;\n    position: relative;\n    padding: 16px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    left: 0;\n    top: 0;\n    background-color: #fff;\n    z-index: 99999;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var styles = {
  root: (0, _core.css)(_templateObject()),
  header: (0, _core.css)(_templateObject2()),
  close: (0, _core.css)(_templateObject3())
};

function SelectPopup(_ref) {
  var items = _ref.items,
      title = _ref.title,
      keyProperty = _ref.keyProperty,
      displayProperty = _ref.displayProperty,
      selectedKey = _ref.selectedKey,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  return (0, _core2.jsx)("div", {
    css: styles.root
  }, (0, _core2.jsx)("div", {
    css: styles.header
  }, (0, _core2.jsx)("span", {
    css: styles.close
  }, (0, _core2.jsx)(_Icon.CrossIcon, {
    size: "l",
    onClick: onCancel
  })), (0, _core2.jsx)(_.Text, {
    bold: true
  }, title)), (0, _core2.jsx)(_.Stack, {
    column: true
  }, items.map(function (item) {
    return (0, _core2.jsx)(_.ListItem, {
      key: item[keyProperty],
      label: item[displayProperty],
      after: (0, _core2.jsx)(_.Checkmark, {
        checked: selectedKey === item[keyProperty]
      }),
      onClick: function onClick() {
        return onConfirm(item[keyProperty]);
      }
    });
  })));
}
//# sourceMappingURL=SelectPopup.js.map