import React from 'react';
import { IconProps } from '../Icon/';
import { TextProps } from '../Text/';
import { ButtonProps } from './contract';
export declare const Button: <T extends object>(props: ButtonProps & {
    override?: import("../../utils").DeepPartial<{
        defaultProps?: Partial<ButtonProps> | undefined;
        mapProps?: ((props: ButtonProps) => Partial<ButtonProps>) | undefined;
        scheme: {
            Button: import("../../styled-system").SchemeType<ButtonProps, never, {
                pressedOffset: number;
            }>;
            IconBefore: import("../../styled-system").SchemeType<ButtonProps, IconProps, {}>;
            Text: import("../../styled-system").SchemeType<ButtonProps, TextProps, {}>;
            IconAfter: import("../../styled-system").SchemeType<ButtonProps, IconProps, {}>;
            Spinner: import("../../styled-system").SchemeType<ButtonProps, import("../Spinner").SpinnerProps, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLLinkElement | HTMLButtonElement | null) => void) | React.RefObject<HTMLLinkElement | HTMLButtonElement> | null | undefined;
} & T) => JSX.Element;
