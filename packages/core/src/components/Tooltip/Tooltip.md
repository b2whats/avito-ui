### Импорт

::: platform mobile
```jsx static
import { Tooltip } from "@avitoi/mobile-components";
```
:::
::: platform web
```jsx static
import { Tooltip } from "@avitoi/web-components";
```
:::

Компонент построен на базе библиотеки `PopperJS` и поддерживает все доступные модификаторы.

### Использование

```jsx static
function Module() {
  const content = 'Текст подсказки'
  return (
    <Tooltip content={content}>
      <Button>Рядом с чем появляется подсказка</Button>
    </Tooltip>
  )
}
```

Параметр `content` может быть как строкой так и любым реакт компонентом, он будет отображен во всплывающей подсказке  
Параметр `children` обязательно должен быть реакт компонентом в котором вы должны поддерживать следующие события:
```js static
onClick, onFocus, onBlur, onMouseEnter, onMouseLeave
```
Эти обработчкики колбеков будут переданы в ваш компонент и будут отвечать за появления `Tooltip`

### Позиция
Так как Tooltip работает на базе PopperJS, вы можете изменить расположение компонента, передав `placement` параметр.  
Возможные значения:

```js static
  placement: 'auto' | 'auto-start' | 'auto-end' |
    'top' | 'bottom' | 'right' | 'left' | 
    'top-start' | 'top-end' | 'bottom-start' |
    'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end'
```
Значение по умолчанию: `bottom`

### Триггеры

Вся логика по взаимодействию с tooltip встроена в сам компонент, для этого есть параметр  `trigger` : `hover` | `click`  

Разные значения будут прокидывать разные обработчики событий в ваш целевой элемент:
```js static
  hover -> onFocus, onBlur, onMouseEnter, onMouseLeave
  click -> onClick
```
Обязаельно позаботьтесь что бы ваш компонент поддерживал эти события для правильной работы  

Начальное состояние видимости вы можете установить передав параметр `open`: `boolean`

### Контролируемое использование
Мы постарались охватить все возможные сценарии использования компонента, но вам может потребоваться изменить встроенное поведение, для этого у вас есть возможность
самим отвечать за появление и закрытие tooltip оперируя следующими параметрами:  
```js static
  open: boolean,
  onOpen: () => void
  onClose: () => void
```

### Дополнительные триггеры
Компонент поддерживает дополнительные параметры отвечающие за видимость компонента  
```jsx static
  /* Закрыть при нажатии на клавишу ESC */
  closeOnEsc?: boolean
  /* Закрыть при клике на странице исключая триггер элемент и сам компонент */
  closeOnOutsideClick?: boolean
  /* Закрыть при прокручивании страницы */
  closeOnScroll?: boolean
```

### Ширина
Есть 3 параметра которые влияют на ширину
```jsx static
  /* Ширина tooltip */
  width?: 'reference' | number
  /* Минимальная ширина tooltip */
  minWidth?: 'reference' | number
  /* Максимальная ширина tooltip */
  maxWidth?: 'reference' | number
```

Значение `reference` устанавливает такую же ширину как и у целевого элемента рядом с которым расположен tooltip. Так же вы можете передать числовое значение. 
Значения меньше единицы будут преобразованы в проценты, 

### Задержка при изменении состояния
Можно настроить время появляения и исчезновения компонента
```jsx static
  delayIn?: number
  delayOut?: number
```

### Анимация
Компонент на данный момент поддерживает только один тип анимации, это плавное появление, которое установлено по умолчанию 
```jsx static
  animation?: 'fade' | false
```

### Дополнительные настройки
Это не рекомендуется, но у компонента есть возможность изменить внутреннее поведение работы библиотеки PopperJS
```jsx static
  /* Смещение target относиельно reference */
  offset?: false | object
  /* Перемещение при нехватке места */
  flip?: false | object
  /* Параметры для срелки */
  arrow?: false | object
  /* Параметры для переполнения */
  preventOverflow?: false | object
  /* Параметры для скрытия target когда reference вышел за область видимости */
  hide?: false | object
  /* Описывает стратегию позиционирования */
  strategy?: 'fixed' | 'absolute',
 ```

