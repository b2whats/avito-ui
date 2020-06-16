import { ComponentTheme, Slot } from '../../styled-system/';
import { IconProps } from '../Icon/contract';
import { TooltipProps } from './contract';
export declare type TooltipTheme = ComponentTheme<TooltipProps, {
    Tooltip: Slot;
    Close: Slot<IconProps>;
    Arrow: Slot<never, {
        offset: number;
    }>;
}>;
export declare const tooltipTheme: TooltipTheme;
