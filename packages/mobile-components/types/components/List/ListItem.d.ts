import React from 'react';
import { TextProps } from '@avito/core';
import { ListItemProps } from './contract';
export declare const ListItem: <T extends object>(props: ListItemProps & {
    override?: import("@avito/core").DeepPartial<import("@avito/core").ComponentTheme<ListItemProps, {
        ListItem: import("@avito/core").Slot<import("@avito/core").StackProps, {}>;
        Before: import("@avito/core").Slot<import("@avito/core").BoxProps, {}>;
        StackText: import("@avito/core").Slot<import("@avito/core").StackProps, {}>;
        Label: import("@avito/core").Slot<TextProps, {}>;
        Link: import("@avito/core").Slot<TextProps, {}>;
        Caption: import("@avito/core").Slot<TextProps, {}>;
        After: import("@avito/core").Slot<import("@avito/core").BoxProps, {}>;
    }, {
        beforeTreshold: number;
        afterTreshold: number;
    }>> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
