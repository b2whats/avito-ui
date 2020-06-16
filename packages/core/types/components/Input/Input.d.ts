import React from 'react';
import { IconProps } from '../Icon/';
import { TextProps } from '../Text/';
import { InputProps } from './contract';
export declare const Input: <T extends object>(props: InputProps & {
    override?: import("../../utils").DeepPartial<import("../../styled-system").ComponentTheme<InputProps, {
        IconBefore: import("../../styled-system").Slot<IconProps, {}>;
        InputField: import("../../styled-system").Slot<never, {}>;
        Prefix: import("../../styled-system").Slot<TextProps, {}>;
        Input: import("../../styled-system").Slot<never, {}>;
        Postfix: import("../../styled-system").Slot<TextProps, {}>;
        IconAfter: import("../../styled-system").Slot<IconProps, {}>;
    }, {
        deletePlaceholderOnFocus: boolean;
    }>> | undefined;
    ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
} & T) => JSX.Element;
