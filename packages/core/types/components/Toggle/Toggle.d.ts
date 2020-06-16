import React from 'react';
import { ToggleProps } from './contract';
export declare const Toggle: <T extends object>(props: ToggleProps & {
    override?: import("../../utils").DeepPartial<{
        defaultProps?: Partial<ToggleProps> | undefined;
        mapProps?: ((props: ToggleProps) => Partial<ToggleProps>) | undefined;
        scheme: {
            Toggle: import("../../styled-system").SchemeType<ToggleProps, never, {}>;
            Switch: import("../../styled-system").SchemeType<ToggleProps, never, {}>;
            Icon: import("../../styled-system").SchemeType<ToggleProps, import("../Icon").IconProps, {}>;
            Label: import("../../styled-system").SchemeType<ToggleProps, import("../Text").TextProps, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
} & T) => JSX.Element;
