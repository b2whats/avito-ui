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
  <Icon name='search' color='red200' size='l' shadow/>
</Stack>
```

## Кликабельная область
Когда вы передаете событие обрабоки клика по иконке, у нее появляется невидимая подложка увеличивающая область размера для клика.  
Она никак не влияет на размер элемента, поэтому нужно быть аккуратным когда область клика есть у соседних элементов.  
Параметр `area`: `number` позволяе контролировать размер этой области, измеряется в `px`

```js
import { Stack } from '../Layout/';
const onClick = () => {};

<Stack spacing='m'>
  <Icon name='search' onClick={onClick} area={10}/>
</Stack>
```

### Список иконок

```js
import '@avito/icons/register/all-icons'
import { icons } from '@avito/icons'
import { Icon } from '../Icon/'
import { Text } from '../Text/'
import { Stack, Box } from '../Layout/';

<Stack spacing='m' wrap>
  {Object.keys(icons).map((name) => !['component', 'playground'].includes(icons[name].category) && (
    <Box key={name} width={110} p={10} align='center' mb={16} column>
      <Icon name={name} />
      <Text size='xs' mt={8} align='center'>{name}</Text>
    </Box>
  ))}
</Stack>
```