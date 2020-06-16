import React from 'react';
import { SelectProps } from './contract';
export declare const Select: <T extends object>(props: SelectProps<any> & {
    override?: import("@avito/core").DeepPartial<import("@avito/core").DeepPartial<import("@avito/core").ComponentTheme<SelectProps<any>, {
        IconBefore: import("@avito/core").Slot<import("@avito/core").IconProps, {}>;
        InputField: import("@avito/core").Slot<never, {}>;
        Prefix: import("@avito/core").Slot<import("@avito/core").TextProps, {}>;
        Input: import("@avito/core").Slot<never, {}>;
        Postfix: import("@avito/core").Slot<import("@avito/core").TextProps, {}>;
        IconAfter: import("@avito/core").Slot<import("@avito/core").IconProps, {}>;
    }, {
        deletePlaceholderOnFocus: boolean;
    }>>> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
