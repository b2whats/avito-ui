## Использование

```jsx
import { Box } from '../Layout/'
const src = '/Logo-Avito.png';

<Box width={300}>
  <Image src={src} alt='Avito logo'/>
</Box> 
```

## Размер
Размер изображения можно установить с помощью `width` и `height`

```jsx
import { Stack } from '../Layout/'
const src = '/Logo-Avito.png';


<Stack spacing='xl'>
  <Image width={100} src={src} />
  <Image width={300} src={src} />
</Stack>
```

```jsx
const src = '/Logo-Avito.png';


<Image height={100} src={src} />
```

## Скругленное изображение

```jsx
<Image src='/dan.jpg' shape='circle'/>
```

## Fallback
Вы можете предоставить запасное изображение для случая, когда при загрузке изображения произошла ошибка  

```jsx
<Image src='none' fallbackSrc='/dog.jpg' />
```

## Ленивая загрузка
Изображение может быть загружено когда оно попадет в viewport браузера  
Вы так же можете передать дополнительные параметры для загрузки

```typescript static
type Options = {
  threshold?: number | number[]
  root?: HTMLElement
  rootMargin?: string
  once?: boolean
}
```

Описания параметров вы можете посмотреть по [ссылке](https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)

```jsx
<Image width={200} src='/gradient.png' lazy />
```

## Правила заполнения
Параметр `objectFit` определяет, как содержимое изображения, должно заполнять контейнер относительно его высоты и ширины  

`objectFit`: `none`  
Изображение не изменяет свой размер с целью заполнить пространство блока: конечный размер контента будет определен с использованием алгоритма изменения размера по умолчанию, а также размер объекта по умолчанию равен ширине и высоте смещаемого контента.

```jsx
const src = '/Logo-Avito.png';


<Image src={src} objectFit='none' />
```

`objectFit`: `fill`  
Изображение меняет свой размер таким образом, чтобы заполнить всю область внутри блока: используется вся ширина и высота блока.

```jsx
const src = '/Logo-Avito.png';


<Image width={200} height={200} src={src} objectFit='fill' />
```

`objectFit`: `contain`  
Изображение меняет свой размер таким образом, чтобы подстроится под область внутри блока пропорционально собственным параметрам: окончательный размер контента будет ограничиваться его шириной и высотой.

```jsx
const src = '/Logo-Avito.png';


<Image bg='gray4' height={200} width={400} src={src} objectFit='contain' />
```

`objectFit`: `cover`  
Изображение меняет свой размер таким образом, чтобы сохранять свои пропорции при заполнении блока: окончательный размер контента будет определен по заданному размеру контейнера, все что не поместилось будет обрезано.

```jsx
const src = '/Logo-Avito.png';


<Image height={200} width={400} src={src} objectFit='cover' />
```


`objectFit`: `scale-down`  
Изображение изменяет размер, сравнивая разницу между `none` и `contain`, для того, чтобы найти наименьший конкретный размер объекта.

```jsx
const src = '/Logo-Avito.png';


<Image bg='gray4' height={200} width={200} src={src} objectFit='scale-down' />
```