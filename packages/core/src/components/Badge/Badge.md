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
    <Text>Ноль или отрицательное значение не показываем</Text>
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
  <Badge.Over count={14} snapTop={-8} snapRight={-8}>
    <Button preset='secondary'>Показать объявления</Button>
  </Badge.Over>
  <Badge.Over
    snapTop={-8}
    snapRight={-8}
    badge={
      <Badge
        count={14}
        bg='purple500'
        bgHover='purple600'
        cursor='pointer'
        onClick={() => alert('badge click')} />}
  >
    <Button preset='secondary'>Нажми на бейдж</Button>
  </Badge.Over>
  <Badge.Over
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
    <Badge count={9} gapSize={0} mr={-5} ml={5} />
  </Button>
  <Stack spacing='s'>
    <Button preset='secondary'>Рядом с элементом</Button>
    <Badge count={9} valignSelf='middle' />
  </Stack>
  <Stack spacing='s' valign='baseline'>
    <Text>Входящие</Text>
    <Badge count={9}/>
  </Stack>
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