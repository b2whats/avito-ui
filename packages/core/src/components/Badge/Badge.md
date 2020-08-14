Отображает количество — например, новых объявлений или сообщений. Значения больше 99 отображаются как `99+`, ноль и отрицательные — не показываются:

```js
<Stack spacing='s' column>
  <Stack spacing='s'>
    <Box width={40}>
      <Badge count={11} />
    </Box>
    <Text>Обычное значение</Text>
  </Stack>
  <Stack spacing='s'>
    <Box width={40}>
      <Badge count={120} />
    </Box>
    <Text>Большое значение</Text>
  </Stack>
  <Stack spacing='s'>
    <Box width={40}>
      <Badge count='120' />
    </Box>
    <Text>count может быть числом-строкой</Text>
  </Stack>
  <Stack spacing='s'>
    <Box width={40}>
      <Badge count='>99' />
    </Box>
    <Text>не-числовые строки отображаются как есть</Text>
  </Stack>
  <Stack spacing='s' valign='stretch'>
    <Box bg='red100' width={40}>
      <Badge count={0} />
      <Badge count={-9} />
    </Box>
    <Text>Ноль или отрицательное значение не показываем...</Text>
  </Stack>
  <Stack spacing='s' valign='stretch'>
    <Box width={40}>
      <Badge showZero count={0} />
      <Badge showZero count={-9} ml={-2} gap />
    </Box>
    <Text>Но можно включить через опции</Text>
  </Stack>
</Stack>
```

## Размер

`size` задаёт размер бейджа:

```js
<Stack spacing='s' valign='baseline'>
  <Badge size='s' count={1} />
  <Badge size='m' count={3} />
  <Badge size='l' count={8} />
  <Badge size={30} fontSize={12} count={1} />
</Stack>
```

## Анимация

Чтобы привлечь внимание к изменению счетчика, `Badge` по умолчанию анимируется. `animateChange='none'` отключает анимацию.

```js
import { InputNumber } from '../Input'
const [count, setCount] = useState(98);

<Stack spacing='s' column width={200}>
  <InputNumber value={count} onChange={e => setCount(e.value)} positiveOnly={false} />
  <Stack>
    <Text grow>Анимация wheel</Text>
    <Badge count={count} />
  </Stack>
  <Stack>
    <Text grow>Без анимации</Text>
    <Badge animateChange='none' count={count} />
  </Stack>
</Stack>
```

## Расположение

Бейдж прицепляют к другим элементам через хелпер `Badge.Over`. Положением управляют через `snapTop (Right / Bottom / Left)`. Остальные пропы передаются обертке.

```js
import { Button } from '@avito/core';
import { UserIcon } from '../Icon/icons';

<Stack spacing='s' column width={200} align='left'>
  <Badge.Over gap count={14} snapTop={-8} snapRight={-8}>
    <Button preset='secondary'>Показать объявления</Button>
  </Badge.Over>
  <Badge.Over
    snapTop={-8}
    snapRight={-8}
    badge={
      <Badge
        gap
        count={14}
        bg='purple500'
        bgHover='purple600'
        cursor='pointer'
        onClick={() => alert('badge click')} />}
  >
    <Button preset='secondary'>Нажми на бейдж</Button>
  </Badge.Over>
  <Badge.Over
    gap
    size='s'
    count={7}
    snapBottom={-2}
    snapRight={-2}
  >
    <UserIcon size='l' />
  </Badge.Over>
</Stack>
```

Также бейдж ставят внутри элемента, рядом с ним или в тексте:

```jsx
import { BadgeOver } from './Badge';
import { Button } from '@avito/core';

<Stack spacing='s' column width={200} align='left'>
  <Button preset='secondary' shape='pill'>
    Внутри элемента
    <Badge count={3} gapSize={0} mr={-5} ml={5} />
  </Button>
  <Stack>
    <Button preset='secondary'>Рядом с элементом</Button>
    <Badge ml={9} count={14} valignSelf='middle' />
  </Stack>
  <Stack spacing='s' valign='baseline'>
    <Text>В тексте <Badge count={900}/></Text>
  </Stack>
</Stack>
```

## Вырез

`gap` создает вырез под бейдж. `gapSize` изменяет толщину, `gapColor` — цвет. Обратите внимание, что вырез не влияет на бокс бейджа и корректировать `snap` не надо.

```js
import { Button } from '@avito/core';
import { Group } from '../Layout';

<Stack spacing='m' column width={200}>
  <Badge.Over count={14} snapTop={-8} snapLeft={-8}>
    <Button block preset='secondary' size='m'>Без выреза</Button>
  </Badge.Over>
  <Badge.Over gap count={14} snapTop={-8} snapRight={-8}>
    <Button block preset='secondary' size='m'>Стандартный вырез</Button>
  </Badge.Over>
  <Badge.Over gapSize={4} count={14} snapBottom={-10} snapLeft={-10}>
    <Button block preset='secondary' size='m'>Большой вырез</Button>
  </Badge.Over>
  <Box bg='gray12' p={15} m={-15} mt={0}>
    <Badge.Over width={1} gapColor='gray12' count={14} snapBottom={-8} snapRight={-8}>
      <Button block preset='secondary' size='m'>Цветной вырез</Button>
    </Badge.Over>
  </Box>
</Stack>
```

## Текстовый бейдж

`kind='flat'` делает бейдж текстовым — без фона. Такой бейдж наследует стиль окружающего текста:

```js
import { InputNumber } from '../Input'
const [count, setCount] = useState(98);

<Stack spacing='s' column width={200} userSelect={false} cursor='pointer' >
  <Stack colorHover='red500' onClick={() => setCount(count - 1)}>
    <Text grow >Входящие</Text>
    <Badge kind='flat' count={count}/>
  </Stack>
  <Stack colorHover='red500' onClick={() => setCount(count + 1)}>
    <Text grow>Отправленные</Text>
    <Badge kind='flat' bold count={100 - count} />
  </Stack>
</Stack>
```