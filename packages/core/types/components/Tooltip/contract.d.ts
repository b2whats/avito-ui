/// <reference types="react" />
import { SpaceProperties, DimensionProperties, ColorProperties, BorderProperties, LayoutProperties, TextProperties } from '../../styled-system/';
import { PositionerProps } from '../Positioner/';
declare type StyleProps = SpaceProperties & ColorProperties & Omit<DimensionProperties, 'minWidth' | 'width' | 'maxWidth'> & BorderProperties & LayoutProperties & TextProperties;
export declare enum TooltipPreset {
}
export interface TooltipProps extends Omit<PositionerProps, 'target' | 'targetWidth'>, StyleProps {
    /** Контент */
    content?: React.ReactNode;
    preset?: keyof typeof TooltipPreset;
    closable?: boolean;
}
export {};
