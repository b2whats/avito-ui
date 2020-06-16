import React from 'react';
import { SpinnerProps } from './contract';
export declare const Spinner: <T extends object>(props: SpinnerProps & {
    override?: import("../..").DeepPartial<{
        defaultProps?: Partial<SpinnerProps> | undefined;
        mapProps?: ((props: SpinnerProps) => Partial<SpinnerProps>) | undefined;
        scheme: {
            Spinner: import("../../styled-system").SchemeType<SpinnerProps, import("../Icon").IconProps, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
