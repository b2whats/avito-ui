## Тестовый блок

```js
import { Input } from '../Input/'
import { Stack } from '../Layout/'
const [state, setState] = useState('default')
;

<Stack spacing='m' column align='left'>
  <Text bold mb={5}>Текст на кнопке</Text>
  <Input minWidth={200} inline value={state} onChange={({ target: { value } }) => setState(value)}/>
  <Button>{state}</Button>
</Stack>
```

## Состояние

```js
import { Stack } from '../Layout/';

<Stack spacing='m' align='left' column>
  <Button>normal</Button>
  <Button checked>pressed/checked</Button>
  <Button loading>loading</Button>
  <Button disabled>disabled</Button>
</Stack>
```

## Размеры

Параметр `size` позволяет изменить размер. Доступные размеры `s`, `m`, `l`. По умолчанию
:::platform web
`s`
:::
:::platform mobile
`m`
:::
```js
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <Button size='s'>Size: s</Button>
  <Button size='m'>Size: m</Button>
  <Button size='l'>Size: l</Button>
</Stack>
```

## Многострочная кнопка

В кнопке размера `m` может быть несколько строк — нужен явный `<br />` и параметр `multiline`.

```js
import { Text } from '../Text/';
import { Stack } from '../Layout/';
import { SearchIcon } from '@avito/icons';

<Stack column spacing='m'>
  <Stack spacing='m'>
    <Button multiline>
      1 строка<br/>
      2 строка
    </Button>
    <Button multiline>
      Кнопка<br />
      <Text size="xs">мини-текст</Text>
    </Button>
    <Button iconBefore={ <SearchIcon /> } multiline>
      Две строки с иконкой?<br />
      <Text size="xs">Никаких проблем!</Text>
    </Button>
  </Stack>
  <Stack spacing='m'>
    <Button size='l' multiline>
      Кнопка побольше<br />
      <Text size="s">Тоже можно устроить</Text>
    </Button>
  </Stack>
</Stack>
```

## Форма кнопки

Параметр `shape` определяет форму кнопки. Доступные значения `pill`, `square`, `circle`.

```js
import { Text } from '../Text/';
import { Stack } from '../Layout/';

<Stack spacing='m'>
  <Button>default</Button>
  <Button shape='pill'>pill</Button>
  <Button shape='square'>S</Button>
  <Button shape='circle'>C</Button>
</Stack>
```

## Иконки в кнопке

Параметр `iconBefore` и `iconAfter` добавляю иконку до и после текста в кнопке.
Возможные значения:
renderProp - `(iconProps) => <SearchIcon {...iconProps}>`. `iconProps` - добавляет параметры темы
Component - `<SearchIcon color='black'/>`. Автоматически передает параметр темы, позволяя переопределить значения

```js
import { useTheme } from '../../theme/'
import { Stack, Box, Group } from '../Layout/'
import { Radio } from '../Radio/'
import * as icons from '@avito/icons'

const [props, setProps] = useState({ position: 'iconBefore' })
const { platform } = useStore(ThemeStore)

const onChange = ({ name, value }) => {
  setProps(state => ({
    ...state,
    [name]: value,
  }))
};

<Stack spacing='m' align='left' column>
  <Box py={20} align='center' block>
    <Button {...{ [props.position]: props.name && React.createElement(icons[props.name]) }}>Кнопка</Button>
  </Box>
  <Stack spacing='m' column>
    <Group mode='radio' name='position' spacing='m' value={props.position} onChange={onChange}>
      <Radio label='Слева' value='iconBefore' />
      <Radio label='Справа' value='iconAfter' />
    </Group>
    <select value={props.name} name='name' onChange={({ target: { name, value } }) => onChange({ name, value })} >
      {Object.keys(icons).map((name) => [undefined, platform].includes(icons[name].platform) && (
        <option key={name} value={name}>{name}</option>
      ))}
    </select>
  </Stack>
</Stack>
```


