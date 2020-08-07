## Использование
Расширение компонента [Card](/#/Компоненты/Card)

:::platform web
```jsx
import { Text } from '../Text/'
import { Link } from '../Link/'
import { Image } from '../Image/';

<Banner width={700} bg='gray4' onClose={() => {}}>
  <Stack column spacing='s' fontSize='m'>
    <Text size={20} bold>Объявления у вас в кармане</Text>
    <Text>Управлять объявлениями проще с мобильным приложением Авито:</Text>
    <Text>Получайте мгновенные оповещения об изменении статуса объявлений.</Text>
    <Link href='#'>Ссылка</Link>
  </Stack>
</Banner>
```
:::


:::platform mobile
```jsx
import { Text } from '../Text/'
import { Link } from '../Link/'
import { Button } from '../Button/'
import { Image } from '../Image/';

<Banner width={700} bg='blue50' image={<Image valignSelf='bottom' src='/banner-mav-img.png' mr='s'/>} width={350} onClose={() => {}} >
    <Text size={16} bold>Заголовок в 1 строку</Text>
    <Text size={16} mt={2}>Описане может быть в 2+ строки текста</Text>
    <Button mt={12}>Button</Button>
</Banner>
```
:::

```jsx
import { Text } from '../Text/'
import { Button } from '../Button/'
import { Image } from '../Image/';

<Banner width={700} bg='gray4' image={<Image height={240} src='/girl_geo_900x900.png'/>} onClose={() => {}}>
  <Stack column spacing='s' fontSize='m'>
    <Text size={20} bold>Объявления у вас в кармане</Text>
    <Text>Управлять объявлениями проще с мобильным приложением Авито:</Text>
    <Text mb={20}>Получайте мгновенные оповещения об изменении статуса объявлений.</Text>
    <Button alignSelf='left' size='m'>
      Button
    </Button>
  </Stack> 
</Banner>
```

:::platform web
```jsx
import { Text } from '../Text/'
import { Button } from '../Button/'
import { Image } from '../Image/';

<Banner width={230} bg='gray4' image={<Image height={240} src='/girl_geo_900x900.png'/>} column onClose={() => {}}>
  <Text size={16} bold mb='s'>Моментальные уведомления о новых сообщениях</Text>
  <Button alignSelf='left'>
    Button
  </Button>
  <Stack valign='middle' mt='xs' spacing='xs'>
    <Button>Button</Button>
    <Text color='gray28'>16+</Text>
  </Stack>
</Banner>
```
:::
