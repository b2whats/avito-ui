"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _core = require("@avito/core");

var _theme = require("./theme");

var variant = ['primary', 'secondary', 'success', 'error', 'warning'];

var withToggle = function withToggle(override) {
  return (0, _core.mergeTheme)(_core.toggleTheme, _theme.theme.Toggle, override);
};

describe('mobile theme', function () {
  it('button theme snap', function () {
    expect((0, _core.mergeTheme)(_core.buttonTheme, _theme.theme.Button)).toMatchSnapshot();
  });
  it('input theme snap', function () {
    expect((0, _core.mergeTheme)(_core.inputTheme, _theme.theme.Input)).toMatchSnapshot();
  });
  it('text theme snap', function () {
    expect((0, _core.mergeTheme)(_core.textTheme, _theme.theme.Text)).toMatchSnapshot();
  });
  describeTheme('checkbox', withToggle((0, _core.mergeTheme)(_core.checkboxTheme, _theme.theme.Checkbox)), {
    variant: variant,
    checked: [true, false],
    shape: ['circle', 'square']
  });
  describeTheme('radio', withToggle((0, _core.mergeTheme)(_core.radioTheme, _theme.theme.Radio)), {
    variant: variant,
    checked: [true, false]
  });
  describeTheme('switcher', withToggle((0, _core.mergeTheme)(_core.switcherTheme, _theme.theme.Switcher)), {
    variant: variant,
    checked: [true, false],
    loading: [true, false]
  });
  describeTheme('textarea', (0, _core.mergeTheme)(_core.textareaTheme, _theme.theme.Textarea), {
    variant: variant,
    clearable: [true, false],
    size: ['s', 'm', 'l']
  });
});

function describeTheme(name, theme, propValues) {
  describe(name, function () {
    it('snap', function () {
      return expect(theme).toMatchSnapshot();
    });
    it('fuzz', function () {
      return fuzz(propValues, theme);
    });
  });
}

function cartesian(valuesByKey) {
  var res = [{}];
  Object.entries(valuesByKey).forEach(function (_ref) {
    var key = _ref[0],
        values = _ref[1];
    res = values.reduce(function (acc, value) {
      return [].concat(acc, res.map(function (item) {
        var _extends2;

        return (0, _extends3["default"])({}, item, (_extends2 = {}, _extends2[key] = value, _extends2));
      }));
    }, []);
  });
  return res;
}

function fuzz(propValues, theme) {
  cartesian(propValues).forEach(function (props) {
    expect((0, _core.foldThemeParams)(props, theme)).toMatchSnapshot(JSON.stringify(props));
  });
}
//# sourceMappingURL=theme.snap.test.js.map