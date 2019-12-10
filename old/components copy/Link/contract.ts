import React from 'react'
import { Tokens } from '../../../packages/components/src/theme'

export interface LinkProps {
  /** Цветовые варианты ссылок */
  variant: keyof Tokens['variants'],
  /** Идентификатор ссылки */
  id?: string,
  /** Информация о ссылке */
  title?: string,
  /** Текстовое содержание */
  children?: React.ReactNode,
  /** Наследование стиля от родителя */
  inherit?: boolean,
  /** Подчеркнутая ссылка */
  underline?: boolean | 'dashed' | 'dotted',
  /** Ссылка на переход */
  href?: string,
  /** Не отмечать ссылки при переходе */
  noVisited?: boolean,
  /** 
   * noopener - предотвращает доступ новой страницы к свойству window.opener и обеспечивает ее запуск в отдельном процессе.
   *            Без этого целевая страница может потенциально перенаправить вашу страницу на вредоносный URL.
   * noreferrer - имеет тот же эффект, но также предотвращает отправку заголовка Referer на новую страницу.
   *              Удаление заголовка реферера повлияет на аналитику.
   * */
  rel?: 'noopener' | 'noreferrer',
  /** Ссылка открывается в новом окне Использование этого атрибута осуждается спецификацией HTML, валидный код получается только при использовании переходного */
  target?: '_blank' | '_parent',
  /** Инлайновое поведение */
  inline?: boolean,
  /** Блочное поведение */
  block?: boolean,
}