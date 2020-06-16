import React from 'react';
import { TextProps } from './contract';
export declare const Text: <T extends object>(props: TextProps & {
    override?: import("../../utils").DeepPartial<{
        defaultProps?: Partial<TextProps> | undefined;
        mapProps?: ((props: TextProps) => Partial<TextProps>) | undefined;
        scheme: {
            Text: import("../../styled-system").SchemeType<TextProps, never, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
