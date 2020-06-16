import { ComponentTheme, Slot } from '../../styled-system/';
import { IconProps } from '../Icon/contract';
import { TextProps } from '../Text/contract';
import { ToggleProps } from './contract';
export declare type ToggleTheme<Props = ToggleProps> = ComponentTheme<Props, {
    Toggle: Slot;
    Switch: Slot;
    Icon: Slot<IconProps>;
    Label: Slot<TextProps>;
}>;
export declare const toggleTheme: ToggleTheme;
