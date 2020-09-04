Пойнт привлекает внимание к элементу — его часто используют, чтобы указать на новую функцию (онбординг). Похожий компонент, который также показывает количество — бейдж.

Пойнт поддерживает несколько способов управления видимостью:

```js
import { Button } from '../Button'
import { Switcher } from '../Switcher'
import { Group } from '../Layout'

const [show, toggle] = useState(true);
const [count, setCount] = useState(1);

<Stack spacing='s' column>
  <Text block>
    <Box width={40}>
      <Point />
    </Box>
    Точка всегда видна по умолчанию
  </Text>
  <Text block>
    <Box width={40}>
      <Point show={show} />
    </Box>
    Явный проп show
    <Switcher ml={10} size='s' checked={show} onChange={e => toggle(e.checked)} />
  </Text>
  <Text block>
    <Box width={40}>
      <Point count={count} />
    </Box>
    Счетчик count &gt; 0
    <Group ml={20} valign='middle' spacing='s'>
      <Button size='s' onClick={() => setCount(count - 1)}>–</Button>
      <Box>{count}</Box>
      <Button size='s' onClick={() => setCount(count + 1)}>+</Button>
    </Group>
  </Text>
</Stack>
```

## Размер

`size` задаёт размер бейджа:

```js
<Stack spacing='s' column align='stretch'>
  <Stack valign='baseline'>
    <Text width={40}>s</Text>
    <Point size='s' />
  </Stack>
  <Stack valign='baseline'>
    <Text width={40}>m</Text>
    <Point size='m' />
  </Stack>
  <Stack valign='baseline'>
    <Text width={40}>l</Text>
    <Point size='l' />
  </Stack>
  <Stack valign='baseline'>
    <Text width={40}>3px</Text>
    <Point size={3} />
  </Stack>
</Stack>
```

## Цвет

`variant` управляет цветом пойнта:

```js
<Stack spacing='s' column>
  <Text block>
    <Point /> по умолчанию
  </Text>
  {['primary', 'secondary', 'success', 'warning', 'error'].map(variant => (
    <Text key={variant} block>
      <Point variant={variant} /> {variant}
    </Text>
  ))}
</Stack>
```

## Анимация

`pulse` добавляет пойнту выскакивающую обводку для привлечения внимания:

```jsx
<Stack spacing='m'>
  {['primary', 'secondary', 'success', 'warning', 'error'].map(variant => (
    <Point key={variant} pulse variant={variant} />
  ))}
</Stack>
```

## Расположение

Бейдж прицепляют к другим элементам через хелпер `Point.Over`. Положением управляют через `snapTop (Right / Bottom / Left)`. Остальные пропы передаются обертке.

```js
import { Button } from '@avito/core';
import { UserIcon } from '../Icon/icons';

<Stack spacing='s' column width={200} align='left'>
  <Point.Over gap snapTop={-2} snapRight={-2}>
    <Button preset='secondary'>Показать объявления</Button>
  </Point.Over>
  <Point.Over
    snapTop={-2}
    snapRight={-2}
    point={
      <Point
        gap
        bgHover='red600'
        cursor='pointer'
        onClick={() => alert('point click')} />}
  >
    <Button preset='secondary'>Нажми на пойнт</Button>
  </Point.Over>
  <Point.Over
    gap
    size='s'
    snapBottom
    snapRight
  >
    <UserIcon size='l' />
  </Point.Over>
</Stack>
```

Также бейдж ставят внутри элемента, рядом с ним или в тексте:

```jsx
import { PointOver } from './Point';
import { Button } from '@avito/core';

<Stack spacing='s' column width={200} align='left'>
  <Button preset='secondary' shape='pill'>
    Внутри элемента
    <Point ml={5} />
  </Button>
  <Stack>
    <Button preset='secondary'>Рядом с элементом</Button>
    <Point ml={9} />
  </Stack>
  <Stack spacing='s'>
    <Text>В тексте <Point /></Text>
  </Stack>
</Stack>
```

## Вырез

`gap` создает вырез под бейдж. `gapSize` изменяет толщину, `gapColor` — цвет. Обратите внимание, что вырез не влияет на бокс бейджа и корректировать `snap` не надо.

```js
import { Button } from '@avito/core';
import { Group } from '../Layout';

<Stack spacing='m' column width={200}>
  <Point.Over count={14} snapTop snapLeft>
    <Button shape='pill' block preset='secondary' size='m'>Без выреза</Button>
  </Point.Over>
  <Point.Over gap count={14} snapTop snapRight>
    <Button shape='pill' block preset='secondary' size='m'>Стандартный вырез</Button>
  </Point.Over>
  <Point.Over gapSize={4} count={14} snapBottom snapLeft>
    <Button shape='pill' block preset='secondary' size='m'>Большой вырез</Button>
  </Point.Over>
  <Box bg='gray12' p={16} m={-16} mt={0}>
    <Point.Over width={1} gapColor='gray12' count={14} snapBottom snapRight>
      <Button shape='pill' block preset='secondary' size='m'>Цветной вырез</Button>
    </Point.Over>
  </Box>
</Stack>
```
