## Tokens format

`[compoenentName].[variation?]_[prop?]_[valueProp?]_[property]_[state?]` - схема по которой формируется токен компонента.

* `compoenentName` - имя компонента "input", "button", "checkbox"
* `variation` - комплексное свойство, отвечает за цветовые группы компонента "primary", "success"
* `prop` - иногда требуется настроить вид для параметра компонента, это свойство отражает параметр компонента
* `valueProp` - когда параметр имеет перечисляемый тип, необходимо его указать
* `property`(обязательное) - css свойство "backgroundColor", "fontSize", "margin",
  так же может содержать сокращенные варианты "transform: rotate(-2deg)" -> "rotate"
  Иногда может потребоваться в таких свойствах как "margin", "padding" оперировать горизонтальными и вертикальными отступами,
  в этом случае допускается указывать "marginX", "marginY"
* `state` - "focus", "selected", "error", "hover", "active" ...