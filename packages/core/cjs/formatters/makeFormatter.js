"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.makeFormatter = makeFormatter;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

function makeFormatter(factory, defSettings) {
  return (0, _extends2["default"])({
    parse: function parse(value) {
      return value;
    }
  }, factory(defSettings), {
    setup: function setup(settings) {
      return makeFormatter(factory, (0, _extends2["default"])({}, defSettings, settings));
    },
    settings: defSettings,
    settingKeys: Object.keys(defSettings)
  });
}
//# sourceMappingURL=makeFormatter.js.map