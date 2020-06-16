import { ComponentTheme, Slot } from '@avito/core';
import { SegmentButtonProps } from './contract';
export declare type SegmentButtonTheme = ComponentTheme<SegmentButtonProps, {
    Group: Slot;
    Button: Slot;
    Slide: Slot;
}>;
export declare const segmentButtonTheme: SegmentButtonTheme;
