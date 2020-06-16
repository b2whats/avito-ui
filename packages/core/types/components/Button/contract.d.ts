import React from 'react';
import { MarginProperties, DimensionProperties, AlignProperties } from '../../styled-system/';
declare type Element = HTMLButtonElement | HTMLLinkElement;
export declare enum ButtonPreset {
    primary = 0,
    default = 1
}
export interface ButtonProps extends MarginProperties, DimensionProperties, AlignProperties {
    children?: React.ReactNode;
    /** Размер кнопки */
    size?: 's' | 'm' | 'l';
    /** Имя кнопки */
    name?: string;
    /** Значение кнопки */
    value?: string | number;
    /** Внешний вид кнопки */
    kind?: 'fill' | 'outline' | 'flat';
    /** Нажатое состояние кнопки */
    checked?: boolean;
    /** Неактивная кнопка */
    disabled?: boolean;
    /** Цветовые варианты кнопки */
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Действие которое совершает кнопка */
    type?: 'button' | 'submit' | 'reset';
    /** Кнопка со спиннером */
    loading?: boolean;
    /** Квадратная круглая и вытянутая форма с закругленными углами */
    shape?: 'pill' | 'square' | 'circle';
    /** Иконка слева */
    iconBefore?: React.ReactNode;
    /** Иконка справа */
    iconAfter?: React.ReactNode;
    /** Вторая строка */
    multiline?: boolean;
    /** Кнопка занимает всю ширину */
    block?: boolean;
    /** Id елемента */
    id?: string;
    /** Ссылка для перехода */
    href?: string;
    /** Пресеты */
    preset?: keyof typeof ButtonPreset;
    onClick?(event: React.MouseEvent<Element>): void;
    onKeyDown?(event: React.KeyboardEvent<Element>): void;
    onFocus?(event: React.FocusEvent<Element>): void;
    onBlur?(event: React.FocusEvent<Element>): void;
}
export {};