Все возможные значения для этих параметров вы можете посмотреть на странице библиотеки [PopperJS](https://popper.js.org/docs/v2/modifiers/). Если вам
необходимо выключить определенный модификатор, установите значение параметра как `false`



```js
import { Text } from '../Text/'
import { Button } from '../Button/'
import { Stack, Box } from '../Layout/'
const i = useRef(0)
const [props, setProps] = useState({ open: true, trigger: 'click', animation: 'fade', placement: 'bottom', usePortal: false })
const onToggleProps = (name) => () => setProps(props => ({ ...props, [name]: !props[name] }))
const onToggleDelay = (name) => () => setProps(props => ({ ...props, [name]: props[name] ? 0 : 1000 }))
const onToggleTrigger = () => setProps(props => ({ ...props, trigger: trigger[++i.current] || trigger[i.current = 0] }))
const onToggleAnimation = () => setProps(props => ({ ...props, animation: props.animation ? undefined : 'fade' }))
const onPlacementChange = (placement) => () => setProps(props => ({ ...props, placement }))
const onOutsideClick = React.useCallback(() => { console.log('onOutsideClick') }, [])

const text = 'Компонент Tooltip'
const trigger = ['click', 'hover']
const placement = [
  "auto", "auto-start", "auto-end",
  "top", "bottom", "right", "left", 
  "top-start", "top-end", "bottom-start",
  "bottom-end", "right-start", "right-end", "left-start", "left-end"
];

<Stack spacing='m' column>
  <Text size='l'>Позиция</Text>
  <Stack spacing='xs' spacingCross='xs' wrap>
    {placement.map(position => (
      <Button key={position} size='s' onClick={onPlacementChange(position)}>{position}</Button>
    ))} 
  </Stack>
  <Stack spacing='xs' valign='middle'>
    <Text>Состояние</Text>
    <Button size='s' onClick={onToggleProps('open')}>{props.open ? 'Hide' : 'Show'}</Button>
  </Stack>
  <Stack spacing='xs' valign='middle'>
    <Text>Триггер</Text>
    <Button size='s' onClick={onToggleTrigger}>{trigger[i.current + 1] || trigger[0]}</Button>
  </Stack>
  <Stack spacing='xs' valign='middle'>
    <Text>Дополнительный триггер</Text>
    <Button size='s' onClick={onToggleProps('closeOnEsc')}>closeOnEsc: {props.closeOnEsc ? 'off' : 'on'}</Button>
    <Button size='s' onClick={onToggleProps('closeOnOutsideClick')}>closeOnOutsideClick: {props.closeOnOutsideClick ? 'off' : 'on'}</Button>
    <Button size='s' onClick={onToggleProps('closeOnScroll')}>closeOnScroll: {props.closeOnScroll ? 'off' : 'on'}</Button>
  </Stack>
  <Stack spacing='xs' valign='middle'>
    <Text>Задержка при изменении состояния</Text>
    <Button size='s' onClick={onToggleDelay('delayIn')}>delayIn: {props.delayIn ? 0 : 1000}</Button>
    <Button size='s' onClick={onToggleDelay('delayOut')}>delayOut: {props.delayOut ? 0 : 1000}</Button>
  </Stack>
  <Stack spacing='xs' valign='middle'>
    <Text>Использовать портал</Text>
    <Button size='s' onClick={onToggleProps('usePortal')}>usePortal: {props.usePortal ? 'off' : 'on'}</Button>
  </Stack>
  <Stack spacing='xs' valign='middle'>
    <Text>Анимация</Text>
    <Button size='s' onClick={onToggleAnimation}>Animation: {props.animation ? 'off' : 'on'}</Button>
  </Stack>
  <ScrollBox>
    <Tooltip {...props} content={<div onClick={() => console.log('click')}>{text}</div>} >
      <Box bg='gray8' width={250} align='center' valign='middle' pre p={10}>
        {JSON.stringify(props, null, '   ')
          .replace('{\n', '')
          .replace('}', '')
        }
      </Box>
    </Tooltip>
  </ScrollBox>
</Stack>
```
