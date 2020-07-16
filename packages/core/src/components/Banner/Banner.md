## Использование
Расширение компонента [Card](/#/Компоненты/Card)

```jsx
import { Text } from '../Text/'
import { Image } from '../Image/';

<Banner width={700} bg='gray4' onClose={() => {}}>
  <Stack column spacing='s' fontSize='m'>
    <Text size={20} bold>Объявления у вас в кармане</Text>
    <Text>Управлять объявлениями проще с мобильным приложением Авито:</Text>
    <Text>Получайте мгновенные оповещения об изменении статуса объявлений.</Text>
  </Stack> 
</Banner>
```

```jsx
import { Text } from '../Text/'
import { Image } from '../Image/';

<Banner width={700} bg='gray4' image={<Image height={240} src='/girl_geo_900x900.png'/>} onClose={() => {}}>
  <Stack column spacing='s' fontSize='m'>
    <Text size={20} bold>Объявления у вас в кармане</Text>
    <Text>Управлять объявлениями проще с мобильным приложением Авито:</Text>
    <Text>Получайте мгновенные оповещения об изменении статуса объявлений.</Text>
  </Stack> 
</Banner>
```

```jsx
import { Text } from '../Text/'
import { Image } from '../Image/';

<Banner width={230} bg='gray4' image={<Image height={240} src='/girl_geo_900x900.png'/>} column onClose={() => {}}>
  <Text size={16} bold>Моментальные уведомления о новых сообщениях</Text>
</Banner>
```

