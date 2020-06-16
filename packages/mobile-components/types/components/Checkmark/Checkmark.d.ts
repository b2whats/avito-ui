import React from 'react';
import { CheckmarkProps } from './contract';
export declare const Checkmark: <T extends object>(props: CheckmarkProps & {
    override?: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<CheckmarkProps> | undefined;
        mapProps?: ((props: CheckmarkProps) => Partial<CheckmarkProps>) | undefined;
        scheme: {
            Icon: import("@avito/core").SchemeType<CheckmarkProps, import("@avito/core").IconProps, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
