import { Slot, ComponentTheme } from '../../styled-system/';
import { IconProps } from '../Icon/contract';
import { TextProps } from '../Text/contract';
import { RadioProps } from './contract';
export declare type RadioTheme = ComponentTheme<RadioProps, {
    Toggle?: Slot;
    Switch?: Slot;
    Icon?: Slot<IconProps>;
    Label?: Slot<TextProps>;
}>;
export declare const radioTheme: RadioTheme;
