import React from 'react';
import { TextareaProps } from './contract';
export declare const Textarea: <T extends object>(props: TextareaProps & {
    override?: import("../../utils").DeepPartial<import("../../styled-system").ComponentTheme<TextareaProps, {
        Textarea: import("../../styled-system").Slot<never, {}>;
        IconClear: import("../../styled-system").Slot<import("../Icon").IconProps, {}>;
    }, {
        deletePlaceholderOnFocus: boolean;
    }>> | undefined;
    ref?: ((instance: HTMLTextAreaElement | null) => void) | React.RefObject<HTMLTextAreaElement> | null | undefined;
} & T) => JSX.Element;
