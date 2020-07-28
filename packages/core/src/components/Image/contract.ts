import { ReactEventHandler } from 'react'
import { Options } from '../../hooks/useVisibility'
import { StyleProperties } from '../../styled-system/'


type ImageHandler = ReactEventHandler<HTMLImageElement>

export interface ImageProps extends StyleProperties {
  /* Ссылка на ресурс */
  src?: string
  /* Источники изображения */
  srcset?: string | string[]
  /* Медиа выражения для изображений */
  sizes?: string
  /* Отложенная загрузка */
  lazy?: boolean | Options
  /* Запасное изображение для случая, когда при загрузке изображения произошла ошибка */
  fallbackSrc?: string
  /* Как содержимое должно заполнять контейнер относительно его высоты и ширины */
  objectFit?: 'none' | 'fill' | 'contain' | 'cover' | 'scale-down'
  /* Альтернативный текст, который описывает изображение */
  alt?: string
  /* Обратный вызов, когда изображение было загружено */
  onLoad?: ImageHandler
  /* Обратный вызов, когда произошла ошибка при загрузке изображения */
  onError?: ImageHandler
}

