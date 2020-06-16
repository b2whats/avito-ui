import React from 'react';
import { TooltipProps } from './contract';
export declare const Tooltip: <T extends object>(props: TooltipProps & {
    override?: import("../../utils").DeepPartial<{
        defaultProps?: Partial<TooltipProps> | undefined;
        mapProps?: ((props: TooltipProps) => Partial<TooltipProps>) | undefined;
        scheme: {
            Tooltip: import("../../styled-system").SchemeType<TooltipProps, never, {}>;
            Close: import("../../styled-system").SchemeType<TooltipProps, import("../Icon").IconProps, {}>;
            Arrow: import("../../styled-system").SchemeType<TooltipProps, never, {
                offset: number;
            }>;
        };
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
