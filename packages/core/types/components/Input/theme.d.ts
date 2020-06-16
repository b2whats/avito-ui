import { Slot, ComponentTheme } from '../../styled-system/';
import { IconProps } from '../Icon/contract';
import { TextProps } from '../Text/contract';
import { InputProps } from './contract';
export declare type InputTheme<Props = InputProps> = ComponentTheme<Props, {
    IconBefore: Slot<IconProps>;
    InputField: Slot;
    Prefix: Slot<TextProps>;
    Input: Slot;
    Postfix: Slot<TextProps>;
    IconAfter: Slot<IconProps>;
}, {
    deletePlaceholderOnFocus: boolean;
}>;
export declare const inputTheme: InputTheme;
