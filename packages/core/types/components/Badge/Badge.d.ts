import React from 'react';
import { BadgeProps } from './contract';
export declare const Badge: <T extends object>(props: BadgeProps & {
    override?: import("../..").DeepPartial<{
        defaultProps?: Partial<BadgeProps> | undefined;
        mapProps?: ((props: BadgeProps) => Partial<BadgeProps>) | undefined;
        scheme: {};
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
