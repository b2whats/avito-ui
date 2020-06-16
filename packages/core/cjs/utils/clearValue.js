"use strict";

exports.__esModule = true;
exports.clearValue = clearValue;

/**
 * clear editable element using execCommand to preserve undo history
 * NOTE: element must be focusable — not disabled / readOnly
 */
function clearValue(element) {
  if (!element) return;
  element.focus();

  if (document.activeElement !== element) {
    throw new Error('@avito: can not clear a non-focusable element');
  }

  document.execCommand('selectAll');
  document.execCommand('delete');

  if (Boolean(element.value)) {
    throw new Error('@avito: element clear failed');
  }
}
//# sourceMappingURL=clearValue.js.map