export interface ListItemProps {
  /** Контент до текста */
  before?: React.ReactNode;
  /** Контент после текста */
  after?: React.ReactNode;
  /** Кастомный контент */
  children?: React.ReactNode;
  /** Заголовок */
  label: React.ReactNode;
  /** Подпись */
  caption?: React.ReactNode;
  /** Ссылка */
  link?: React.ReactNode;
  /** Неактивное состояние */
  disabled?: boolean,
  /** Обработка клика */
  interactive?: boolean,

  onClick?: () => void,
}