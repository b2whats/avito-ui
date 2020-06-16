import React from 'react';
import { IconProps } from '../Icon';
import { AvatarProps } from './contract';
export declare const Avatar: <T extends object>(props: AvatarProps & {
    override?: import("../../utils").DeepPartial<{
        defaultProps?: Partial<AvatarProps> | undefined;
        mapProps?: ((props: AvatarProps) => Partial<AvatarProps>) | undefined;
        scheme: {
            Wrapper: import("../../styled-system").SchemeType<AvatarProps, never, {}>;
            Badge: import("../../styled-system").SchemeType<AvatarProps, import("../Layout").BoxProps, {}>;
            Fallback: import("../../styled-system").SchemeType<AvatarProps, IconProps, {}>;
        };
    }> | undefined;
    ref?: ((instance: HTMLImageElement | null) => void) | React.RefObject<HTMLImageElement> | null | undefined;
} & T) => JSX.Element;
