"use strict";

exports.__esModule = true;
exports.listItemTheme = void 0;
var listItemTheme = {
  beforeTreshold: 82,
  afterTreshold: 82,
  scheme: {
    ListItem: {
      props: {
        pt: 10,
        pb: 12,
        px: 16,
        spacing: 16,
        valign: 'middle',
        minHeight: 52
      },
      onClick: {
        props: {
          bgActive: 'gray4'
        }
      }
    },
    Before: {
      props: {}
    },
    StackText: {
      props: {
        spacing: 2
      }
    },
    Label: {
      props: {
        size: 'm'
      },
      disabled: {
        props: {
          color: 'gray48'
        }
      }
    },
    Caption: {
      props: {
        size: 's',
        color: 'gray40'
      },
      disabled: {
        props: {
          color: 'gray32'
        }
      }
    },
    Link: {
      props: {
        size: 's'
      }
    },
    After: {
      props: {}
    }
  }
};
exports.listItemTheme = listItemTheme;
//# sourceMappingURL=theme.js.map