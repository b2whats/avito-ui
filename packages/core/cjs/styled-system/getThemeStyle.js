"use strict";

exports.__esModule = true;
exports.foldThemeParams = foldThemeParams;
exports.createClassName = createClassName;
exports.getStyles = exports.foldScheme = void 0;

var _core = require("@emotion/core");

var computedCrop = function computedCrop(crop, targetHeight) {
  var value = (crop + (targetHeight - 1) * 16) / 32;
  return Math.round(value * 100) / 100;
};

var spaceValue = function spaceValue(value, spaces) {
  if (typeof value === 'number') {
    return value + "px";
  } else {
    return spaces[value] ? spaces[value] + "px" : value === 'auto' ? 'auto' : '0px';
  }
};

var maps = {
  inline: {
    block: 'inline-block',
    inline: 'inline-block',
    'inline-block': 'inline-block',
    'flex': 'inline-flex',
    'inline-flex': 'inline-flex'
  },
  block: {
    block: 'block',
    inline: 'block',
    'inline-block': 'block',
    'flex': 'flex',
    'inline-flex': 'flex'
  },
  align: {
    block: 'text-align',
    inline: 'text-align',
    'inline-block': 'text-align',
    'flex': 'justify-content',
    'inline-flex': 'justify-content'
  },
  justifyContent: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    justify: 'space-between'
  },
  alignColumn: {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    justify: 'stretch'
  },
  alignFlex: {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
    baseline: 'baseline',
    stretch: 'stretch'
  },
  verticalAlign: {
    top: 'top',
    middle: 'middle',
    bottom: 'bottom',
    baseline: 'baseline',
    stretch: 'baseline'
  },
  dimension: {
    width: 'width',
    maxWidth: 'max-width',
    minWidth: 'min-width',
    height: 'height',
    maxHeight: 'max-height',
    minHeight: 'min-height'
  },
  color: {
    color: 'color',
    colorHover: 'color',
    colorActive: 'color',
    colorVisited: 'color',
    colorFocus: 'color',
    colorChecked: 'color',
    colorDisabled: 'color',
    bg: 'background-color',
    bgHover: 'background-color',
    bgActive: 'background-color',
    bgVisited: 'background-color',
    bgFocus: 'background-color',
    bgChecked: 'background-color',
    bgDisabled: 'background-color',
    borderColor: 'border-color',
    borderColorHover: 'border-color',
    borderColorActive: 'border-color',
    borderColorVisited: 'border-color',
    borderColorFocus: 'border-color',
    borderColorChecked: 'border-color',
    borderColorDisabled: 'border-color'
  },
  webkitSmoothing: {
    auto: 'auto',
    antialiased: 'antialiased',
    subpixel: 'subpixel-antialiased'
  },
  mozSmoothing: {
    auto: 'auto',
    antialiased: 'grayscale',
    subpixel: 'grayscale'
  }
};

var execComputables = function execComputables(object, arg) {
  for (var _key in object) {
    if (typeof object[_key] === 'function') {
      object[_key] = object[_key](arg);
    }
  }

  return object;
};

var foldScheme = function foldScheme(scheme, props, only) {
  var result = {
    style: {},
    props: {},
    component: null
  };
  if (!scheme) return result;

  for (var prop in scheme) {
    if (['style', 'props'].includes(prop) && (!only || only === prop)) {
      Object.assign(result[prop], scheme[prop]);
      continue;
    }

    if (prop === 'component' && (!only || only === prop)) {
      result.component = scheme.component;
      continue;
    }

    var value = props[prop];
    var nestedConfig = scheme[prop];
    var switchBranch = nestedConfig[value];

    if (switchBranch) {
      var data = foldScheme(switchBranch, props, only);
      Object.assign(result.style, data.style);
      Object.assign(result.props, data.props);
      data.component && (result.component = data.component);
      continue;
    }

    if (value) {
      var _data = foldScheme(nestedConfig, props, only);

      Object.assign(result.style, _data.style);
      Object.assign(result.props, _data.props);
      _data.component && (result.component = _data.component);
    }
  }

  execComputables(result.props, props);
  execComputables(result.style, props);
  return result;
};

exports.foldScheme = foldScheme;

var getStyles = function getStyles(params, tokens) {
  var css = 'box-sizing: border-box;';
  var font = tokens.font,
      dimension = tokens.dimension,
      space = tokens.space,
      palette = tokens.palette,
      focus = tokens.focus,
      shape = tokens.shape;
  if (!params) return css;
  var margin = [];
  var padding = [];
  var hoverState = [];
  var activeState = [];
  var visitedState = [];
  var focusState = [];
  var disabledState = [];
  var checkedState = [];
  var display = '';
  var width = '';

  var colorRule = function colorRule(param, value) {
    if (!/^overlay/.test(param)) {
      return maps.color[param] + ": " + (palette[value] || value) + ";";
    }

    var _params$borderWidth = params.borderWidth,
        borderWidth = _params$borderWidth === void 0 ? 0 : _params$borderWidth;
    return "\n      &::after {\n        content: \"\";\n        position: absolute;\n        pointer-events: none;\n        left: -" + borderWidth + "px;\n        right: -" + borderWidth + "px;\n        top: -" + borderWidth + "px;\n        bottom: -" + borderWidth + "px;\n        border-radius: inherit;\n        background: " + (palette[value] || value) + ";\n      }\n    ";
  };

  for (var _param in params) {
    var param = _param;
    var value = params[_param];
    if (value === null || value === undefined) continue; // Exhaustive switch

    switch (param) {
      case 'fontFamily':
        css += "font-family: " + value + ";";
        break;

      case 'fontSize':
        css += "font-size: " + (font.fontSize[value] || value) + "px;";
        break;

      case 'lineHeight':
        css += "line-height: " + (font.lineHeight[value] || value) + ";";
        break;

      case 'letterSpacing':
        css += "letter-spacing: " + value + "px;";
        break;

      case 'fontWeight':
        if (params.bold || params.light) break;
        css += "font-weight: " + value + ";";
        break;

      case 'bold':
        css += 'font-weight: 600;';
        break;

      case 'light':
        css += 'font-weight: 300;';
        break;

      case 'italic':
        css += 'font-style: italic;';
        break;

      case 'noWrap':
        css += 'white-space: nowrap;';
        break;

      case 'pre':
        css += 'white-space: pre;';
        break;

      case 'wrap':
        css += 'flex-wrap: wrap; word-break: break-all;';
        break;

      case 'uppercase':
        css += 'text-transform: uppercase;';
        break;

      case 'truncate':
        display = 'inline-block';
        css += "\n          max-width: 100%;\n          vertical-align: top;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow-wrap: normal;\n          overflow: hidden;\n        ";
        break;

      case 'crop':
        {
          if (!params.lineHeight) break;
          var lineHeight = font.lineHeight[params.lineHeight] || params.lineHeight;
          display = 'inline-block';
          css += "\n          && {\n            margin-top: 0;\n            margin-bottom: 0;\n          }\n\n          &::before, &::after {\n            content: '';\n            display: block;\n            height: 0;\n            width: 0;\n          }\n\n          &::before { margin-bottom: -" + computedCrop(font.crop.top, lineHeight) + "em }\n          &::after { margin-top: -" + computedCrop(font.crop.bottom, lineHeight) + "em }\n        ";
          break;
        }

      case 'underline':
        css += "\n          cursor: pointer;\n\n          padding-bottom: " + font.underline.offset + "px;\n          border-bottom: " + font.underline.height + "px " + (typeof value === 'string' ? value : 'solid') + " currentColor;\n        ";
        break;

      case 'smoothing':
        css += "\n          -webkit-font-smoothing: " + maps.webkitSmoothing[value] + ";\n          -moz-osx-font-smoothing: " + maps.mozSmoothing[value] + ";\n        ";
        break;

      case 'width':
        width = value > 1 ? value + "px" : value * 100 + "%";
        break;

      case 'minWidth':
      case 'maxWidth':
        css += maps.dimension[param] + ": " + (value > 1 ? value + "px" : value * 100 + "%") + ";";
        break;

      case 'height':
      case 'minHeight':
      case 'maxHeight':
        value = dimension.rowHeight[value] || value;

        if (value === 'auto') {
          css += maps.dimension[param] + ": auto;";
        } else {
          css += maps.dimension[param] + ": " + (value > 1 ? value + "px" : value * 100 + "%") + ";";
        }

        break;

      case 'display':
        display = value;
        break;

      case 'inline':
        display = params.display ? maps.inline[params.display] : 'inline-block';
        width = '';
        break;

      case 'block':
        {
          display = params.display ? maps.block[params.display] : 'block';
          width = '100%';
          break;
        }

      case 'grow':
        css += "flex-grow: " + (value ? '1' : '0') + ";";
        break;

      case 'shrink':
        css += "flex-shrink: " + (value ? '1' : '0') + ";";
        break;

      case 'borderWidth':
        css += "border-width: " + value + "px;";
        if (params.borderStyle) break;
        css += 'border-style: solid;';
        break;

      case 'rounded':
      case 'borderRadius':
        if (params.shape === 'circle' || params.shape === 'pill') break; // NOTE: для круга лучше использовать shape

        css += "border-radius: " + (value === 'circle' ? '100' : shape.borderRadius[value] || value) + "px;";
        break;

      case 'align':
        {
          if (!params.display) break;
          var prop = void 0;

          if (params.column) {
            prop = 'align-items';
            value = maps.alignColumn[value];
          } else {
            prop = maps.align[params.display];

            if (prop === 'justify-content') {
              value = maps.justifyContent[value];
            }
          }

          css += prop + ": " + value + ";";
          break;
        }

      case 'valign':
        css += "align-items: " + maps.alignFlex[value] + ";";
        break;

      case 'valignSelf':
        {
          css += "align-self: " + maps.alignFlex[value] + ";vertical-align: " + maps.verticalAlign[value] + ";";
          break;
        }

      case 'column':
        css += 'flex-direction: column;';
        break;

      case 'm':
        value = spaceValue(value, space);
        margin = [value, value, value, value];
        break;

      case 'mx':
        value = spaceValue(value, space);
        margin[1] = value;
        margin[3] = value;
        break;

      case 'my':
        value = spaceValue(value, space);
        margin[0] = value;
        margin[2] = value;
        break;

      case 'mt':
        value = spaceValue(value, space);
        margin[0] = value;
        break;

      case 'mr':
        value = spaceValue(value, space);
        margin[1] = value;
        break;

      case 'mb':
        value = spaceValue(value, space);
        margin[2] = value;
        break;

      case 'ml':
        value = spaceValue(value, space);
        margin[3] = value;
        break;

      case 'p':
        value = spaceValue(value, space);
        padding = ["padding-top: " + value + ";", "padding-right: " + value + ";", "padding-bottom: " + value + ";", "padding-left: " + value + ";"];
        break;

      case 'px':
        value = spaceValue(value, space);
        padding[1] = "padding-right: " + value + ";";
        padding[3] = "padding-left: " + value + ";";
        break;

      case 'py':
        value = spaceValue(value, space);
        padding[0] = "padding-top: " + value + ";";
        padding[2] = "padding-bottom: " + value + ";";
        break;

      case 'pt':
        value = spaceValue(value, space);
        padding[0] = "padding-top: " + value + ";";
        break;

      case 'pr':
        value = spaceValue(value, space);
        padding[1] = "padding-right: " + value + ";";
        break;

      case 'pb':
        value = spaceValue(value, space);
        padding[2] = "padding-bottom: " + value + ";";
        break;

      case 'pl':
        value = spaceValue(value, space);
        padding[3] = "padding-left: " + value + ";";
        break;

      case 'color':
      case 'bg':
      case 'borderColor':
      case 'overlay':
        css += colorRule(param, value);
        break;

      case 'colorHover':
      case 'bgHover':
      case 'borderColorHover':
      case 'overlayHover':
        hoverState.push(colorRule(param, value));
        break;

      case 'colorActive':
      case 'bgActive':
      case 'borderColorActive':
      case 'overlayActive':
        activeState.push(colorRule(param, value));
        break;

      case 'colorVisited':
      case 'bgVisited':
      case 'borderColorVisited':
      case 'overlayVisited':
        visitedState.push(colorRule(param, value));
        break;

      case 'colorFocus':
      case 'bgFocus':
      case 'borderColorFocus':
      case 'overlayFocus':
        focusState.push(colorRule(param, value));
        break;

      case 'colorChecked':
      case 'bgChecked':
      case 'borderColorChecked':
      case 'overlayChecked':
        checkedState.push(colorRule(param, value));
        break;

      case 'colorDisabled':
      case 'bgDisabled':
      case 'borderColorDisabled':
      case 'overlayDisabled':
        disabledState.push(colorRule(param, value));
        break;

      case 'placeholderColor':
        css += "&::placeholder, & *::placeholder, & *[data-placeholder] {color: " + (palette[value] || value) + ";-webkit-text-fill-color: currentcolor;}";
        break;

      case 'borderStyle':
        css += "border-style: " + value + ";";
        break;

      case 'position':
        css += "position: " + value + ";";
        break;

      case 'top':
      case 'bottom':
      case 'left':
      case 'right':
        css += param + ": " + (Math.abs(value) > 1 ? value + "px" : value * 100 + "%") + ";";
        break;

      case 'focus':
        {
          css += 'outline: none;';
          if (!value) break;
          var color = typeof value === 'string' ? value : focus.color[params.variant || 'default'];
          focusState.push("\n          box-shadow: " + focus.shape + " " + (palette[color] || color) + ";\n          position: relative;\n          z-index: 2;\n        ");
          break;
        }

      case 'visible':
        css += value === false ? 'visibility: hidden;' : '';
        break;

      case 'opacity':
        css += "opacity: " + value + ";";
        break;

      case 'disabled':
        if (!value) break;
        css += 'pointer-events: none;';
        break;

      case 'shape':
        {
          if (value === 'circle') {
            /**
             * Блинк округляет большой радиус до целого вниз, заметно на маленьких кружочках нечетной высоты
             * https://jr.avito.ru/browse/MDP-1395
             */
            css += 'border-radius: 50%;';
          }

          if (value === 'pill') {
            // не совсем круглые колбаски пусть уж будут
            css += 'border-radius: 100px;';
          }

          if (value === 'circle' || value === 'square') {
            var targetHeight = params.height || params.minHeight;

            if (targetHeight) {
              width = (dimension.rowHeight[targetHeight] || targetHeight) + "px;";
            }
          }

          break;
        }

      case 'shadow':
        {
          if (typeof value !== 'string') break;
          css += "box-shadow: " + value + ";";
          break;
        }

      case 'pointerEvents':
        {
          css += "pointer-events: " + (value ? 'auto' : 'none') + ";";
          break;
        }

      default:
        // Exhaustive switch guard
        assertExhaustive(param);
    }
  }

  if (padding.length !== 0) {
    css += "&&& {\n      " + padding.join('') + "\n    }";
  }

  if (margin.length !== 0) {
    css += "&&& {\n      " + (margin[0] ? "margin-top: " + margin[0] + ";" : '') + "\n      " + (margin[1] ? "margin-right: " + margin[1] + ";" : '') + "\n      " + (margin[2] ? "margin-bottom: " + margin[2] + ";" : '') + "\n      " + (margin[3] ? "margin-left: " + margin[3] + ";" : '') + "\n    }";
  }

  var selector = null;

  if (params.adjacentSelector) {
    var before = params.adjacentSelector;
    selector = {
      checked: before + ":checked + &, " + before + "[aria-checked=true] + &",
      visited: before + ":visited + &",
      hover: before + ":hover + &",
      active: before + ":enabled:active + &, " + before + "[data-state=active] + &",
      focus: before + ":focus + &",
      disabled: before + ":disabled + &, " + before + "[aria-disabled=true] + &"
    };
  } else {
    selector = {
      checked: '&[aria-checked=true], &[data-state~=checked]',
      visited: '&:visited',
      hover: '&:hover',
      active: '&:not(:disabled):active, &[data-state~=active]',
      focus: '&&:focus, &&[data-state~=focus]',
      disabled: '&:disabled, &[aria-disabled=true], &[data-state~=disabled]'
    };
  }

  if (checkedState.length) {
    css += selector.checked + "{" + checkedState.join('') + "}";
  }

  if (visitedState.length) {
    css += selector.visited + "{" + visitedState.join('') + "}";
  }

  if (hoverState.length) {
    css += selector.hover + "{" + hoverState.join('') + "}";
  }

  if (activeState.length) {
    css += selector.active + "{" + activeState.join('') + "}";
  }

  if (focusState.length) {
    css += selector.focus + "{" + focusState.join('') + "}";
  }

  if (disabledState.length) {
    css += selector.disabled + "{" + disabledState.join('') + "}";
  }

  if (width.endsWith('%') && (margin[1] || margin[3])) {
    width = "calc(" + width + " - " + (margin[1] || '0px') + " - " + (margin[3] || '0px') + ")";
  }

  if (width) {
    css += "width: " + width + ";";
  }

  if (display) {
    css += "display: " + display + ";";
  }

  return css;
};

