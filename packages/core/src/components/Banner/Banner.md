## Использование
Расширение компонента [Card](/#/Компоненты/Card)

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

```jsx
import { Text } from '../Text/'
import { Button } from '../Button/'
import { AppleIcon } from '../Icon/icons/'
import { Image } from '../Image/';

<Banner width={700} bg='gray4' image={<Image height={240} src='/girl_geo_900x900.png'/>} onClose={() => {}}>
  <Stack column spacing='s' fontSize='m'>
    <Text size={20} bold>Объявления у вас в кармане</Text>
    <Text>Управлять объявлениями проще с мобильным приложением Авито:</Text>
    <Text>Получайте мгновенные оповещения об изменении статуса объявлений.</Text>
    <Stack spacing='s' valign='middle'>
      <Button preset='pay' iconBefore={AppleIcon}>
        <Text size={9} align='left' block>Загрузите в</Text>
        App store
      </Button>
      <Button preset='pay'>
        <Text size={9} align='left' block>Загрузите на</Text>
        Google play
      </Button>
      <Text color='gray28'>16+</Text>
    </Stack>
  </Stack> 
</Banner>
```

```jsx
import { Text } from '../Text/'
import { AppleIcon } from '../Icon/icons/'
import { Button } from '../Button/'
import { Image } from '../Image/';

<Banner width={230} bg='gray4' image={<Image height={240} src='/girl_geo_900x900.png'/>} column onClose={() => {}}>
  <Text size={16} bold mb='s'>Моментальные уведомления о новых сообщениях</Text>
  <Button preset='pay' iconBefore={AppleIcon} alignSelf='left'>
    <Text size={9} align='left' block>Загрузите в</Text>
    App store
  </Button>
  <Stack valign='middle' align='justify' mt='xs'>
    <Button preset='pay'>Button</Button>
    <Text color='gray28'>16+</Text>
  </Stack>
</Banner>
```