```js
import { SearchIcon } from '@avito/icons'
import { Text } from '../Text/'
import { Stack } from '../Layout/'
import { Icon } from '../Icon/';

<Stack spacing='m' align='left' column>
  <Button iconBefore={SearchIcon}>Кнопка</Button>
  <Button iconAfter={SearchIcon}>Кнопка</Button>
  <Button iconBefore={(iconProps) => <SearchIcon {...iconProps}/>}>Кнопка</Button>
  <Button iconBefore={<SearchIcon color='black'/>}>Кнопка</Button>
</Stack>
```

## Размеры кнопки

Доступные парамеры:
`width`, `maxWidth`, `minWidth` - ширина кнопки. Доступные значения: `number`
`height`, `maxHeight`, `minHeight` - высота кнопки. Доступные значения: `number`, `s`, `m`, `l`
`block`, `grow` - кнопка занимает всю возможную ширину родителя. Доступные значения: `boolean`
`shrik` - позволяет кнопке сжиматься в контексте компонента `Layout`. Доступные значения: `boolean`

Если значение ширины и высоты больше 1, размер устанавливается в пикселях `width={100}` = `100px`
Если значение ширины и высоты меньше 1, размер устанавливается в процентах `width={0.3}` = `30%`
Значения `s`, `m`, `l` берут свои размерности из темы

```js
import { Text } from '../Text/';
import { Box, Stack } from '../Layout/';

<Stack spacing='m' column>
  <Button width={150}>150px</Button>
  <Button width={0.3}>30%</Button>
  <Button grow>grow</Button>
  <Button block>block</Button>
  <Button width={150} height={50}>height 50px</Button>
</Stack>
```

Через `Grid + block` кнопка встраивается в модульную сетку:

```js
import { Box, Grid } from '../Layout/';
<Grid spacing='s' spacingY='s' debug>
  <Box width={1/6}>
    <Button block>Кнопка 1/6</Button>
  </Box>
  <Box width={2/6}>
    <Button block>Кнопка 2/6</Button>
  </Box>
  <Box width={3/6}>
    <Button block>Кнопка 3/6</Button>
  </Box>
</Grid>
```

## Кнопка как ссылка

Кнопка может выполнять роль ссылки, достаточно передать парамер `href`
```js
import { Text } from '../Text/';
import { Stack } from '../Layout/';

<Stack spacing={10}>
  <Button href='https://example.com'>Ссылка</Button>
  <Button href='https://example.com' disabled>Неактивная сылка</Button>
</Stack>
```

## Внешний вид кнопки

Параметр `preset` задает цветовую схему кнопки