exports.getStyles = getStyles;

function foldThemeParams(props, _ref) {
  var scheme = _ref.scheme;
  var result = {};
  var name;

  for (name in scheme) {
    result[name] = foldScheme(scheme[name], props);
  }

  return result;
}

function createClassName(createRule, createUserRule) {
  return function (props, theme, schemeStyle) {
    var styles = createRule(schemeStyle, props, theme);
    var textRules = getStyles(styles, theme);
    var resultRules = createUserRule ? createUserRule(textRules, props, theme, schemeStyle) : textRules;
    return typeof resultRules === 'string' ? /*#__PURE__*/(0, _core.css)(resultRules, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZWQtc3lzdGVtL2dldFRoZW1lU3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbytCZ0QiLCJmaWxlIjoiLi4vLi4vc3JjL3N0eWxlZC1zeXN0ZW0vZ2V0VGhlbWVTdHlsZS50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUb2tlbnMsIHRva2VucyB9IGZyb20gJ0Bhdml0by90b2tlbnMnXG5cbnR5cGUgVGhlbWUgPSBUb2tlbnNcblxuZXhwb3J0IHR5cGUgVGV4dFByb3BlcnRpZXMgPSBQYXJ0aWFsPHtcbiAgZm9udEZhbWlseTogc3RyaW5nLFxuICBmb250U2l6ZTogJ3hzJyB8ICdzJyB8ICdtJyB8ICdsJyB8ICd4bCcgfCAneHhsJyB8ICd4eHhsJyB8ICd4eHh4bCcgfCAneHh4eHhsJyB8IG51bWJlciB8IHN0cmluZyxcbiAgbGluZUhlaWdodDogJ2luaGVyaXQnIHwgJ25vbmUnIHwgJ25vcm1hbCcgfCAnZGVuc2UnIHwgbnVtYmVyLFxuICBsZXR0ZXJTcGFjaW5nOiBudW1iZXIsXG4gIGZvbnRXZWlnaHQ6ICdsaWdodCcgfCAnbm9ybWFsJyB8ICdib2xkJyxcbiAgaXRhbGljOiBib29sZWFuLFxuICBub1dyYXA6IGJvb2xlYW4sXG4gIHdyYXA6IGJvb2xlYW4sXG4gIHByZTogYm9vbGVhbixcbiAgYm9sZDogYm9vbGVhbixcbiAgbGlnaHQ6IGJvb2xlYW4sXG4gIHVwcGVyY2FzZTogYm9vbGVhbixcbiAgdHJ1bmNhdGU6IGJvb2xlYW4sXG4gIGNyb3A6IGJvb2xlYW4sXG4gIHVuZGVybGluZTogYm9vbGVhbiB8ICdkb3R0ZWQnIHwgJ2Rhc2hlZCcsXG4gIHNtb290aGluZzogJ2F1dG8nIHwgJ2FudGlhbGlhc2VkJyB8ICdzdWJwaXhlbCcsXG59PlxuXG50eXBlIFdpZHRoID0gbnVtYmVyXG50eXBlIEhlaWdodCA9ICdzJyB8ICdtJyB8ICdsJyB8ICdhdXRvJyB8IG51bWJlclxuXG5leHBvcnQgdHlwZSBEaW1lbnNpb25Qcm9wZXJ0aWVzID0gUGFydGlhbDx7XG4gIC8qKiDQqNC40YDQuNC90LAg0LHQu9C+0LrQsCAqL1xuICB3aWR0aD86IFdpZHRoLFxuICAvKiog0JzQsNC60YHQuNC80LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQsdC70L7QutCwICovXG4gIG1heFdpZHRoPzogV2lkdGgsXG4gIC8qKiDQnNC40L3QuNC80LDQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQsdC70L7QutCwICovXG4gIG1pbldpZHRoPzogV2lkdGgsXG4gIC8qKiDQktGL0YHQvtGC0LAg0LHQu9C+0LrQsCAqL1xuICBoZWlnaHQ/OiBIZWlnaHQsXG4gIC8qKiDQnNC40L3QuNC80LDQu9GM0L3QsNGPINCy0YvRgdC+0YLQsCDQsdC70L7QutCwICovXG4gIG1pbkhlaWdodD86IEhlaWdodCxcbiAgLyoqINCc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDQstGL0YHQvtGC0LAg0LHQu9C+0LrQsCAqL1xuICBtYXhIZWlnaHQ/OiBIZWlnaHQsXG4gIC8qKiDQo9C80LXQvdGM0YjQsNGC0Ywg0L/RgNC4INC90LXRhdCy0LDRgtC60LUg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstCwICovXG4gIHNocmluaz86IGJvb2xlYW4sXG4gIC8qKiDQl9Cw0L3Rj9GC0Ywg0LLRgdC1INCy0L7Qt9C80L7QttC30L3QvtC1INC/0YDQvtGB0YLRgNCw0L3RgdGC0LLQviAqL1xuICBncm93PzogYm9vbGVhbixcbn0+XG5cbnR5cGUgRGlzcGxheSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB8ICdpbmxpbmUnIHwgJ2lubGluZS1ibG9jaycgfCAnZmxleCcgfCAnaW5saW5lLWZsZXgnIHwgbnVsbCB9XG5leHBvcnQgdHlwZSBWaXNpYmlsaXR5UHJvcGVydGllcyA9IFBhcnRpYWw8e1xuICB2aXNpYmxlOiBib29sZWFuLFxuICBvcGFjaXR5OiBudW1iZXJcbn0+XG5cbnR5cGUgU3BhY2VWYWx1ZXMgPSBrZXlvZiBUaGVtZVsnc3BhY2UnXSB8ICdub25lJyB8ICdhdXRvJyB8IG51bWJlclxuXG5leHBvcnQgdHlwZSBNYXJnaW5Qcm9wZXJ0aWVzID0gUGFydGlhbDx7XG4gIC8qKiDQktC90LXRiNC90LjQuSDQvtGC0YHRgtGD0L8g0YHQviDQstGB0LXRhSDRgdGC0L7RgNC+0L0gKi9cbiAgbTogU3BhY2VWYWx1ZXMsXG4gIC8qKiDQktC90LXRiNC90LjQuSDQvtGC0YHRgtGD0L8g0YHQu9GD0LLQsCDQuCDRgdC/0YDQsNCy0LAgKi9cbiAgbXg6IFNwYWNlVmFsdWVzLFxuICAvKiog0JLQvdC10YjQvdC40Lkg0L7RgtGB0YLRg9C/INGB0LLQtdGA0YXRgyDQuCDRgdC90LjQt9GDICovXG4gIG15OiBTcGFjZVZhbHVlcyxcbiAgLyoqINCS0L3QtdGI0L3QuNC5INC+0YLRgdGC0YPQvyDRgdCy0LXRgNGF0YMgKi9cbiAgbXQ6IFNwYWNlVmFsdWVzLFxuICAvKiog0JLQvdC10YjQvdC40Lkg0L7RgtGB0YLRg9C/INGB0L/RgNCw0LLQsCAqL1xuICBtcjogU3BhY2VWYWx1ZXMsXG4gIC8qKiDQktC90LXRiNC90LjQuSDQvtGC0YHRgtGD0L8g0YHQvdC40LfRgyAqL1xuICBtYjogU3BhY2VWYWx1ZXMsXG4gIC8qKiDQktC90LXRiNC90LjQuSDQvtGC0YHRgtGD0L8g0YHQu9C10LLQsCAqL1xuICBtbDogU3BhY2VWYWx1ZXMsXG59PlxuZXhwb3J0IHR5cGUgUGFkZGluZ1Byb3BlcnRpZXMgPSBQYXJ0aWFsPHtcbiAgLyoqINCS0L3Rg9GC0YDQtdC90L3QuNC5INC+0YLRgdGC0YPQvyAqL1xuICBwOiBTcGFjZVZhbHVlcyxcbiAgLyoqINCS0L3Rg9GC0YDQtdC90L3QuNC5INC+0YLRgdGC0YPQvyDRgdC70LXQstCwINC4INGB0L/RgNCw0LLQsCAqL1xuICBweDogU3BhY2VWYWx1ZXMsXG4gIC8qKiDQktC90YPRgtGA0LXQvdC90LjQuSDQvtGC0YHRgtGD0L8g0YHQstC10YDRhdGDINC4INGB0L3QuNC30YMgKi9cbiAgcHk6IFNwYWNlVmFsdWVzLFxuICAvKiog0JLQvdGD0YLRgNC10L3QvdC40Lkg0L7RgtGB0YLRg9C/INGB0LLQtdGA0YXRgyAqL1xuICBwdDogU3BhY2VWYWx1ZXMsXG4gIC8qKiDQktC90YPRgtGA0LXQvdC90LjQuSDQvtGC0YHRgtGD0L8g0YHQv9GA0LDQstCwICovXG4gIHByOiBTcGFjZVZhbHVlcyxcbiAgLyoqINCS0L3Rg9GC0YDQtdC90L3QuNC5INC+0YLRgdGC0YPQvyDRgdC90LjQt9GDICovXG4gIHBiOiBTcGFjZVZhbHVlcyxcbiAgLyoqINCS0L3Rg9GC0YDQtdC90L3QuNC5INC+0YLRgdGC0YPQvyDRgdC70LXQstCwICovXG4gIHBsOiBTcGFjZVZhbHVlcyxcbn0+XG5cbmV4cG9ydCB0eXBlIFNwYWNlUHJvcGVydGllcyA9IFBhZGRpbmdQcm9wZXJ0aWVzICYgTWFyZ2luUHJvcGVydGllc1xuXG50eXBlIEFsaWduID0gJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnIHwgJ2p1c3RpZnknXG50eXBlIFZhbGlnbiA9ICd0b3AnIHwgJ21pZGRsZScgfCAnYm90dG9tJyB8ICdiYXNlbGluZScgfCAnc3RyZXRjaCdcblxuZXhwb3J0IHR5cGUgQWxpZ25Qcm9wZXJ0aWVzID0gUGFydGlhbDx7XG4gIC8qKiDQk9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC1INCy0YvRgNCw0LLQvdC40LLQsNC90LjQtSDQtNC+0YfQtdGA0L3QuNGFINCx0LvQvtC60L7QsiAqL1xuICBhbGlnbjogQWxpZ25cbiAgLyoqINCS0LXRgNGC0LjQutCw0LvRjNC90L7QtSDQstGL0YDQsNCy0L3QuNCy0LDQvdC40LUgKi9cbiAgdmFsaWduU2VsZjogVmFsaWduXG4gIC8qKiDQktC10YDRgtC40LrQsNC70YzQvdC+0LUg0LLRi9GA0LDQstC90LjQstCw0L3QuNC1INC00L7Rh9C10YDQvdC40YUg0LHQu9C+0LrQvtCyICovXG4gIHZhbGlnbjogVmFsaWduXG59PlxuXG5leHBvcnQgdHlwZSBMYXlvdXRQcm9wZXJ0aWVzID0gQWxpZ25Qcm9wZXJ0aWVzICYgUGFydGlhbDx7XG4gIC8qKiDQktC10YDRgtC40LrQsNC70YzQvdC+0LUg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQtNC+0YfQtdGA0L3QuNGFINGN0LvQtdC80LXQvdGC0L7QsiAqL1xuICBjb2x1bW46IGJvb2xlYW4sXG4gIC8qKiDQkdC70L7Rh9C90L7QtSDQv9C+0LLQtdC00LXQvdC40LUgKi9cbiAgYmxvY2s6IGJvb2xlYW4sXG4gIC8qKiDQodGC0YDQvtGH0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSAqL1xuICBpbmxpbmU6IGJvb2xlYW4sXG4gIC8qKiDQn9C10YDQtdC90L7RgdC40YLRjCDQsdC70L7QutC4INC90LAg0YHQu9C10LTRg9GO0YnQuNC1INGB0YLRgNC+0LrQuCDQtdGB0LvQuCDQvdC1INGF0LLQsNGC0LjQu9C+INC80LXRgdGC0LAgKi9cbiAgd3JhcDogYm9vbGVhbixcbiAgLyoqINCf0L7Qu9C+0LbQtdC90LjQtSDRjdC70LXQvNC10L3RgtCwINCyINC/0L7RgtC+0LrQtSAqL1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyB8ICdhYnNvbHV0ZScgfCAnc3RhdGljJyB8ICdmaXhlZCcsXG4gIC8qINCg0LDRgdGB0YLQvtGP0L3QuNC1INC+0YIg0LLQtdGA0YXQvdC10LPQviDQutGA0LDRjyAqL1xuICB0b3A6IG51bWJlcixcbiAgLyog0KDQsNGB0YHRgtC+0Y/QvdC40LUg0L7RgiDQvdC40LbQvdC10LPQviDQutGA0LDRjyAqL1xuICBib3R0b206IG51bWJlcixcbiAgLyog0KDQsNGB0YHRgtC+0Y/QvdC40LUg0L7RgiDQu9C10LLQvtCz0L4g0LrRgNCw0Y8gKi9cbiAgbGVmdDogbnVtYmVyLFxuICAvKiDQoNCw0YHRgdGC0L7Rj9C90LjQtSDQvtGCINC/0YDQsNCy0L7Qs9C+INC60YDQsNGPICovXG4gIHJpZ2h0OiBudW1iZXIsXG4gIC8qKiDQlNC+0LHQsNCy0LvRj9C10YIg0YHQutGA0L7Qu9C7ICovXG4gIHNjcm9sbDogYm9vbGVhblxufT5cblxuZXhwb3J0IHR5cGUgQm9yZGVyUHJvcGVydGllcyA9IFBhcnRpYWw8e1xuICAvKiog0KHRgtC40LvRjCDQs9GA0LDQvdC40YYgKi9cbiAgYm9yZGVyU3R5bGU6ICdzb2xpZCcgfCAnZG90dGVkJyB8ICdkYXNoZWQnIHwgJ25vbmUnLFxuICAvKiog0KDQsNC00LjRg9GBINCz0YDQsNC90LjRhiAqL1xuICBib3JkZXJSYWRpdXM6IG51bWJlciB8ICdzJyB8ICdtJyB8ICdsJyB8ICdjaXJjbGUnLFxuICAvKiog0KDQsNC00LjRg9GBINCz0YDQsNC90LjRhiAqL1xuICByb3VuZGVkOiBudW1iZXIgfCAncycgfCAnbScgfCAnbCcgfCAnY2lyY2xlJyxcbiAgLyoqINCo0LjRgNC40L3QsCDQs9GA0LDQvdC40YbRiyAqL1xuICBib3JkZXJXaWR0aDogbnVtYmVyLFxufT5cblxudHlwZSBPdGhlclByb3BlcnRpZXMgPSBCb3JkZXJQcm9wZXJ0aWVzICYgUGFydGlhbDx7XG4gIGZvY3VzOiBib29sZWFuIHwgc3RyaW5nLFxuICBkaXNhYmxlZDogYm9vbGVhbixcbiAgdmFyaWFudDogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InLFxuICBhZGphY2VudFNlbGVjdG9yOiBzdHJpbmcsXG4gIHNoYXBlPzogJ3BpbGwnIHwgJ3NxdWFyZScgfCAnY2lyY2xlJyxcbiAgc2hhZG93Pzogc3RyaW5nIHwgYm9vbGVhbixcbiAgcG9pbnRlckV2ZW50czogYm9vbGVhbixcbn0+XG5cbmV4cG9ydCB0eXBlIENvbG9ycyA9IGtleW9mIFRva2Vuc1sncGFsZXR0ZSddIHwgJ3RyYW5zcGFyZW50JyB8ICdpbmhlcml0JyB8IChzdHJpbmcgJiB7fSlcblxuZXhwb3J0IHR5cGUgQ29sb3JQcm9wZXJ0aWVzID0gUGFydGlhbDx7XG4gIC8qKiDQptCy0LXRgiDQutC+0L3RgtC10L3RgtCwICovXG4gIGNvbG9yOiBDb2xvcnMsXG4gIC8qKiDQptCy0LXRgiDQutC+0L3RgtC10L3RgtCwINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cbiAgY29sb3JIb3ZlcjogQ29sb3JzLFxuICAvKiog0KbQstC10YIg0LrQvtC90YLQtdC90YLQsCDQv9GA0Lgg0L3QsNC20LDRgtC40LggKi9cbiAgY29sb3JBY3RpdmU6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINC60L7QvdGC0LXQvdGC0LAg0L/QvtGB0LXRidC10L3QvdC+0Lkg0YHRgdGL0LvQutC4ICovXG4gIGNvbG9yVmlzaXRlZDogQ29sb3JzLFxuICAvKiog0KbQstC10YIg0LrQvtC90YLQtdC90YLQsCDQsiDQstGL0LHRgNCw0L3QvdC+0Lwg0YHQvtGB0YLQvtGP0L3QuNC4ICovXG4gIGNvbG9yQ2hlY2tlZDogQ29sb3JzLFxuICAvKiog0KbQstC10YIg0LrQvtC90YLQtdC90YLQsCDQsiDRgdC+0YHRgtC+0Y/QvdC40Lgg0YTQvtC60YPRgdCwICovXG4gIGNvbG9yRm9jdXM6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINC60L7QvdGC0LXQvdGC0LAg0LIg0L3QtdCw0LrRgtGC0LjQstC90L7QvCDRgdC+0YHRgtC+0Y/QvdC40LggKi9cbiAgY29sb3JEaXNhYmxlZDogQ29sb3JzLFxuXG4gIC8qKiDQptCy0LXRgiDRhNC+0L3QsCAqL1xuICBiZzogQ29sb3JzLFxuICAvKiog0KbQstC10YIg0YTQvtC90LAg0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xuICBiZ0hvdmVyOiBDb2xvcnMsXG4gIC8qKiDQptCy0LXRgiDRhNC+0L3QsCDQv9GA0Lgg0L3QsNC20LDRgtC40LggKi9cbiAgYmdBY3RpdmU6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINGE0L7QvdCwINC/0L7RgdC10YnQtdC90L3QvtC5INGB0YHRi9C70LrQuCAqL1xuICBiZ1Zpc2l0ZWQ6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINGE0L7QvdCwINCyINCy0YvQsdGA0LDQvdC90L7QvCDRgdC+0YHRgtC+0Y/QvdC40LggKi9cbiAgYmdDaGVja2VkOiBDb2xvcnMsXG4gIC8qKiDQptCy0LXRgiDRhNC+0L3QsCDQsiDRgdC+0YHRgtC+0Y/QvdC40Lgg0YTQvtC60YPRgdCwICovXG4gIGJnRm9jdXM6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINGE0L7QvdCwINCyINC90LXQsNC60YLRgtC40LLQvdC+0Lwg0YHQvtGB0YLQvtGP0L3QuNC4ICovXG4gIGJnRGlzYWJsZWQ6IENvbG9ycyxcblxuICAvKiog0KbQstC10YIg0LPQsNC90LjRhiAqL1xuICBib3JkZXJDb2xvcjogQ29sb3JzLFxuICAvKiog0KbQstC10YIg0LPRgNCw0L3QuNGGINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cbiAgYm9yZGVyQ29sb3JIb3ZlcjogQ29sb3JzLFxuICAvKiog0KbQstC10YIg0LPRgNCw0L3QuNGGINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LggKi9cbiAgYm9yZGVyQ29sb3JBY3RpdmU6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINCz0YDQsNC90LjRhiDQv9C+0YHQtdGJ0LXQvdC90L7QuSDRgdGB0YvQu9C60LggKi9cbiAgYm9yZGVyQ29sb3JWaXNpdGVkOiBDb2xvcnMsXG4gIC8qKiDQptCy0LXRgiDQs9GA0LDQvdC40YYg0LIg0LLRi9Cx0YDQsNC90L3QvtC8INGB0L7RgdGC0L7Rj9C90LjQuCAqL1xuICBib3JkZXJDb2xvckNoZWNrZWQ6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINCz0YDQsNC90LjRhiDQsiDRgdC+0YHRgtC+0Y/QvdC40Lgg0YTQvtC60YPRgdCwICovXG4gIGJvcmRlckNvbG9yRm9jdXM6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINCz0YDQsNC90LjRhiDQsiDQvdC10LDQutGC0YLQuNCy0L3QvtC8INGB0L7RgdGC0L7Rj9C90LjQuCAqL1xuICBib3JkZXJDb2xvckRpc2FibGVkOiBDb2xvcnMsXG5cbiAgLyoqINCm0LLQtdGCINGC0LXQutGB0YLQsCDRgyDQv9C70LXQudGB0YXQvtC70LTQtdGA0LAgKi9cbiAgcGxhY2Vob2xkZXJDb2xvcjogQ29sb3JzLFxuXG4gIC8qKiDRhtCy0LXRgiDQvtCy0LXRgNC70LXRjyAqL1xuICBvdmVybGF5OiBDb2xvcnMsXG4gIC8qKiDQptCy0LXRgiDQvtCy0LXRgNC70LXRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICovXG4gIG92ZXJsYXlIb3ZlcjogQ29sb3JzLFxuICAvKiog0KbQstC10YIg0L7QstC10YDQu9C10Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCAqL1xuICBvdmVybGF5QWN0aXZlOiBDb2xvcnMsXG4gIC8qKiDQptCy0LXRgiDQvtCy0LXRgNC70LXRjyDQv9C+0YHQtdGJ0LXQvdC90L7QuSDRgdGB0YvQu9C60LggKi9cbiAgb3ZlcmxheVZpc2l0ZWQ6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINC+0LLQtdGA0LvQtdGPINCyINCy0YvQsdGA0LDQvdC90L7QvCDRgdC+0YHRgtC+0Y/QvdC40LggKi9cbiAgb3ZlcmxheUNoZWNrZWQ6IENvbG9ycyxcbiAgLyoqINCm0LLQtdGCINC+0LLQtdGA0LvQtdGPINCyINGB0L7RgdGC0L7Rj9C90LjQuCDRhNC+0LrRg9GB0LAgKi9cbiAgb3ZlcmxheUZvY3VzOiBDb2xvcnMsXG4gIC8qKiDQptCy0LXRgiDQvtCy0LXRgNC70LXRjyDQsiDQvdC10LDQutGC0YLQuNCy0L3QvtC8INGB0L7RgdGC0L7Rj9C90LjQuCAqL1xuICBvdmVybGF5RGlzYWJsZWQ6IENvbG9ycyxcbn0+XG5cbmV4cG9ydCB0eXBlIFN0eWxlUHJvcGVydGllcyA9IFRleHRQcm9wZXJ0aWVzICYgRGltZW5zaW9uUHJvcGVydGllcyAmIFNwYWNlUHJvcGVydGllcyAmIExheW91dFByb3BlcnRpZXNcbiAgJiBDb2xvclByb3BlcnRpZXMgJiBPdGhlclByb3BlcnRpZXMgJiBWaXNpYmlsaXR5UHJvcGVydGllc1xudHlwZSBVbmlvblRvSW50ZXJzZWN0aW9uPFU+ID1cbiAgKGJvb2xlYW4gZXh0ZW5kcyBVID8gKGs6IFUpPT52b2lkIDogVSBleHRlbmRzIGFueSA/IChrOiBVKT0+dm9pZCA6IG5ldmVyKSBleHRlbmRzICgoazogaW5mZXIgSSk9PnZvaWQpXG4gID8gSSA6IG5ldmVyXG50eXBlIElzVW5pb248VD4gPSBbVF0gZXh0ZW5kcyBbVW5pb25Ub0ludGVyc2VjdGlvbjxUPl0gPyBmYWxzZSA6IHRydWVcbnR5cGUgT25seUxpdGVyYWxTdHJpbmc8VD4gPSBUIGV4dGVuZHMgc3RyaW5nID8gVCA6IG5ldmVyXG50eXBlIElzQ2hpbGRyZW48VD4gPSBSZWFjdC5SZWFjdE5vZGUgZXh0ZW5kcyBUID8gdHJ1ZSA6IGZhbHNlXG50eXBlIENvbXB1dGFibGU8VCwgQXJnPiA9IHsgW0sgaW4ga2V5b2YgVF06IChUW0tdIHwgKChhcmc6IEFyZykgPT4gVFtLXSkpIH1cbi8vIFN0cmluZyBsaXRlcmFscyBvbiB1bmlvbnMsIG1heWJlIG9wdGlvbmFsXG4vLyBwcmVzZXQ6ICdmb3JjZScgfCAnbm9uZScsIHByZXNldDogJ2ZvcmNlJyBhbmQgcHJlc2V0PzogJ2ZvcmNlJyB3aWxsIGFsbCBwYXNzXG50eXBlIElzU3dpdGNoYWJsZTxUPiA9IElzVW5pb248Tm9uTnVsbGFibGU8VD4+IGV4dGVuZHMgdHJ1ZSA/IHRydWUgOiBUIGV4dGVuZHMgc3RyaW5nIHwgdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlXG5cbmV4cG9ydCB0eXBlIFNjaGVtZVR5cGU8XG4gIFByb3BzIGV4dGVuZHMgeyBbSyBpbiBrZXlvZiBQcm9wc106IFByb3BzW0tdIH0sXG4gIENvbXBvbmVudHNQcm9wcyA9IG5ldmVyLFxuICBFeHRyYVN0eWxlUHJvcHMgPSB7fVxuPiA9IHtcbiAgc3R5bGU/OiBQYXJ0aWFsPENvbXB1dGFibGU8U3R5bGVQcm9wZXJ0aWVzICYgRXh0cmFTdHlsZVByb3BzLCBQcm9wcz4+LFxuICBwcm9wcz86IFBhcnRpYWw8Q29tcHV0YWJsZTxDb21wb25lbnRzUHJvcHMsIFByb3BzPj4sXG4gIC8vINCh0YDQsNCx0LDRgtGL0LLQsNC10YIg0L7RiNC40LHQutCwINGA0LXQutGD0YDRgdC40LggaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zNDkzMyDQsiDQutC+0LzQv9C+0L3QtdC90YLQtSBJY29uXG4gIC8vINCV0YHQu9C4INC90LDQv9C40YHQsNGC0Ywg0YLQsNC6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PENvbXBvbmVudHNQcm9wcz5cbiAgY29tcG9uZW50PzogYW55LFxufSAmIHtcbiAgW0tleSBpbiBrZXlvZiBQcm9wc10/OiBJc1N3aXRjaGFibGU8UHJvcHNbS2V5XT4gZXh0ZW5kcyB0cnVlXG4gICAgPyB7IFtLZXkyIGluIE9ubHlMaXRlcmFsU3RyaW5nPFByb3BzW0tleV0+XT86IFNjaGVtZVR5cGU8UHJvcHMsIENvbXBvbmVudHNQcm9wcywgRXh0cmFTdHlsZVByb3BzPiB9XG4gICAgOiBTY2hlbWVUeXBlPFByb3BzLCBDb21wb25lbnRzUHJvcHMsIEV4dHJhU3R5bGVQcm9wcz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbG90PE91dFByb3BzID0gbmV2ZXIsIEV4dHJhU3R5bGVzID0ge30+IHt9XG5leHBvcnQgdHlwZSBDb21wb25lbnRUaGVtZTxQcm9wcywgU2NoZW1lID0ge30sIEV4dHJhcyA9IHt9PiA9IEV4dHJhcyAmIHtcbiAgZGVmYXVsdFByb3BzPzogUGFydGlhbDxQcm9wcz4sXG4gIG1hcFByb3BzPzogKHByb3BzOiBQcm9wcykgPT4gUGFydGlhbDxQcm9wcz4sXG4gIHNjaGVtZToge1xuICAgIFtLIGluIGtleW9mIFNjaGVtZV06IFNjaGVtZVtLXSBleHRlbmRzIChTbG90PGluZmVyIE91dFByb3BzLCBpbmZlciBFeHRyYVN0eWxlcz4gfCB1bmRlZmluZWQpXG4gICAgICA/IFNjaGVtZVR5cGU8UHJvcHMsIE91dFByb3BzLCBFeHRyYVN0eWxlcz5cbiAgICAgIDogU2NoZW1lW0tdXG4gIH1cbn1cblxuY29uc3QgY29tcHV0ZWRDcm9wID0gKGNyb3A6IG51bWJlciwgdGFyZ2V0SGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgY29uc3QgdmFsdWUgPSAoY3JvcCArICh0YXJnZXRIZWlnaHQgLSAxKSAqIDE2KSAvIDMyXG5cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwXG59XG5cbmNvbnN0IHNwYWNlVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlciwgc3BhY2VzOiB7fSk6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzcGFjZXNbdmFsdWVdID8gYCR7c3BhY2VzW3ZhbHVlXX1weGAgOiB2YWx1ZSA9PT0gJ2F1dG8nID8gJ2F1dG8nIDogJzBweCdcbiAgfVxufVxuXG5jb25zdCBtYXBzID0ge1xuICBpbmxpbmU6IHtcbiAgICBibG9jazogJ2lubGluZS1ibG9jaycsXG4gICAgaW5saW5lOiAnaW5saW5lLWJsb2NrJyxcbiAgICAnaW5saW5lLWJsb2NrJzogJ2lubGluZS1ibG9jaycsXG4gICAgJ2ZsZXgnOiAnaW5saW5lLWZsZXgnLFxuICAgICdpbmxpbmUtZmxleCc6ICdpbmxpbmUtZmxleCcsXG4gIH0sXG4gIGJsb2NrOiB7XG4gICAgYmxvY2s6ICdibG9jaycsXG4gICAgaW5saW5lOiAnYmxvY2snLFxuICAgICdpbmxpbmUtYmxvY2snOiAnYmxvY2snLFxuICAgICdmbGV4JzogJ2ZsZXgnLFxuICAgICdpbmxpbmUtZmxleCc6ICdmbGV4JyxcbiAgfSxcbiAgYWxpZ246IHtcbiAgICBibG9jazogJ3RleHQtYWxpZ24nLFxuICAgIGlubGluZTogJ3RleHQtYWxpZ24nLFxuICAgICdpbmxpbmUtYmxvY2snOiAndGV4dC1hbGlnbicsXG4gICAgJ2ZsZXgnOiAnanVzdGlmeS1jb250ZW50JyxcbiAgICAnaW5saW5lLWZsZXgnOiAnanVzdGlmeS1jb250ZW50JyxcbiAgfSxcbiAganVzdGlmeUNvbnRlbnQ6IHtcbiAgICBsZWZ0OiAnZmxleC1zdGFydCcsXG4gICAgY2VudGVyOiAnY2VudGVyJyxcbiAgICByaWdodDogJ2ZsZXgtZW5kJyxcbiAgICBqdXN0aWZ5OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGFsaWduQ29sdW1uOiB7XG4gICAgbGVmdDogJ2ZsZXgtc3RhcnQnLFxuICAgIGNlbnRlcjogJ2NlbnRlcicsXG4gICAgcmlnaHQ6ICdmbGV4LWVuZCcsXG4gICAganVzdGlmeTogJ3N0cmV0Y2gnLFxuICB9LFxuICBhbGlnbkZsZXg6IHtcbiAgICB0b3A6ICdmbGV4LXN0YXJ0JyxcbiAgICBtaWRkbGU6ICdjZW50ZXInLFxuICAgIGJvdHRvbTogJ2ZsZXgtZW5kJyxcbiAgICBiYXNlbGluZTogJ2Jhc2VsaW5lJyxcbiAgICBzdHJldGNoOiAnc3RyZXRjaCcsXG4gIH0sXG4gIHZlcnRpY2FsQWxpZ246IHtcbiAgICB0b3A6ICd0b3AnLFxuICAgIG1pZGRsZTogJ21pZGRsZScsXG4gICAgYm90dG9tOiAnYm90dG9tJyxcbiAgICBiYXNlbGluZTogJ2Jhc2VsaW5lJyxcbiAgICBzdHJldGNoOiAnYmFzZWxpbmUnLFxuICB9LFxuICBkaW1lbnNpb246IHtcbiAgICB3aWR0aDogJ3dpZHRoJyxcbiAgICBtYXhXaWR0aDogJ21heC13aWR0aCcsXG4gICAgbWluV2lkdGg6ICdtaW4td2lkdGgnLFxuICAgIGhlaWdodDogJ2hlaWdodCcsXG4gICAgbWF4SGVpZ2h0OiAnbWF4LWhlaWdodCcsXG4gICAgbWluSGVpZ2h0OiAnbWluLWhlaWdodCcsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgY29sb3I6ICdjb2xvcicsXG4gICAgY29sb3JIb3ZlcjogJ2NvbG9yJyxcbiAgICBjb2xvckFjdGl2ZTogJ2NvbG9yJyxcbiAgICBjb2xvclZpc2l0ZWQ6ICdjb2xvcicsXG4gICAgY29sb3JGb2N1czogJ2NvbG9yJyxcbiAgICBjb2xvckNoZWNrZWQ6ICdjb2xvcicsXG4gICAgY29sb3JEaXNhYmxlZDogJ2NvbG9yJyxcbiAgICBiZzogJ2JhY2tncm91bmQtY29sb3InLFxuICAgIGJnSG92ZXI6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICBiZ0FjdGl2ZTogJ2JhY2tncm91bmQtY29sb3InLFxuICAgIGJnVmlzaXRlZDogJ2JhY2tncm91bmQtY29sb3InLFxuICAgIGJnRm9jdXM6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICBiZ0NoZWNrZWQ6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICBiZ0Rpc2FibGVkOiAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgYm9yZGVyQ29sb3I6ICdib3JkZXItY29sb3InLFxuICAgIGJvcmRlckNvbG9ySG92ZXI6ICdib3JkZXItY29sb3InLFxuICAgIGJvcmRlckNvbG9yQWN0aXZlOiAnYm9yZGVyLWNvbG9yJyxcbiAgICBib3JkZXJDb2xvclZpc2l0ZWQ6ICdib3JkZXItY29sb3InLFxuICAgIGJvcmRlckNvbG9yRm9jdXM6ICdib3JkZXItY29sb3InLFxuICAgIGJvcmRlckNvbG9yQ2hlY2tlZDogJ2JvcmRlci1jb2xvcicsXG4gICAgYm9yZGVyQ29sb3JEaXNhYmxlZDogJ2JvcmRlci1jb2xvcicsXG4gIH0sXG4gIHdlYmtpdFNtb290aGluZzoge1xuICAgIGF1dG86ICdhdXRvJyxcbiAgICBhbnRpYWxpYXNlZDogJ2FudGlhbGlhc2VkJyxcbiAgICBzdWJwaXhlbDogJ3N1YnBpeGVsLWFudGlhbGlhc2VkJyxcbiAgfSxcbiAgbW96U21vb3RoaW5nOiB7XG4gICAgYXV0bzogJ2F1dG8nLFxuICAgIGFudGlhbGlhc2VkOiAnZ3JheXNjYWxlJyxcbiAgICBzdWJwaXhlbDogJ2dyYXlzY2FsZScsXG4gIH0sXG59XG5cbmNvbnN0IGV4ZWNDb21wdXRhYmxlcyA9IChvYmplY3Q6IG9iamVjdCwgYXJnOiBhbnkpID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2JqZWN0W2tleV0gPSBvYmplY3Rba2V5XShhcmcpXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Rcbn1cblxuZXhwb3J0IGNvbnN0IGZvbGRTY2hlbWUgPSAoc2NoZW1lOiBhbnksIHByb3BzOiBhbnksIG9ubHk/OiAncHJvcHMnIHwgJ3N0eWxlJyB8ICdjb21wb25lbnQnKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBzdHlsZToge30sXG4gICAgcHJvcHM6IHt9LFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgfVxuXG4gIGlmICghc2NoZW1lKSByZXR1cm4gcmVzdWx0XG5cbiAgZm9yIChjb25zdCBwcm9wIGluIHNjaGVtZSkge1xuICAgIGlmIChbJ3N0eWxlJywgJ3Byb3BzJ10uaW5jbHVkZXMocHJvcCkgJiYgKCFvbmx5IHx8IG9ubHkgPT09IHByb3ApKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHJlc3VsdFtwcm9wXSwgc2NoZW1lW3Byb3BdKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChwcm9wID09PSAnY29tcG9uZW50JyAmJiAoIW9ubHkgfHwgb25seSA9PT0gcHJvcCkpIHtcbiAgICAgIHJlc3VsdC5jb21wb25lbnQgPSBzY2hlbWUuY29tcG9uZW50XG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wXVxuICAgIGNvbnN0IG5lc3RlZENvbmZpZyA9IHNjaGVtZVtwcm9wXVxuXG4gICAgY29uc3Qgc3dpdGNoQnJhbmNoID0gbmVzdGVkQ29uZmlnW3ZhbHVlXVxuICAgIGlmIChzd2l0Y2hCcmFuY2gpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBmb2xkU2NoZW1lKHN3aXRjaEJyYW5jaCwgcHJvcHMsIG9ubHkpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LnN0eWxlLCBkYXRhLnN0eWxlKVxuICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQucHJvcHMsIGRhdGEucHJvcHMpXG4gICAgICBkYXRhLmNvbXBvbmVudCAmJiAocmVzdWx0LmNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50KVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZGF0YSA9IGZvbGRTY2hlbWUobmVzdGVkQ29uZmlnLCBwcm9wcywgb25seSlcblxuICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQuc3R5bGUsIGRhdGEuc3R5bGUpXG4gICAgICBPYmplY3QuYXNzaWduKHJlc3VsdC5wcm9wcywgZGF0YS5wcm9wcylcbiAgICAgIGRhdGEuY29tcG9uZW50ICYmIChyZXN1bHQuY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQpXG4gICAgfVxuICB9XG5cbiAgZXhlY0NvbXB1dGFibGVzKHJlc3VsdC5wcm9wcywgcHJvcHMpXG4gIGV4ZWNDb21wdXRhYmxlcyhyZXN1bHQuc3R5bGUsIHByb3BzKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9IChwYXJhbXM6IFN0eWxlUHJvcGVydGllcyAmIERpc3BsYXksIHRva2VuczogVG9rZW5zKSA9PiB7XG4gIGxldCBjc3MgPSAnYm94LXNpemluZzogYm9yZGVyLWJveDsnXG4gIGNvbnN0IHsgZm9udCwgZGltZW5zaW9uLCBzcGFjZSwgcGFsZXR0ZSwgZm9jdXMsIHNoYXBlIH0gPSB0b2tlbnNcblxuICBpZiAoIXBhcmFtcykgcmV0dXJuIGNzc1xuXG4gIGxldCBtYXJnaW46IHN0cmluZ1tdID0gW11cbiAgbGV0IHBhZGRpbmc6IHN0cmluZ1tdID0gW11cbiAgbGV0IGhvdmVyU3RhdGUgPSBbXVxuICBsZXQgYWN0aXZlU3RhdGUgPSBbXVxuICBsZXQgdmlzaXRlZFN0YXRlID0gW11cbiAgbGV0IGZvY3VzU3RhdGUgPSBbXVxuICBsZXQgZGlzYWJsZWRTdGF0ZSA9IFtdXG4gIGxldCBjaGVja2VkU3RhdGUgPSBbXVxuICBsZXQgZGlzcGxheSA9ICcnXG4gIGxldCB3aWR0aCA9ICcnXG5cbiAgY29uc3QgY29sb3JSdWxlID0gKHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBDb2xvcnMpID0+IHtcbiAgICBpZiAoIS9eb3ZlcmxheS8udGVzdChwYXJhbSkpIHtcbiAgICAgIHJldHVybiBgJHttYXBzLmNvbG9yW3BhcmFtXX06ICR7cGFsZXR0ZVt2YWx1ZV0gfHwgdmFsdWV9O2BcbiAgICB9XG4gICAgY29uc3QgeyBib3JkZXJXaWR0aCA9IDAgfSA9IHBhcmFtc1xuICAgIHJldHVybiBgXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGxlZnQ6IC0ke2JvcmRlcldpZHRofXB4O1xuICAgICAgICByaWdodDogLSR7Ym9yZGVyV2lkdGh9cHg7XG4gICAgICAgIHRvcDogLSR7Ym9yZGVyV2lkdGh9cHg7XG4gICAgICAgIGJvdHRvbTogLSR7Ym9yZGVyV2lkdGh9cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7cGFsZXR0ZVt2YWx1ZV0gfHwgdmFsdWV9O1xuICAgICAgfVxuICAgIGBcbiAgfVxuXG4gIGZvciAoY29uc3QgX3BhcmFtIGluIHBhcmFtcykge1xuICAgIGNvbnN0IHBhcmFtID0gX3BhcmFtIGFzIGtleW9mIHR5cGVvZiBwYXJhbXNcbiAgICBsZXQgdmFsdWUgPSBwYXJhbXNbX3BhcmFtXVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXG5cbiAgICAvLyBFeGhhdXN0aXZlIHN3aXRjaFxuICAgIHN3aXRjaCAocGFyYW0pIHtcbiAgICAgIGNhc2UgJ2ZvbnRGYW1pbHknOlxuICAgICAgICBjc3MgKz0gYGZvbnQtZmFtaWx5OiAke3ZhbHVlfTtgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2ZvbnRTaXplJzpcbiAgICAgICAgY3NzICs9IGBmb250LXNpemU6ICR7Zm9udC5mb250U2l6ZVt2YWx1ZV0gfHwgdmFsdWV9cHg7YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdsaW5lSGVpZ2h0JzpcbiAgICAgICAgY3NzICs9IGBsaW5lLWhlaWdodDogJHtmb250LmxpbmVIZWlnaHRbdmFsdWVdIHx8IHZhbHVlfTtgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2xldHRlclNwYWNpbmcnOlxuICAgICAgICBjc3MgKz0gYGxldHRlci1zcGFjaW5nOiAke3ZhbHVlfXB4O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZm9udFdlaWdodCc6XG4gICAgICAgIGlmIChwYXJhbXMuYm9sZCB8fCBwYXJhbXMubGlnaHQpIGJyZWFrXG5cbiAgICAgICAgY3NzICs9IGBmb250LXdlaWdodDogJHt2YWx1ZX07YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgY3NzICs9ICdmb250LXdlaWdodDogNjAwOydcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbGlnaHQnOlxuICAgICAgICBjc3MgKz0gJ2ZvbnQtd2VpZ2h0OiAzMDA7J1xuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdpdGFsaWMnOlxuICAgICAgICBjc3MgKz0gJ2ZvbnQtc3R5bGU6IGl0YWxpYzsnXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ25vV3JhcCc6XG4gICAgICAgIGNzcyArPSAnd2hpdGUtc3BhY2U6IG5vd3JhcDsnXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3ByZSc6XG4gICAgICAgIGNzcyArPSAnd2hpdGUtc3BhY2U6IHByZTsnXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3dyYXAnOlxuICAgICAgICBjc3MgKz0gJ2ZsZXgtd3JhcDogd3JhcDsgd29yZC1icmVhazogYnJlYWstYWxsOydcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzpcbiAgICAgICAgY3NzICs9ICd0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOydcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndHJ1bmNhdGUnOlxuICAgICAgICBkaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcblxuICAgICAgICBjc3MgKz0gYFxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGBcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY3JvcCc6IHtcbiAgICAgICAgaWYgKCFwYXJhbXMubGluZUhlaWdodCkgYnJlYWtcblxuICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gZm9udC5saW5lSGVpZ2h0W3BhcmFtcy5saW5lSGVpZ2h0XSB8fCBwYXJhbXMubGluZUhlaWdodFxuICAgICAgICBkaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcblxuICAgICAgICBjc3MgKz0gYFxuICAgICAgICAgICYmIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6OmJlZm9yZSB7IG1hcmdpbi1ib3R0b206IC0ke2NvbXB1dGVkQ3JvcChmb250LmNyb3AudG9wLCBsaW5lSGVpZ2h0KX1lbSB9XG4gICAgICAgICAgJjo6YWZ0ZXIgeyBtYXJnaW4tdG9wOiAtJHtjb21wdXRlZENyb3AoZm9udC5jcm9wLmJvdHRvbSwgbGluZUhlaWdodCl9ZW0gfVxuICAgICAgICBgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgIGNzcyArPSBgXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206ICR7Zm9udC51bmRlcmxpbmUub2Zmc2V0fXB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206ICR7Zm9udC51bmRlcmxpbmUuaGVpZ2h0fXB4ICR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogJ3NvbGlkJ30gY3VycmVudENvbG9yO1xuICAgICAgICBgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Ntb290aGluZyc6XG4gICAgICAgIGNzcyArPSBgXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogJHttYXBzLndlYmtpdFNtb290aGluZ1t2YWx1ZV19O1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiAke21hcHMubW96U21vb3RoaW5nW3ZhbHVlXX07XG4gICAgICAgIGBcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnd2lkdGgnOlxuICAgICAgICB3aWR0aCA9IHZhbHVlID4gMSA/IGAke3ZhbHVlfXB4YCA6IGAke3ZhbHVlICogMTAwfSVgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21pbldpZHRoJzpcbiAgICAgIGNhc2UgJ21heFdpZHRoJzpcbiAgICAgICAgY3NzICs9IGAke21hcHMuZGltZW5zaW9uW3BhcmFtXX06ICR7dmFsdWUgPiAxID8gYCR7dmFsdWV9cHhgIDogYCR7dmFsdWUgKiAxMDB9JWB9O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgIGNhc2UgJ21pbkhlaWdodCc6XG4gICAgICBjYXNlICdtYXhIZWlnaHQnOlxuICAgICAgICB2YWx1ZSA9IGRpbWVuc2lvbi5yb3dIZWlnaHRbdmFsdWVdIHx8IHZhbHVlXG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnYXV0bycpIHtcbiAgICAgICAgICBjc3MgKz0gYCR7bWFwcy5kaW1lbnNpb25bcGFyYW1dfTogYXV0bztgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3NzICs9IGAke21hcHMuZGltZW5zaW9uW3BhcmFtXX06ICR7dmFsdWUgPiAxID8gYCR7dmFsdWV9cHhgIDogYCR7dmFsdWUgKiAxMDB9JWB9O2BcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdkaXNwbGF5JzpcbiAgICAgICAgZGlzcGxheSA9IHZhbHVlXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2lubGluZSc6XG4gICAgICAgIGRpc3BsYXkgPSBwYXJhbXMuZGlzcGxheSA/IG1hcHMuaW5saW5lW3BhcmFtcy5kaXNwbGF5XSA6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIHdpZHRoID0gJydcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmxvY2snOiB7XG4gICAgICAgIGRpc3BsYXkgPSBwYXJhbXMuZGlzcGxheSA/IG1hcHMuYmxvY2tbcGFyYW1zLmRpc3BsYXldIDogJ2Jsb2NrJ1xuICAgICAgICB3aWR0aCA9ICcxMDAlJ1xuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdncm93JzpcbiAgICAgICAgY3NzICs9IGBmbGV4LWdyb3c6ICR7dmFsdWUgPyAnMScgOiAnMCd9O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc2hyaW5rJzpcbiAgICAgICAgY3NzICs9IGBmbGV4LXNocmluazogJHt2YWx1ZSA/ICcxJyA6ICcwJ307YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib3JkZXJXaWR0aCc6XG4gICAgICAgIGNzcyArPSBgYm9yZGVyLXdpZHRoOiAke3ZhbHVlfXB4O2BcblxuICAgICAgICBpZiAocGFyYW1zLmJvcmRlclN0eWxlKSBicmVha1xuXG4gICAgICAgIGNzcyArPSAnYm9yZGVyLXN0eWxlOiBzb2xpZDsnXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3JvdW5kZWQnOlxuICAgICAgY2FzZSAnYm9yZGVyUmFkaXVzJzpcbiAgICAgICAgaWYgKHBhcmFtcy5zaGFwZSA9PT0gJ2NpcmNsZScgfHwgcGFyYW1zLnNoYXBlID09PSAncGlsbCcpIGJyZWFrXG5cbiAgICAgICAgLy8gTk9URTog0LTQu9GPINC60YDRg9Cz0LAg0LvRg9GH0YjQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywgc2hhcGVcbiAgICAgICAgY3NzICs9IGBib3JkZXItcmFkaXVzOiAke3ZhbHVlID09PSAnY2lyY2xlJyA/ICcxMDAnIDogc2hhcGUuYm9yZGVyUmFkaXVzW3ZhbHVlXSB8fCB2YWx1ZX1weDtgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2FsaWduJzoge1xuICAgICAgICBpZiAoIXBhcmFtcy5kaXNwbGF5KSBicmVha1xuXG4gICAgICAgIGxldCBwcm9wXG5cbiAgICAgICAgaWYgKHBhcmFtcy5jb2x1bW4pIHtcbiAgICAgICAgICBwcm9wID0gJ2FsaWduLWl0ZW1zJ1xuICAgICAgICAgIHZhbHVlID0gbWFwcy5hbGlnbkNvbHVtblt2YWx1ZV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wID0gbWFwcy5hbGlnbltwYXJhbXMuZGlzcGxheV1cblxuICAgICAgICAgIGlmIChwcm9wID09PSAnanVzdGlmeS1jb250ZW50Jykge1xuICAgICAgICAgICAgdmFsdWUgPSBtYXBzLmp1c3RpZnlDb250ZW50W3ZhbHVlXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNzcyArPSBgJHtwcm9wfTogJHt2YWx1ZX07YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICd2YWxpZ24nOlxuICAgICAgICBjc3MgKz0gYGFsaWduLWl0ZW1zOiAke21hcHMuYWxpZ25GbGV4W3ZhbHVlXX07YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd2YWxpZ25TZWxmJzoge1xuICAgICAgICBjc3MgKz0gYGFsaWduLXNlbGY6ICR7bWFwcy5hbGlnbkZsZXhbdmFsdWVdfTt2ZXJ0aWNhbC1hbGlnbjogJHttYXBzLnZlcnRpY2FsQWxpZ25bdmFsdWVdfTtgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNzcyArPSAnZmxleC1kaXJlY3Rpb246IGNvbHVtbjsnXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ20nOlxuICAgICAgICB2YWx1ZSA9IHNwYWNlVmFsdWUodmFsdWUsIHNwYWNlKVxuICAgICAgICBtYXJnaW4gPSBbdmFsdWUsIHZhbHVlLCB2YWx1ZSwgdmFsdWVdXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ214JzpcbiAgICAgICAgdmFsdWUgPSBzcGFjZVZhbHVlKHZhbHVlLCBzcGFjZSlcbiAgICAgICAgbWFyZ2luWzFdID0gdmFsdWVcbiAgICAgICAgbWFyZ2luWzNdID0gdmFsdWVcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbXknOlxuICAgICAgICB2YWx1ZSA9IHNwYWNlVmFsdWUodmFsdWUsIHNwYWNlKVxuICAgICAgICBtYXJnaW5bMF0gPSB2YWx1ZVxuICAgICAgICBtYXJnaW5bMl0gPSB2YWx1ZVxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtdCc6XG4gICAgICAgIHZhbHVlID0gc3BhY2VWYWx1ZSh2YWx1ZSwgc3BhY2UpXG4gICAgICAgIG1hcmdpblswXSA9IHZhbHVlXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21yJzpcbiAgICAgICAgdmFsdWUgPSBzcGFjZVZhbHVlKHZhbHVlLCBzcGFjZSlcbiAgICAgICAgbWFyZ2luWzFdID0gdmFsdWVcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWInOlxuICAgICAgICB2YWx1ZSA9IHNwYWNlVmFsdWUodmFsdWUsIHNwYWNlKVxuICAgICAgICBtYXJnaW5bMl0gPSB2YWx1ZVxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtbCc6XG4gICAgICAgIHZhbHVlID0gc3BhY2VWYWx1ZSh2YWx1ZSwgc3BhY2UpXG4gICAgICAgIG1hcmdpblszXSA9IHZhbHVlXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3AnOlxuICAgICAgICB2YWx1ZSA9IHNwYWNlVmFsdWUodmFsdWUsIHNwYWNlKVxuICAgICAgICBwYWRkaW5nID0gW1xuICAgICAgICAgIGBwYWRkaW5nLXRvcDogJHt2YWx1ZX07YCxcbiAgICAgICAgICBgcGFkZGluZy1yaWdodDogJHt2YWx1ZX07YCxcbiAgICAgICAgICBgcGFkZGluZy1ib3R0b206ICR7dmFsdWV9O2AsXG4gICAgICAgICAgYHBhZGRpbmctbGVmdDogJHt2YWx1ZX07YCxcbiAgICAgICAgXVxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdweCc6XG4gICAgICAgIHZhbHVlID0gc3BhY2VWYWx1ZSh2YWx1ZSwgc3BhY2UpXG4gICAgICAgIHBhZGRpbmdbMV0gPSBgcGFkZGluZy1yaWdodDogJHt2YWx1ZX07YFxuICAgICAgICBwYWRkaW5nWzNdID0gYHBhZGRpbmctbGVmdDogJHt2YWx1ZX07YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdweSc6XG4gICAgICAgIHZhbHVlID0gc3BhY2VWYWx1ZSh2YWx1ZSwgc3BhY2UpXG4gICAgICAgIHBhZGRpbmdbMF0gPSBgcGFkZGluZy10b3A6ICR7dmFsdWV9O2BcbiAgICAgICAgcGFkZGluZ1syXSA9IGBwYWRkaW5nLWJvdHRvbTogJHt2YWx1ZX07YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwdCc6XG4gICAgICAgIHZhbHVlID0gc3BhY2VWYWx1ZSh2YWx1ZSwgc3BhY2UpXG4gICAgICAgIHBhZGRpbmdbMF0gPSBgcGFkZGluZy10b3A6ICR7dmFsdWV9O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHInOlxuICAgICAgICB2YWx1ZSA9IHNwYWNlVmFsdWUodmFsdWUsIHNwYWNlKVxuICAgICAgICBwYWRkaW5nWzFdID0gYHBhZGRpbmctcmlnaHQ6ICR7dmFsdWV9O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGInOlxuICAgICAgICB2YWx1ZSA9IHNwYWNlVmFsdWUodmFsdWUsIHNwYWNlKVxuICAgICAgICBwYWRkaW5nWzJdID0gYHBhZGRpbmctYm90dG9tOiAke3ZhbHVlfTtgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsJzpcbiAgICAgICAgdmFsdWUgPSBzcGFjZVZhbHVlKHZhbHVlLCBzcGFjZSlcbiAgICAgICAgcGFkZGluZ1szXSA9IGBwYWRkaW5nLWxlZnQ6ICR7dmFsdWV9O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgY2FzZSAnYmcnOlxuICAgICAgY2FzZSAnYm9yZGVyQ29sb3InOlxuICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgIGNzcyArPSBjb2xvclJ1bGUocGFyYW0sIHZhbHVlKVxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb2xvckhvdmVyJzpcbiAgICAgIGNhc2UgJ2JnSG92ZXInOlxuICAgICAgY2FzZSAnYm9yZGVyQ29sb3JIb3Zlcic6XG4gICAgICBjYXNlICdvdmVybGF5SG92ZXInOlxuICAgICAgICBob3ZlclN0YXRlLnB1c2goY29sb3JSdWxlKHBhcmFtLCB2YWx1ZSkpXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbG9yQWN0aXZlJzpcbiAgICAgIGNhc2UgJ2JnQWN0aXZlJzpcbiAgICAgIGNhc2UgJ2JvcmRlckNvbG9yQWN0aXZlJzpcbiAgICAgIGNhc2UgJ292ZXJsYXlBY3RpdmUnOlxuICAgICAgICBhY3RpdmVTdGF0ZS5wdXNoKGNvbG9yUnVsZShwYXJhbSwgdmFsdWUpKVxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb2xvclZpc2l0ZWQnOlxuICAgICAgY2FzZSAnYmdWaXNpdGVkJzpcbiAgICAgIGNhc2UgJ2JvcmRlckNvbG9yVmlzaXRlZCc6XG4gICAgICBjYXNlICdvdmVybGF5VmlzaXRlZCc6XG4gICAgICAgIHZpc2l0ZWRTdGF0ZS5wdXNoKGNvbG9yUnVsZShwYXJhbSwgdmFsdWUpKVxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb2xvckZvY3VzJzpcbiAgICAgIGNhc2UgJ2JnRm9jdXMnOlxuICAgICAgY2FzZSAnYm9yZGVyQ29sb3JGb2N1cyc6XG4gICAgICBjYXNlICdvdmVybGF5Rm9jdXMnOlxuICAgICAgICBmb2N1c1N0YXRlLnB1c2goY29sb3JSdWxlKHBhcmFtLCB2YWx1ZSkpXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbG9yQ2hlY2tlZCc6XG4gICAgICBjYXNlICdiZ0NoZWNrZWQnOlxuICAgICAgY2FzZSAnYm9yZGVyQ29sb3JDaGVja2VkJzpcbiAgICAgIGNhc2UgJ292ZXJsYXlDaGVja2VkJzpcbiAgICAgICAgY2hlY2tlZFN0YXRlLnB1c2goY29sb3JSdWxlKHBhcmFtLCB2YWx1ZSkpXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbG9yRGlzYWJsZWQnOlxuICAgICAgY2FzZSAnYmdEaXNhYmxlZCc6XG4gICAgICBjYXNlICdib3JkZXJDb2xvckRpc2FibGVkJzpcbiAgICAgIGNhc2UgJ292ZXJsYXlEaXNhYmxlZCc6XG4gICAgICAgIGRpc2FibGVkU3RhdGUucHVzaChjb2xvclJ1bGUocGFyYW0sIHZhbHVlKSlcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxhY2Vob2xkZXJDb2xvcic6XG4gICAgICAgIGNzcyArPSBgJjo6cGxhY2Vob2xkZXIsICYgKjo6cGxhY2Vob2xkZXIsICYgKltkYXRhLXBsYWNlaG9sZGVyXSB7Y29sb3I6ICR7cGFsZXR0ZVt2YWx1ZV0gfHwgdmFsdWV9Oy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Y29sb3I7fWBcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9yZGVyU3R5bGUnOlxuICAgICAgICBjc3MgKz0gYGJvcmRlci1zdHlsZTogJHt2YWx1ZX07YFxuXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwb3NpdGlvbic6XG4gICAgICAgIGNzcyArPSBgcG9zaXRpb246ICR7dmFsdWV9O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY3NzICs9IGAke3BhcmFtfTogJHtNYXRoLmFicyh2YWx1ZSkgPiAxID8gYCR7dmFsdWV9cHhgIDogYCR7dmFsdWUgKiAxMDB9JWB9O2BcblxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZm9jdXMnOiB7XG4gICAgICAgIGNzcyArPSAnb3V0bGluZTogbm9uZTsnXG5cbiAgICAgICAgaWYgKCF2YWx1ZSkgYnJlYWtcblxuICAgICAgICBjb25zdCBjb2xvciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IGZvY3VzLmNvbG9yW3BhcmFtcy52YXJpYW50IHx8ICdkZWZhdWx0J11cblxuICAgICAgICBmb2N1c1N0YXRlLnB1c2goYFxuICAgICAgICAgIGJveC1zaGFkb3c6ICR7Zm9jdXMuc2hhcGV9ICR7cGFsZXR0ZVtjb2xvcl0gfHwgY29sb3J9O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBgKVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgY3NzICs9IHZhbHVlID09PSBmYWxzZSA/ICd2aXNpYmlsaXR5OiBoaWRkZW47JyA6ICcnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdvcGFjaXR5JzpcbiAgICAgICAgY3NzICs9IGBvcGFjaXR5OiAke3ZhbHVlfTtgXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICAgIGlmICghdmFsdWUpIGJyZWFrXG5cbiAgICAgICAgY3NzICs9ICdwb2ludGVyLWV2ZW50czogbm9uZTsnXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NoYXBlJzoge1xuICAgICAgICBpZiAodmFsdWUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICog0JHQu9C40L3QuiDQvtC60YDRg9Cz0LvRj9C10YIg0LHQvtC70YzRiNC+0Lkg0YDQsNC00LjRg9GBINC00L4g0YbQtdC70L7Qs9C+INCy0L3QuNC3LCDQt9Cw0LzQtdGC0L3QviDQvdCwINC80LDQu9C10L3RjNC60LjRhSDQutGA0YPQttC+0YfQutCw0YUg0L3QtdGH0LXRgtC90L7QuSDQstGL0YHQvtGC0YtcbiAgICAgICAgICAgKiBodHRwczovL2pyLmF2aXRvLnJ1L2Jyb3dzZS9NRFAtMTM5NVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNzcyArPSAnYm9yZGVyLXJhZGl1czogNTAlOydcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09ICdwaWxsJykge1xuICAgICAgICAgIC8vINC90LUg0YHQvtCy0YHQtdC8INC60YDRg9Cz0LvRi9C1INC60L7Qu9Cx0LDRgdC60Lgg0L/Rg9GB0YLRjCDRg9C2INCx0YPQtNGD0YJcbiAgICAgICAgICBjc3MgKz0gJ2JvcmRlci1yYWRpdXM6IDEwMHB4OydcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09ICdjaXJjbGUnIHx8IHZhbHVlID09PSAnc3F1YXJlJykge1xuICAgICAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IHBhcmFtcy5oZWlnaHQgfHwgcGFyYW1zLm1pbkhlaWdodFxuXG4gICAgICAgICAgaWYgKHRhcmdldEhlaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSBgJHtkaW1lbnNpb24ucm93SGVpZ2h0W3RhcmdldEhlaWdodCFdIHx8IHRhcmdldEhlaWdodH1weDtgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NoYWRvdyc6IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIGJyZWFrXG5cbiAgICAgICAgY3NzICs9IGBib3gtc2hhZG93OiAke3ZhbHVlfTtgXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3BvaW50ZXJFdmVudHMnOiB7XG4gICAgICAgIGNzcyArPSBgcG9pbnRlci1ldmVudHM6ICR7dmFsdWUgPyAnYXV0bycgOiAnbm9uZSd9O2BcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIEV4aGF1c3RpdmUgc3dpdGNoIGd1YXJkXG4gICAgICAgIGFzc2VydEV4aGF1c3RpdmU8J3ZhcmlhbnQnIHwgJ2FkamFjZW50U2VsZWN0b3InIHwgJ3RyYW5jYXRlJyB8ICdzY3JvbGwnPihwYXJhbSlcbiAgICB9XG4gIH1cblxuICBpZiAocGFkZGluZy5sZW5ndGggIT09IDApIHtcbiAgICBjc3MgKz0gYCYmJiB7XG4gICAgICAke3BhZGRpbmcuam9pbignJyl9XG4gICAgfWBcbiAgfVxuICBpZiAobWFyZ2luLmxlbmd0aCAhPT0gMCkge1xuICAgIGNzcyArPSBgJiYmIHtcbiAgICAgICR7bWFyZ2luWzBdID8gYG1hcmdpbi10b3A6ICR7bWFyZ2luWzBdfTtgIDogJyd9XG4gICAgICAke21hcmdpblsxXSA/IGBtYXJnaW4tcmlnaHQ6ICR7bWFyZ2luWzFdfTtgIDogJyd9XG4gICAgICAke21hcmdpblsyXSA/IGBtYXJnaW4tYm90dG9tOiAke21hcmdpblsyXX07YCA6ICcnfVxuICAgICAgJHttYXJnaW5bM10gPyBgbWFyZ2luLWxlZnQ6ICR7bWFyZ2luWzNdfTtgIDogJyd9XG4gICAgfWBcbiAgfVxuXG4gIGxldCBzZWxlY3RvciA9IG51bGxcbiAgaWYgKHBhcmFtcy5hZGphY2VudFNlbGVjdG9yKSB7XG4gICAgY29uc3QgYmVmb3JlID0gcGFyYW1zLmFkamFjZW50U2VsZWN0b3JcblxuICAgIHNlbGVjdG9yID0ge1xuICAgICAgY2hlY2tlZDogYCR7YmVmb3JlfTpjaGVja2VkICsgJiwgJHtiZWZvcmV9W2FyaWEtY2hlY2tlZD10cnVlXSArICZgLFxuICAgICAgdmlzaXRlZDogYCR7YmVmb3JlfTp2aXNpdGVkICsgJmAsXG4gICAgICBob3ZlcjogYCR7YmVmb3JlfTpob3ZlciArICZgLFxuICAgICAgYWN0aXZlOiBgJHtiZWZvcmV9OmVuYWJsZWQ6YWN0aXZlICsgJiwgJHtiZWZvcmV9W2RhdGEtc3RhdGU9YWN0aXZlXSArICZgLFxuICAgICAgZm9jdXM6IGAke2JlZm9yZX06Zm9jdXMgKyAmYCxcbiAgICAgIGRpc2FibGVkOiBgJHtiZWZvcmV9OmRpc2FibGVkICsgJiwgJHtiZWZvcmV9W2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gKyAmYCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2VsZWN0b3IgPSB7XG4gICAgICBjaGVja2VkOiAnJlthcmlhLWNoZWNrZWQ9dHJ1ZV0sICZbZGF0YS1zdGF0ZX49Y2hlY2tlZF0nLFxuICAgICAgdmlzaXRlZDogJyY6dmlzaXRlZCcsXG4gICAgICBob3ZlcjogJyY6aG92ZXInLFxuICAgICAgYWN0aXZlOiAnJjpub3QoOmRpc2FibGVkKTphY3RpdmUsICZbZGF0YS1zdGF0ZX49YWN0aXZlXScsXG4gICAgICBmb2N1czogJyYmOmZvY3VzLCAmJltkYXRhLXN0YXRlfj1mb2N1c10nLFxuICAgICAgZGlzYWJsZWQ6ICcmOmRpc2FibGVkLCAmW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0sICZbZGF0YS1zdGF0ZX49ZGlzYWJsZWRdJyxcbiAgICB9XG4gIH1cblxuICBpZiAoY2hlY2tlZFN0YXRlLmxlbmd0aCkge1xuICAgIGNzcyArPSBgJHtzZWxlY3Rvci5jaGVja2VkfXske2NoZWNrZWRTdGF0ZS5qb2luKCcnKX19YFxuICB9XG4gIGlmICh2aXNpdGVkU3RhdGUubGVuZ3RoKSB7XG4gICAgY3NzICs9IGAke3NlbGVjdG9yLnZpc2l0ZWR9eyR7dmlzaXRlZFN0YXRlLmpvaW4oJycpfX1gXG4gIH1cbiAgaWYgKGhvdmVyU3RhdGUubGVuZ3RoKSB7XG4gICAgY3NzICs9IGAke3NlbGVjdG9yLmhvdmVyfXske2hvdmVyU3RhdGUuam9pbignJyl9fWBcbiAgfVxuICBpZiAoYWN0aXZlU3RhdGUubGVuZ3RoKSB7XG4gICAgY3NzICs9IGAke3NlbGVjdG9yLmFjdGl2ZX17JHthY3RpdmVTdGF0ZS5qb2luKCcnKX19YFxuICB9XG4gIGlmIChmb2N1c1N0YXRlLmxlbmd0aCkge1xuICAgIGNzcyArPSBgJHtzZWxlY3Rvci5mb2N1c317JHtmb2N1c1N0YXRlLmpvaW4oJycpfX1gXG4gIH1cbiAgaWYgKGRpc2FibGVkU3RhdGUubGVuZ3RoKSB7XG4gICAgY3NzICs9IGAke3NlbGVjdG9yLmRpc2FibGVkfXske2Rpc2FibGVkU3RhdGUuam9pbignJyl9fWBcbiAgfVxuXG4gIGlmICh3aWR0aC5lbmRzV2l0aCgnJScpICYmIChtYXJnaW5bMV0gfHwgbWFyZ2luWzNdKSkge1xuICAgIHdpZHRoID0gYGNhbGMoJHt3aWR0aH0gLSAke21hcmdpblsxXSB8fCAnMHB4J30gLSAke21hcmdpblszXSB8fCAnMHB4J30pYFxuICB9XG5cbiAgaWYgKHdpZHRoKSB7XG4gICAgY3NzICs9IGB3aWR0aDogJHt3aWR0aH07YFxuICB9XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY3NzICs9IGBkaXNwbGF5OiAke2Rpc3BsYXl9O2BcbiAgfVxuXG4gIHJldHVybiBjc3Ncbn1cblxudHlwZSBGb2xkZWRJdGVtVGhlbWU8SXRlbVRoZW1lPiA9IEl0ZW1UaGVtZSBleHRlbmRzIFNjaGVtZVR5cGU8aW5mZXIgSW5Qcm9wcywgaW5mZXIgT3V0UHJvcHMsIGluZmVyIEV4dHJhU3R5bGU+ID8ge1xuICBzdHlsZTogU3R5bGVQcm9wZXJ0aWVzICYgRXh0cmFTdHlsZSxcbiAgcHJvcHM6IE91dFByb3BzLFxuICBjb21wb25lbnQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PE91dFByb3BzPiB8IFJlYWN0LkNvbXBvbmVudENsYXNzPE91dFByb3BzPixcbn0gOiBuZXZlclxuXG5leHBvcnQgdHlwZSBGb2xkVGhlbWVQYXJhbXNSZXR1cm48Q29tcG9uZW50VGhlbWU+ID0gQ29tcG9uZW50VGhlbWUgZXh0ZW5kcyB7IHNjaGVtZTogb2JqZWN0IH0gPyB7XG4gIFtLIGluIGtleW9mIENvbXBvbmVudFRoZW1lWydzY2hlbWUnXV06IEZvbGRlZEl0ZW1UaGVtZTxDb21wb25lbnRUaGVtZVsnc2NoZW1lJ11bS10+XG59IDogbmV2ZXJcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRUaGVtZVBhcmFtczxUIGV4dGVuZHMgeyBzY2hlbWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfT4oXG4gIHByb3BzOiBhbnksXG4gIHsgc2NoZW1lIH06IFRcbik6IEZvbGRUaGVtZVBhcmFtc1JldHVybjxUPiB7XG4gIGNvbnN0IHJlc3VsdDogYW55ID0ge31cblxuICBsZXQgbmFtZToga2V5b2YgdHlwZW9mIHNjaGVtZVxuICBmb3IgKG5hbWUgaW4gc2NoZW1lKSB7XG4gICAgcmVzdWx0W25hbWVdID0gZm9sZFNjaGVtZShzY2hlbWVbbmFtZV0sIHByb3BzKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG50eXBlIHZhbHVlb2Y8VCwgS2V5ID0gc3RyaW5nPiA9IFRbS2V5IGV4dGVuZHMga2V5b2YgVCA/IEtleSA6IGtleW9mIFRdXG50eXBlIFRoZW1lU3R5bGU8Q29tcG9uZW50VGhlbWUsIEtleT4gPSBDb21wb25lbnRUaGVtZSBleHRlbmRzIG9iamVjdFxuICA/IHZhbHVlb2Y8Rm9sZFRoZW1lUGFyYW1zUmV0dXJuPENvbXBvbmVudFRoZW1lPiwgS2V5Plsnc3R5bGUnXVxuICA6IG5ldmVyXG5cbmludGVyZmFjZSBTZWxlY3RvcjxQcm9wcywgQ29tcG9uZW50VGhlbWUsIEtleT4ge1xuICB0OiAocHJvcHM6IFByb3BzLCB0aGVtZTogVGhlbWUsIHNjaGVtZVN0eWxlOiBUaGVtZVN0eWxlPENvbXBvbmVudFRoZW1lLCBLZXk+KSA9PiBhbnk7XG4gIGY6IChwcm9wczogUHJvcHMsIHRoZW1lOiBUaGVtZSkgPT4gYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xhc3NOYW1lPFByb3BzLCBDb21wb25lbnRUaGVtZSBleHRlbmRzIG9iamVjdCB8IG51bGwgPSBudWxsLCBQcmltYXJ5Q29tcG9uZW50ID0gc3RyaW5nPihcbiAgY3JlYXRlUnVsZTogKFxuICAgIHNjaGVtZVN0eWxlOiBUaGVtZVN0eWxlPENvbXBvbmVudFRoZW1lLCBQcmltYXJ5Q29tcG9uZW50PixcbiAgICBwcm9wczogUHJvcHMsXG4gICAgdGhlbWU6IFRoZW1lKSA9PiBTdHlsZVByb3BlcnRpZXMgJiBEaXNwbGF5LFxuICBjcmVhdGVVc2VyUnVsZT86IChcbiAgICB0ZXh0UnVsZXM6IHN0cmluZyxcbiAgICBwcm9wczogUHJvcHMsXG4gICAgdGhlbWU6IFRoZW1lLFxuICAgIHNjaGVtZVN0eWxlOiBUaGVtZVN0eWxlPENvbXBvbmVudFRoZW1lLCBQcmltYXJ5Q29tcG9uZW50PikgPT4gYW55XG4pOiBTZWxlY3RvcjxQcm9wcywgQ29tcG9uZW50VGhlbWUsIFByaW1hcnlDb21wb25lbnQ+W0NvbXBvbmVudFRoZW1lIGV4dGVuZHMgb2JqZWN0ID8gJ3QnIDogJ2YnXSB7XG4gIHJldHVybiAocHJvcHM6IFByb3BzLCB0aGVtZTogVGhlbWUsIHNjaGVtZVN0eWxlPzogVGhlbWVTdHlsZTxDb21wb25lbnRUaGVtZSwgUHJpbWFyeUNvbXBvbmVudD4pID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSBjcmVhdGVSdWxlKHNjaGVtZVN0eWxlIGFzIGFueSwgcHJvcHMsIHRoZW1lKVxuICAgIGNvbnN0IHRleHRSdWxlcyA9IGdldFN0eWxlcyhzdHlsZXMsIHRoZW1lKVxuXG4gICAgY29uc3QgcmVzdWx0UnVsZXMgPSBjcmVhdGVVc2VyUnVsZVxuICAgICAgPyBjcmVhdGVVc2VyUnVsZSh0ZXh0UnVsZXMsIHByb3BzLCB0aGVtZSwgc2NoZW1lU3R5bGUgYXMgYW55KVxuICAgICAgOiB0ZXh0UnVsZXNcblxuXG4gICAgcmV0dXJuIHR5cGVvZiByZXN1bHRSdWxlcyA9PT0gJ3N0cmluZycgPyBjc3NgJHtyZXN1bHRSdWxlc31gIDogcmVzdWx0UnVsZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRFeGhhdXN0aXZlPEs+KHY6IEspIHt9XG4iXX0= */") : resultRules;
  };
}

function assertExhaustive(v) {}
//# sourceMappingURL=getThemeStyle.js.map