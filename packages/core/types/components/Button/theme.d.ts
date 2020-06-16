import { ComponentTheme, Slot } from '../../styled-system/';
import { IconProps } from '../Icon/contract';
import { SpinnerProps } from '../Spinner/contract';
import { TextProps } from '../Text/contract';
import { ButtonProps } from './contract';
export declare type ButtonTheme = ComponentTheme<ButtonProps, {
    Button: Slot<never, {
        pressedOffset: number;
    }>;
    IconBefore: Slot<IconProps>;
    Text: Slot<TextProps>;
    IconAfter: Slot<IconProps>;
    Spinner: Slot<SpinnerProps>;
}>;
export declare const buttonTheme: ButtonTheme;