::: platform mobile
```js
import { Stack } from '../Layout/'
import { SearchIcon } from '@avito/icons'
import { Text } from '../Text/'
;

<Stack column>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} spacingCross={10} valign='middle' wrap>
    <Text width={120}>accent</Text>
    <Button preset='accent'>Кнопка</Button>
    <Button preset='accent' disabled>Кнопка</Button>
    <Button preset='accent' loading>Кнопка</Button>
    <Button preset='accent' shape='pill'>Кнопка</Button>
    <Button preset='accent' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='accent' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} valign='middle' wrap>
    <Text width={120}>secondary</Text>
    <Button preset='secondary'>Кнопка</Button>
    <Button preset='secondary' disabled>Кнопка</Button>
    <Button preset='secondary' loading>Кнопка</Button>
    <Button preset='secondary' shape='pill'>Кнопка</Button>
    <Button preset='secondary' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='secondary' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} valign='middle' wrap>
    <Text width={120}>default</Text>
    <Button preset='default'>Кнопка</Button>
    <Button preset='default' disabled>Кнопка</Button>
    <Button preset='default' loading>Кнопка</Button>
    <Button preset='default' shape='pill'>Кнопка</Button>
    <Button preset='default' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='default' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} bg='gray4' valign='middle' wrap>
    <Text width={120}>defaultOnSurface</Text>
    <Button preset='defaultOnSurface'>Кнопка</Button>
    <Button preset='defaultOnSurface' disabled>Кнопка</Button>
    <Button preset='defaultOnSurface' loading>Кнопка</Button>
    <Button preset='defaultOnSurface' shape='pill'>Кнопка</Button>
    <Button preset='defaultOnSurface' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='defaultOnSurface' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} bg='gray84' valign='middle' wrap>
    <Text width={120} color='white'>defaultDark</Text>
    <Button preset='defaultDark'>Кнопка</Button>
    <Button preset='defaultDark' disabled>Кнопка</Button>
    <Button preset='defaultDark' loading>Кнопка</Button>
    <Button preset='defaultDark' shape='pill'>Кнопка</Button>
    <Button preset='defaultDark' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='defaultDark' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} valign='middle' wrap>
    <Text width={120}>outline</Text>
    <Button preset='outline'>Кнопка</Button>
    <Button preset='outline' disabled>Кнопка</Button>
    <Button preset='outline' loading>Кнопка</Button>
    <Button preset='outline' shape='pill'>Кнопка</Button>
    <Button preset='outline' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='outline' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} valign='middle' wrap>
    <Text width={120}>pay</Text>
    <Button preset='pay'>Кнопка</Button>
    <Button preset='pay' disabled>Кнопка</Button>
    <Button preset='pay' loading>Кнопка</Button>
    <Button preset='pay' shape='pill'>Кнопка</Button>
    <Button preset='pay' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='pay' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} valign='middle' wrap>
    <Text width={120}>appInstall</Text>
    <Button preset='appInstall'>Кнопка</Button>
    <Button preset='appInstall' disabled>Кнопка</Button>
    <Button preset='appInstall' loading>Кнопка</Button>
    <Button preset='appInstall' shape='pill'>Кнопка</Button>
    <Button preset='appInstall' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='appInstall' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
  <Stack p={10} spacing={10} spacingCross={10} pb={0} valign='middle' wrap>
    <Text width={120}>linkIncreased</Text>
    <Button preset='linkIncreased'>Кнопка</Button>
    <Button preset='linkIncreased' disabled>Кнопка</Button>
    <Button preset='linkIncreased' loading>Кнопка</Button>
    <Button preset='linkIncreased' shape='pill'>Кнопка</Button>
    <Button preset='linkIncreased' shape='square' iconBefore={<SearchIcon />} />
    <Button preset='linkIncreased' shape='circle' iconBefore={<SearchIcon />} />
  </Stack>
</Stack>
```
:::

::: platform web
```tsx
import { Stack } from '../Layout';

<Stack spacing="m" column>
  <Stack spacing="m">
    <Button>default</Button>
    <Button preset="newDefault">newDefault</Button>
    <Button preset="primary">primary</Button>
    <Button preset="success">success</Button>
    <Button preset="warning">warning</Button>
    <Button preset="error">error</Button>
  </Stack>
  <Stack spacing="m">
    <Button disabled>default</Button>
    <Button preset="newDefault" disabled>newDefault</Button>
    <Button preset="primary" disabled>primary</Button>
    <Button preset="success" disabled>success</Button>
    <Button preset="warning" disabled>warning</Button>
    <Button preset="error" disabled>error</Button>
  </Stack>
  <Stack spacing="m">
    <Button loading>default</Button>
    <Button preset="newDefault" loading>newDefault</Button>
    <Button preset="primary" loading>primary</Button>
    <Button preset="success" loading>success</Button>
    <Button preset="warning" loading>warning</Button>
    <Button preset="error" loading>error</Button>
  </Stack>
  <Stack spacing="m">
    <Button loading disabled>default</Button>
    <Button preset="newDefault" loading disabled>newDefault</Button>
    <Button preset="primary" loading disabled>primary</Button>
    <Button preset="success" loading disabled>success</Button>
    <Button preset="warning" loading disabled>warning</Button>
    <Button preset="error" loading disabled>error</Button>
  </Stack>
</Stack>
```
:::
