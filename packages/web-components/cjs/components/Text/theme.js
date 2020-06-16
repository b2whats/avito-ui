"use strict";

exports.__esModule = true;
exports.textTheme = void 0;

var headingPreset = function headingPreset(size) {
  return {
    size: size,
    bold: true
  };
};

var textTheme = {
  mapProps: function mapProps(_ref) {
    var preset = _ref.preset;

    switch (preset) {
      case 'title':
        return headingPreset('xxxl');

      case 'title-small':
        return headingPreset('xxl');

      case 'heading-large':
        return headingPreset('xl');

      case 'heading':
        return headingPreset('l');

      case 'heading-small':
        return headingPreset('m');
    }

    return {};
  }
};
exports.textTheme = textTheme;
//# sourceMappingURL=theme.js.map