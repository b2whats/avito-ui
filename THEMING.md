## Tokens format

`[compoenentName].[variation]_[cssProperty]_[state]` - схема по которой формируется токен компонента.

* `compoenentName` - имя компонента "input", "button", "checkbox"
* `variation` - комплексное свойство, отвечает за цветовые группы компонента "primary", "success"
* `cssProperty`(обязательное) - css свойство "backgroundColor", "fontSize", "margin"
Иногда может потребоваться в таких свойствах как "margin", "padding" оперировать горизонтальными и вертикальными отступами,
в этом случае допускается указывать "marginX", "marginY"
* `state` - "focus", "selected", "error", "hover", "active" ...