var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|alt|autoComplete|autoPlay|capture|checked|className|content|contentEditable|disabled|draggable|form|formAction|hidden||href|hrefLang|htmlFor|id|label|lang|max|maxLength|media|method|min|minLength|multiple|muted|name|noValidate|open|pattern|placeholder|playsInline|preload|radioGroup|readOnly|referrerPolicy|rel|required|role|rows|rowSpan|selected|src|srcSet|style|tabIndex|target|title|type|value|about|datatype|typeof|autoCapitalize|autoCorrect|autoSave|alphabetic|autoReverse|viewBox|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/ // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

const isPropValid = (prop: any) => {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91
}

const filterProps = (props: any) => {
  let ret: any = {}

  for (let prop in props) {
    if (isPropValid(prop)) {
      ret[prop] = props[prop]
    }
  }
  return ret
}

export default filterProps