import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    top: 14px;\n    left: 11px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    text-align: center;\n    position: relative;\n    padding: 16px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    left: 0;\n    top: 0;\n    background-color: #fff;\n    z-index: 99999;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//@ts-nocheck
import React from 'react';
import { css } from '@avito/core';
import { Text, Stack, ListItem, Checkmark } from "../../";
import { CrossIcon } from "../Icon";
import { jsx as ___EmotionJSX } from "@emotion/core";
var styles = {
  root: css(_templateObject()),
  header: css(_templateObject2()),
  close: css(_templateObject3())
};
export function SelectPopup(_ref) {
  var items = _ref.items,
      title = _ref.title,
      keyProperty = _ref.keyProperty,
      displayProperty = _ref.displayProperty,
      selectedKey = _ref.selectedKey,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  return ___EmotionJSX("div", {
    css: styles.root
  }, ___EmotionJSX("div", {
    css: styles.header
  }, ___EmotionJSX("span", {
    css: styles.close
  }, ___EmotionJSX(CrossIcon, {
    size: "l",
    onClick: onCancel
  })), ___EmotionJSX(Text, {
    bold: true
  }, title)), ___EmotionJSX(Stack, {
    column: true
  }, items.map(function (item) {
    return ___EmotionJSX(ListItem, {
      key: item[keyProperty],
      label: item[displayProperty],
      after: ___EmotionJSX(Checkmark, {
        checked: selectedKey === item[keyProperty]
      }),
      onClick: function onClick() {
        return onConfirm(item[keyProperty]);
      }
    });
  })));
}
//# sourceMappingURL=SelectPopup.js.map