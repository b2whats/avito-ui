import { numberFormatter } from "./numberFormatter";

var pipeFormatter = function pipeFormatter(_ref) {
  var format = _ref.format,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? function (id) {
    return id;
  } : _ref$replace;
  return function (raw) {
    return replace(format(raw));
  };
};

describe('numberFormatter', function () {
  describe('default integer format', function () {
    var pipe = pipeFormatter(numberFormatter);
    it('preserves empty string', function () {
      return expect(pipe('')).toBe('');
    });
    it('separates thousands', function () {
      expect(pipe('123')).toBe('123');
      expect(pipe('1234567')).toBe('1 234 567');
      expect(pipe('123456789')).toBe('123 456 789');
    });
    it('excludes disallowed symbols', function () {
      return expect(pipe('  1 a2  b 3c  ')).toBe('123');
    });
    it('trims fraction', function () {
      return expect(pipe('1.23')).toBe('123');
    });
    it('trims big numbers', function () {
      expect(pipe('12345678901234567890')).toBe('123 456 789 012 345');
      expect(pipe('    12345678901234567890')).toBe('123 456 789 012 345');
    });
  });
  describe('positiveOnly', function () {
    var pipe = pipeFormatter(numberFormatter.setup({
      positiveOnly: false
    }));
    it('removes sign by default', function () {
      return expect(pipeFormatter(numberFormatter)('-123')).toBe('123');
    });
    it('preserves minus sign when positiveOnly=false', function () {
      return expect(pipe('-123')).toBe('-123');
    });
    it('trims second minus sign', function () {
      return expect(pipe('-1-2')).toBe('-12');
    });
  });
  describe('leading zeroes', function () {
    var pipe = pipeFormatter(numberFormatter);
    it('removes leadizng zeroes', function () {
      return expect(pipe('000001')).toBe('1');
    });
    it('preserves last zero', function () {
      return expect(pipe('000000')).toBe('0');
    });
    it('preserves single zero', function () {
      return expect(pipe('0')).toBe('0');
    });
  });
  describe('maxIntDigits', function () {
    var pipe = pipeFormatter(numberFormatter.setup({
      maxIntDigits: 3,
      positiveOnly: false
    }));
    it('is configurable', function () {
      return expect(pipe('12345')).toBe('123');
    });
    it('does not include minus sign', function () {
      return expect(pipe('-123')).toBe('-123');
    });
    it('does not include leading zeroes', function () {
      return expect(pipe('0123')).toBe('123');
    });
  });
  describe('fraction format', function () {
    var pipe = pipeFormatter(numberFormatter.setup({
      maxFracDigits: 4
    }));
    it('preserves empty string', function () {
      return expect(pipe('')).toBe('');
    });
    it('separates thousands', function () {
      return expect(pipe('123456789')).toBe('123 456 789');
    });
    it('does not separate frac', function () {
      return expect(pipe('123456789.9999')).toBe('123 456 789.9999');
    });
    it('normalizes decimal separator', function () {
      return expect(pipe('123,9999')).toBe('123.9999');
    });
    it('trims muliple fraction', function () {
      return expect(pipe('123.45.66')).toBe('123.45');
    });
    it('trims long fraction', function () {
      return expect(pipe('9.12345678901234567890')).toBe('9.1234');
    });
    it('preserves trailing comma', function () {
      return expect(pipe('9.')).toBe('9.');
    });
  });
});
//# sourceMappingURL=numberFormatter.test.js.map