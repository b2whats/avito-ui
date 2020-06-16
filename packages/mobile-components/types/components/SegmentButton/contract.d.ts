import { MarginProperties } from '@avito/core';
declare type onChangeProps = {
    name?: string;
    value?: number | string;
};
declare type Options = {
    value: string | number;
    text: string;
    disabled: boolean;
};
export interface SegmentButtonProps extends MarginProperties {
    options?: Options[];
    /** Размер кнопки */
    size?: 's' | 'm' | 'l';
    /** Имя */
    name?: string;
    /** Неактивный контрол */
    disabled?: boolean;
    /** Выбранные элементы */
    value?: number | string;
    /** Событие изменения значения */
    onChange?: (props: onChangeProps) => void;
}
export {};
