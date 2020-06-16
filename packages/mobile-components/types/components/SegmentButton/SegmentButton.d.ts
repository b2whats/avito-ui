import React from 'react';
import { SegmentButtonProps } from './contract';
export declare const SegmentButton: <T extends object>(props: SegmentButtonProps & {
    override?: import("@avito/core").DeepPartial<{
        defaultProps?: Partial<SegmentButtonProps> | undefined;
        mapProps?: ((props: SegmentButtonProps) => Partial<SegmentButtonProps>) | undefined;
        scheme: {
            Group: import("@avito/core").SchemeType<SegmentButtonProps, never, {}>;
            Button: import("@avito/core").SchemeType<SegmentButtonProps, never, {}>;
            Slide: import("@avito/core").SchemeType<SegmentButtonProps, never, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
