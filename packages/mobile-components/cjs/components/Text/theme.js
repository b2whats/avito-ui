"use strict";

exports.__esModule = true;
exports.textTheme = void 0;
var textTheme = {
  mapProps: function mapProps(_ref) {
    var preset = _ref.preset;

    switch (preset) {
      case 'title':
        return {
          mb: 36,
          size: 'xxl'
        };

      case 'title-small':
        return {
          dense: true,
          bold: true,
          mb: 26,
          size: 'xl'
        };

      case 'heading-large':
        return {
          dense: true,
          bold: true,
          mb: 22,
          size: 'l'
        };

      case 'heading':
        return {
          dense: true,
          mb: 22,
          size: 'l'
        };

      case 'heading-small':
        return {
          mb: 16,
          size: 'm'
        };
    }

    return {};
  }
};
exports.textTheme = textTheme;
//# sourceMappingURL=theme.js.map