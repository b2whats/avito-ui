import _extends from "@babel/runtime/helpers/esm/extends";
import { c } from 'test';
var sp = {
  q: 1
};

var aaa = _extends({}, sp, {
  b: 'string',
  c: c
});

aaa.b.padEnd(1, 2);
export { aaa };