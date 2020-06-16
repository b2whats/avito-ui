import { Slot, ComponentTheme, TextProps, StackProps, BoxProps } from '@avito/core';
import { ListItemProps } from './contract';
export declare type ListItemTheme = ComponentTheme<ListItemProps, {
    ListItem: Slot<StackProps>;
    Before: Slot<BoxProps>;
    StackText: Slot<StackProps>;
    Label: Slot<TextProps>;
    Link: Slot<TextProps>;
    Caption: Slot<TextProps>;
    After: Slot<BoxProps>;
}, {
    beforeTreshold: number;
    afterTreshold: number;
}>;
export declare const listItemTheme: ListItemTheme;
