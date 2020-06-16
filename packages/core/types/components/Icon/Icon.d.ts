import React from 'react';
import { BaseIconProps } from './contract';
export declare const Icon: <T extends object>(props: BaseIconProps & {
    override?: import("../../utils").DeepPartial<{
        defaultProps?: Partial<BaseIconProps> | undefined;
        mapProps?: ((props: BaseIconProps) => Partial<BaseIconProps>) | undefined;
        scheme: {
            Icon: import("../../styled-system").SchemeType<BaseIconProps, never, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
