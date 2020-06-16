var headingPreset = function headingPreset(size) {
  return {
    size: size,
    bold: true
  };
};

export var textTheme = {
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
//# sourceMappingURL=theme.js.map