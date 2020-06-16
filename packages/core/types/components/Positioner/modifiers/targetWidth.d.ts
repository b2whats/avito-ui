import { Modifier } from '@popperjs/core';
declare type Width = 'reference' | number;
declare type Options = {
    minWidth: Width;
    width: Width;
    maxWidth: Width;
};
export declare type TargetWidthModifier = Modifier<'targetWidth', Options>;
export declare const targetWidth: TargetWidthModifier;
export {};
