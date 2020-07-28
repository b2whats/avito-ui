## Использование
Базовый компонент для более сложных компонентов

```jsx
import { Text } from '../Text/'
import { Image } from '../Image/';

<Card bg='gray4' image={<Image width={240} src='/girl_geo_900x900.png'/>} onClose={() => {}}>
  <Text>Объявления у вас в кармане</Text>
</Card>
```

## Крестик закрытия

Параметр `onClose` добавляет крестик закрытия, при нажатии будет вызвано связанное событие

```jsx
<Card bg='blue50' height={200} onClose={() => {}}></Card>
```

## Направление
По умолчанию компонент будет в горизонтальной раскладке

```jsx
<Card bg='blue50' height={200}></Card>
```

Параметр `column` задает вертикальное направление
```jsx
<Card bg='blue50' width={200} height={200} column></Card>
```

## Изображение

```jsx
import { Image } from '../Image/';

<Card bg='blue50' image={<Image width={240} src='/girl_geo_900x900.png'/>} onClose={() => {}}>Text</Card>
```

```jsx
import { Image } from '../Image/';

<Card bg='blue50' width={200} column image={<Image width={240} src='/girl_geo_900x900.png'/>} onClose={() => {}}>Text</Card>
```
