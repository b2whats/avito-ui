## Подключение
Для того что бы ваш бандл имел минимальный размер, иконки были разделены на отдельно подключаемые модули, которые будут зарегистрированы в списке для последующего использования.  
Что бы использовать необходимую иконку, нужно импортировать ее из пакета с иконками, далее в платформенном компоненте можно обращаться к ней по имени

```jsx static
import '@avito/icons/register/search'
import { Icon } from '@avito/(mobile|web)-component'

...

<Icon name='search' />
```

Если вы введете неправильное имя иконки, вы увидете такой значок  

```js
  <Icon name='not-found'/>
```

## Размеры
Параметр `size` позволяет изменить размер. Доступные размеры `s`, `m`, `l`.  
Так же выможете передать число и оно будет преобразовано в пиксели `size`=`{35}`  
Размер `auto` позволяет занять всю доступную высоту контейнера иконки.  

```js
import { Stack, Box } from '../Layout/';

<Stack spacing='m'>
  <Icon name='search' variant='primary' size='s' />
  <Icon name='search' variant='secondary' size='m' />
  <Icon name='search' variant='success' size='l' /> 
  <Icon name='search' variant='warning' size={35} />
  <Box width={200} height={100}>
    <Icon name='search' variant='warning' size='auto' />
  </Box>
</Stack>
```

## Параметры цвета
Параметр `color` устанавливае заливку иконки. Доступны все значения из палитры.  
По умолчанию иконка наследует цвет родителя.  

```js
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <Icon name='search' />
  <Icon name='search' color='blue500' />
</Stack>
```

## Тень
Параметр `shadow`: `boolean` устанавливае тень иконки.  

```js
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <Icon name='search' color='red200' size='l' shadow />
</Stack>
```

## Кликабельная область
Когда вы передаете событие обрабоки клика по иконке, у нее появляется невидимая подложка увеличивающая область размера для клика.  
Она никак не влияет на размер элемента, поэтому нужно быть аккуратным когда область клика есть у соседних элементов.  
Параметр `area`: `number` позволяе контролировать размер этой области, измеряется в `px`

```js
import { Stack } from '../Layout/';
const onClick = () => {};

<Icon name='search' onClick={onClick} area={10}/>
```

## Вращение
Любую иконку можно вращать вокруг своей оси используя параметр `rotate`: `number`  
Направление вращения начинается так же как и у параметров `margin` `padding`, то есть сверху

```js
import { Stack } from '../Layout/';
const onClick = () => {};

<Stack spacing='m'>
  <Icon name='arrow' />
  <Icon name='arrow' rotate={90} />
  <Icon name='arrow' rotate={180} />
  <Icon name='arrow' rotate={270} />
</Stack>
```

## Постоянное вращение
Вы можете задать анимацию враения у иконок с помощью параметра `spin`: `boolean` | `number`  
Скорость вращения можно регулировать передав число, значение измеряется в секундах

```js
import { Stack } from '../Layout/';
const onClick = () => {};

<Stack spacing='m'>
  <Icon name='arrow' spin/>
  <Icon name='arrow' spin={0.3} />
  <Icon name='arrow' spin={5} />
</Stack>
```

### Список иконок
Для копирования названия иконки, просто кликните по ней

```js
import '@avito/icons/register/mobile-platform'
import { icons } from '@avito/icons'
import { Icon } from '../Icon/'
import { Text } from '../Text/'
import { Stack, Box } from '../Layout/';

<Stack spacing='m' wrap>
  {Object.keys(icons).map((name) => !['component', 'playground'].includes(icons[name].category) && (
    <Box key={name} width={110} p={10} align='center' mb={16} bgHover='gray4' column onClick={() => copyText(name)}>
      <Icon name={name} />
      <Text size='xs' mt={8} align='center'>{name}</Text>
    </Box>
  ))}
</Stack>
```