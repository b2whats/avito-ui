## Подключение
Для того что бы ваш бандл имел минимальный размер, иконки были разделены на отдельно подключаемые компоненты.
```jsx static
import { SearchIcon } from '@avito/icons'

...

<SearchIcon />
```

Что бы добавить иконку в набор вам необходимо ее создать, вы можете это сделать как в локальном репозитории так и в репозитории с иконками

```js static
import React from 'react'
import { Icon } from '@avito/core'

export const AddNoteIcon = (props) => (
  <Icon {...props} viewBox='0 0 24 24' name='add-note'>
      <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 2a1 1 0 011-1h14a1 1 0 011 1v12.083A6.036 6.036 0 0019 14a5.973 5.973 0 00-3.318 1H7v2h6.803A5.972 5.972 0 0013 20c0 .34.028.675.083 1H5a1 1 0 01-1-1V2zm13 3H7v2h10V5zM7 10h10v2H7v-2zm11 9v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z'
    />
  </Icon>
)

AddNoteIcon.platform = 'mobile'
```

Обязательные для заполнения являются только `name`, `wievBox`, `children`

## Размеры
Параметр `size` позволяет изменить размер. Доступные размеры `s`, `m`, `l`.
Так же выможете передать число и оно будет преобразовано в пиксели `size`=`{35}`
Размер `auto` позволяет занять всю доступную высоту контейнера иконки.

```js
import { SearchIcon } from '@avito/icons'
import { Box } from '../Layout/';

<Stack spacing='m'>
  <Stack column align='center' spacing='s'>
    <Text >S</Text>
    <SearchIcon size='s' />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text >M</Text>
    <SearchIcon size='m' />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text >L</Text>
    <SearchIcon size='l' />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text >35px</Text>
    <SearchIcon size={35} />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text>Заполнить — auto</Text>
    <Box align='center' width={150} height={100} bg='gray4'>
      <SearchIcon size='auto' />
    </Box>
  </Stack>
</Stack>
```

## Параметры цвета
Параметр `color`, `colorHover` устанавливае заливку иконки. Доступны все значения из палитры.  
По умолчанию иконка наследует цвет родителя.  

```js
import { SearchIcon } from '@avito/icons'
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <SearchIcon />
  <SearchIcon color='blue500' />
  <SearchIcon color='blue500' colorHover='red500' />
</Stack>
```

## Тень
Параметр `shadow`: `boolean` устанавливае тень иконки.

```js
import { SearchIcon } from '@avito/icons'
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <SearchIcon color='red200' size='l' shadow />
</Stack>
```

## Кликабельная область
Когда вы передаете событие обрабоки клика по иконке, у нее появляется невидимая подложка увеличивающая область размера для клика.
Она никак не влияет на размер элемента, поэтому нужно быть аккуратным когда область клика есть у соседних элементов.
Параметр `area`: `number` позволяе контролировать размер этой области, измеряется в `px`

```js
import { SearchIcon } from '@avito/icons'
import { Stack } from '../Layout/';
const onClick = () => {};

<SearchIcon onClick={onClick} area={10}/>
```

## Вращение
Любую иконку можно вращать вокруг своей оси используя параметр `rotate`: `number`
Направление вращения начинается так же как и у параметров `margin` `padding`, то есть сверху

```js
import { ArrowIcon } from '@avito/icons'
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <ArrowIcon />
  <ArrowIcon rotate={90} />
  <ArrowIcon rotate={180} />
  <ArrowIcon rotate={270} />
</Stack>
```

## Постоянное вращение
Вы можете задать анимацию враения у иконок с помощью параметра `spin`: `boolean` | `number`
Скорость вращения можно регулировать передав число, значение измеряется в секундах

```js
import { ArrowIcon } from '@avito/icons'
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <ArrowIcon spin/>
  <ArrowIcon spin={0.3} />
  <ArrowIcon spin={5} />
</Stack>
```

### Системные иконки
В каждом платформенном пакете, есть иконки которые используются в компонентах, они так же доступны для ипорта и создания своих компонентов

::: platform web
```jsx static
import { CrossIcon } from '@avito/web-components'
```

```js
import * as components from '@avito/web-components'
import { Text } from '../Text/'
import { Stack, Box } from '../Layout/';

<Stack wrap>
  {Object.keys(components).map((name) => (
    components[name].category === 'component' &&
      <Box key={name} width={120} grow p={10} align='center' mb={16} bgHover='gray4' column onClick={() => copyText(name)}>
        {React.createElement(components[name])}
        <Text size='xs' mt={8} align='center'>{name}</Text>
      </Box>
  ))}
</Stack>
```
:::

::: platform mobile
```jsx static
import { CrossIcon } from '@avito/mobile-components'
```

```js
import * as components from '@avito/mobile-components'
import { Text } from '../Text/'
import { Stack, Box } from '../Layout/';

<Stack wrap>
  {Object.keys(components).map((name) => (
    components[name].category === 'component' &&
      <Box key={name} width={120} grow p={10} align='center' mb={16} bgHover='gray4' column onClick={() => copyText(name)}>
        {React.createElement(components[name])}
        <Text size='xs' mt={8} align='center'>{name}</Text>
      </Box>
  ))}
</Stack>
```
:::


### Список иконок
Для копирования названия иконки, просто кликните по ней

```js
import * as icons from '@avito/icons'
import { Text } from '../Text/'
import { Stack, Box } from '../Layout/'

const { platform } = useStore(ThemeStore);

<Stack wrap>
  {Object.keys(icons).map((name) => (
    [undefined, platform].includes(icons[name].platform) &&
      <Box key={name} width={120} grow p={10} align='center' mb={16} bgHover='gray4' column onClick={() => copyText(name)}>
        {React.createElement(icons[name])}
        <Text size='xs' mt={8} align='center'>{name}</Text>
      </Box>
  ))}
</Stack>
```