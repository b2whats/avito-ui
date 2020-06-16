import { Slot, ComponentTheme } from '../../styled-system/';
import { IconProps } from '../Icon/contract';
import { TextareaProps } from './contract';
export declare type TextareaTheme = ComponentTheme<TextareaProps, {
    Textarea: Slot;
    IconClear: Slot<IconProps>;
}, {
    deletePlaceholderOnFocus: boolean;
}>;
export declare const textareaTheme: TextareaTheme;
