export function isMergeableObject(value: any) {
  return isNonNullObject(value) && !isSpecial(value)
}

function isNonNullObject(value: any) {
  return !!value && typeof value === 'object'
}

function isSpecial(value: object) {
  var stringValue = Object.prototype.toString.call(value)

  return stringValue === '[object RegExp]'
		  || stringValue === '[object Date]'
		  || isReactElement(value)
}

function isReactElement(value: object) {
  return '$$typeof' in value
}
