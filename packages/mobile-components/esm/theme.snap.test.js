import _extends from "@babel/runtime/helpers/esm/extends";
import { mergeTheme, foldThemeParams, buttonTheme, inputTheme, textTheme, checkboxTheme, toggleTheme, textareaTheme, radioTheme, switcherTheme } from '@avito/core';
import { theme } from "./theme";
var variant = ['primary', 'secondary', 'success', 'error', 'warning'];

var withToggle = function withToggle(override) {
  return mergeTheme(toggleTheme, theme.Toggle, override);
};

describe('mobile theme', function () {
  it('button theme snap', function () {
    expect(mergeTheme(buttonTheme, theme.Button)).toMatchSnapshot();
  });
  it('input theme snap', function () {
    expect(mergeTheme(inputTheme, theme.Input)).toMatchSnapshot();
  });
  it('text theme snap', function () {
    expect(mergeTheme(textTheme, theme.Text)).toMatchSnapshot();
  });
  describeTheme('checkbox', withToggle(mergeTheme(checkboxTheme, theme.Checkbox)), {
    variant: variant,
    checked: [true, false],
    shape: ['circle', 'square']
  });
  describeTheme('radio', withToggle(mergeTheme(radioTheme, theme.Radio)), {
    variant: variant,
    checked: [true, false]
  });
  describeTheme('switcher', withToggle(mergeTheme(switcherTheme, theme.Switcher)), {
    variant: variant,
    checked: [true, false],
    loading: [true, false]
  });
  describeTheme('textarea', mergeTheme(textareaTheme, theme.Textarea), {
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

        return _extends({}, item, (_extends2 = {}, _extends2[key] = value, _extends2));
      }));
    }, []);
  });
  return res;
}

function fuzz(propValues, theme) {
  cartesian(propValues).forEach(function (props) {
    expect(foldThemeParams(props, theme)).toMatchSnapshot(JSON.stringify(props));
  });
}
//# sourceMappingURL=theme.snap.test.js.map