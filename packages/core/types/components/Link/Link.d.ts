import React from 'react';
import { LinkProps } from './contract';
export declare const Link: <T extends object>(props: LinkProps & {
    override?: import("../..").DeepPartial<{
        defaultProps?: Partial<LinkProps> | undefined;
        mapProps?: ((props: LinkProps) => Partial<LinkProps>) | undefined;
        scheme: {
            Link: import("../../styled-system").SchemeType<LinkProps, LinkProps, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
