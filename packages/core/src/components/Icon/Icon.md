## Подключение
Для того чтобы ваш бандл имел минимальный размер, иконки были разделены на отдельно подключаемые компоненты.
```jsx static
import { SearchIcon } from '@avito/mobile-components/icons'

...

<SearchIcon />
```

## Создание иконок

Чтобы добавить иконку в набор вам необходимо ее создать, вы можете это сделать как в своем репозитории так и в репозитории
`@avito/core` - общие иконки, будут доступны и в мобильном и в веб пакете с компонентами
`@avito/(platform)-components` - будут доступны только в платформенном пакете с компонентами

```js static
import React from 'react'
import { makeIcon } from '@avito/core'

export const CircleIcon = makeIcon({ viewBox: '0 0 4 4', name: 'circle' },
  <circle r={radius} cx='2' cy='2' />
)

AddNoteIcon.platform = 'mobile'
```

Динамические иконки создают через JSX-функцию:

```js
import { makeIcon } from '@avito/core'

// Для TS используйте makeIcon<{ radius: number }>
const BlinkIcon = makeIcon({
  viewBox: '0 0 4 4',
  name: 'blinker',
}, ({ radius }) => (
  <circle r={radius} cx='2' cy='2' />
))

const [time, setTime] = useState(1)
const advance = () => setTime(time + .1);

<Stack p={26} m={-26} cursor='default' spacing='s' onTouchMove={advance} onMouseMove={advance}>
  <Text>Погладь меня</Text>
  <BlinkIcon size='l' radius={1 + 0.5 * (1 + Math.sin(time))} />
</Stack>
```


## Размеры
Параметр `size` позволяет изменить размер. Доступные размеры `s`, `m`, `l`, `xl`.
Так же выможете передать число и оно будет преобразовано в пиксели `size`=`{35}`
Размер `auto` позволяет занять всю доступную высоту контейнера иконки.

```js
import { SearchIcon } from '../Icon/icons/'
import { Box } from '../Layout/';

<Stack spacing='m'>
  <Stack column align='center' spacing='s'>
    <Text>S</Text>
    <SearchIcon size='s' />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text>M</Text>
    <SearchIcon size='m' />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text>L</Text>
    <SearchIcon size='l' />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text>XL</Text>
    <SearchIcon size='xl' />
  </Stack>
  <Stack column align='center' spacing='s'>
    <Text>35px</Text>
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
import { SearchIcon } from '../Icon/icons/'
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
import { SearchIcon } from '../Icon/icons/'
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
import { SearchIcon } from '../Icon/icons/'
import { Stack } from '../Layout/';
const onClick = () => {};

<SearchIcon onClick={onClick} area={10}/>
```

## Вращение
Любую иконку можно вращать вокруг своей оси используя параметр `rotate`: `number`
Направление вращения начинается так же как и у параметров `margin` `padding`, то есть сверху

```js
import { ArrowIcon } from '../Icon/icons/'
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
import { ArrowIcon } from '../Icon/icons/'
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <ArrowIcon spin/>
  <ArrowIcon spin={0.3} />
  <ArrowIcon spin={5} />
</Stack>
```

### Список иконок
Все иконки находятся в текущем пакете с которым вы работаете
::: platform web
```jsx static
import { EndCallIcon } from '@avito/web-components/icons'
```
:::
::: platform mobile
```jsx static
import { EndCallIcon } from '@avito/mobile-components/icons'
```
:::

Для копирования названия иконки просто кликните по ней

```js
import * as mobileIcons from '@avito/mobile-components/icons'
import * as webIcons from '@avito/web-components/icons'

const { platform } = useStore(StyleguideStore)
const icons = Object.entries(platform === 'web' ? webIcons : mobileIcons)
  .filter(([name]) => name !== '__esModule')
  .sort(([name1], [name2]) => name1.localeCompare(name2));

<Stack wrap>
  {icons.map(([name, Icon]) => (
    <Box key={name} width={120} grow p={10} align='center' mb={16} bgHover='gray4' column onClick={() => copyText(name)}>
      <Icon />
      <Text size='xs' mt={8} align='center'>{name}</Text>
    </Box>
  ))}
</Stack>
```
