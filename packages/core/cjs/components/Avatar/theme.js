"use strict";

exports.__esModule = true;
exports.avatarTheme = void 0;

var _icons = require("../Icon/icons/");

var avatarTheme = {
  defaultProps: {
    size: 20,
    type: 'person'
  },
  scheme: {
    Wrapper: {
      style: {
        color: 'white',
        align: 'center',
        valignSelf: 'middle',
        width: function width(p) {
          return p.size;
        },
        height: function height(p) {
          return p.size;
        },
        shape: 'circle',
        overlayDisabled: 'rgba(255, 255, 255, 0.5)',
        fontSize: function fontSize(p) {
          return 0.6 * p.size;
        }
      },
      isFallback: {
        style: {
          bg: 'gray4',
          color: 'gray28',
          valign: 'middle',
          align: 'center'
        }
      }
    },
    Badge: {
      props: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: function width(p) {
          return p.size / 4;
        },
        height: function height(p) {
          return p.size / 4;
        }
      }
    },
    Fallback: {
      component: _icons.UserIcon,
      props: {
        size: function size(p) {
          return 0.48 * p.size;
        }
      },
      type: {
        company: {
          component: _icons.CompanyUserIcon
        },
        shop: {
          component: _icons.ShopUserIcon
        }
      }
    }
  }
};
exports.avatarTheme = avatarTheme;
//# sourceMappingURL=theme.js.map