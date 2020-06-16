import _extends from "@babel/runtime/helpers/esm/extends";
export function makeFormatter(factory, defSettings) {
  return _extends({
    parse: function parse(value) {
      return value;
    }
  }, factory(defSettings), {
    setup: function setup(settings) {
      return makeFormatter(factory, _extends({}, defSettings, settings));
    },
    settings: defSettings,
    settingKeys: Object.keys(defSettings)
  });
}
//# sourceMappingURL=makeFormatter.js.map