import { Slot, ComponentTheme } from '../../styled-system/';
import { IconProps } from '../Icon/';
import { SpinnerProps } from './contract';
export declare type SpinnerTheme = ComponentTheme<SpinnerProps, {
    Spinner: Slot<IconProps>;
}>;
export declare const spinnerTheme: SpinnerTheme;
