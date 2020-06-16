import _extends from "@babel/runtime/helpers/esm/extends";
//import 'core-js/stable'
import { aaa } from './test-out';
var a = {
  b: 'string'
};

var b = _extends({}, a, {
  A: 'AA'
});

b.b.padEnd(5, '_');
var c = aaa.b.padStart(5, '_');
export { c };