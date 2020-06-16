import { Slot, ComponentTheme } from '../../styled-system/';
import { IconProps } from '../Icon/contract';
import { TextProps } from '../Text/contract';
import { SwitcherProps } from './contract';
export declare type SwitcherTheme = ComponentTheme<SwitcherProps, {
    Toggle?: Slot;
    Switch?: Slot;
    Icon?: Slot<IconProps>;
    Label?: Slot<TextProps>;
}, {
    positionLoading: boolean;
}>;
export declare const switcherTheme: SwitcherTheme;
