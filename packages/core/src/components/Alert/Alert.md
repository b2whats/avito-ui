## Использование
Расширение компонента [Card](/#/Компоненты/Card)

```jsx
import { Text } from '../Text/'
import { Link } from '../Link/'
import { Button } from '../Button/'
import { InfoIcon, TimeIcon, StatusSuccessIcon } from '../Icon/icons/'
import { Image } from '../Image/'
const platform = useStore(StyleguideStore)
const isMobile = platform.name === 'mobile'
const [props, setProps] = useState({ variant: undefined, image: <InfoIcon /> })
const [image, setImage] = useState(true);

<Stack column spacing='s'>
  <Stack spacing='s'>
    <Button onClick={() => setProps({ variant: undefined, image: <InfoIcon /> })}>Default</Button>
    <Button onClick={() => setProps({ variant: 'primary', image: <InfoIcon /> }) }>Primary</Button>
    <Button onClick={() => setProps({ variant: 'secondary', image: <InfoIcon /> }) }>Secondary</Button>
    <Button onClick={() => setProps({ variant: 'success', image: <StatusSuccessIcon /> }) }>Success</Button>
    <Button onClick={() => setProps({ variant: 'warning', image: <InfoIcon /> }) }>Warning</Button>
    <Button onClick={() => setProps({ variant: 'error', image: <TimeIcon /> }) }>Error</Button>
    <Button ml='xl' onClick={() => setImage(!image) }>{image ? 'without image' : 'with image'}</Button>
  </Stack>
  <Alert {...props} image={image ? props.image : undefined} onClose={() => {}}>
      <Text size={isMobile ? 16 : 20} bold>Тариф ожидает оплаты</Text>
      <Stack spacing='m' mt={isMobile ? 12 : 16} mb={4} valign='middle'>
        <Button size='m' preset={isMobile ? 'outline' : 'default'}>Оплатить 17 799 ₽</Button>
        <Link href='#'>Ссылка</Link>  
      </Stack>
  </Alert>
</Stack>
```
