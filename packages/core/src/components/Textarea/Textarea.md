## Размеры

`size` — размер поля: `s`, `m` или `l`.

```jsx
const text = 'В 2017, 2018 и 2019 гг. в ООО «КЕХ еКоммерц» была проведена специальная оценка условий труда.';

<Stack column spacing={10}>
  <Textarea size='s' value={text} />
  <Textarea size='m' value={text} />
  <Textarea size='l' value={text} />
</Stack>
```

### Ширина

Поле занимает всю ширину родителя, если не указан явный `width` в пикселях или процентах. Ширину по сетке задают через `Grid + Box`.

```jsx
<Stack spacing='m' column>
  <Textarea width={200} placeholder='200px' />
  <Textarea inline width={0.5} placeholder='50%' />
  <Grid spacing='s' debug>
    <Box width={6/12}><Textarea block placeholder='6 колонок' /></Box>
    <Box width={4/12}><Textarea block placeholder='4 колонки' /></Box>
    <Box width={2/12}><Textarea block placeholder='2 колонки' /></Box>
  </Grid>
</Stack>
```

### Количество строк

`rows` — явная высота в строках

```jsx
<Stack spacing='m' spacingCross='m' wrap>
  <Textarea value='По умолчанию' />
  <Textarea rows={1} value='1' />
  <Textarea rows={2} value='2\n2' />
  <Textarea rows={3} value='3\n3\n3' />
</Stack>
```

`resizable` позволяет пользователю менять размер поля. `maxRows` — максимальное количество строк, `rows` — по умолчанию. Ширину можно ограничить через `maxWidth`.

```jsx
<Stack spacing='m' spacingCross='m' wrap>
  <Textarea resizable value='resizable' />
  <Textarea resizable maxWidth={200} value='resizable, до 200px по ширине' />
  <Textarea resizable rows={3} value='resizable, 3 строки по умолчанию' />
  <Textarea resizable rows={3} maxRows={5} value='resizable до 5 строк, 3 по умолчанию' />
</Stack>
```

`autoSize` подстраивает высоту поля к количеству введенных строк. `maxRows` — максимальное количество строк,
`rows` — минимальное.

```jsx
<Stack spacing='m' spacingCross='m' wrap>
  <Textarea autoSize value="autoSize" />
  <Textarea autoSize maxRows={3} value="autoSize до 3 строк" />
  <Textarea autoSize rows={1} maxRows={3} value="autoSize от 1 до 3 строк" />
</Stack>
```

## Состояния

`variant` — семантический цвет поля.

```jsx
<Stack spacing='m' spacingCross='m' wrap>
  <Textarea placeholder="primary" />
  <Textarea placeholder="secondary" variant='secondary' />
  <Textarea placeholder="success" variant='success' />
  <Textarea placeholder="warning" variant='warning' />
  <Textarea placeholder="error" variant='error' />
</Stack>
```

`disabled` отключает поле:

```jsx
<Stack spacing='m'>
  <Textarea value="enabled" />
  <Textarea disabled value="disabled со значением" />
</Stack>
```


## Очистка

`clearable` добавляет крестик очистки. `true` показывает крестик только при фокусе, `'always'` — всегда.

```jsx
<Stack spacing='m'>
  <Textarea placeholder="clearable" value="clearable" clearable />
  <Textarea placeholder="clearable='always'" value="clearable='always'" clearable='always' />
</Stack>
```
