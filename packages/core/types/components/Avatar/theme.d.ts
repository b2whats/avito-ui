import { ComponentTheme, Slot } from '../../styled-system';
import { IconProps } from '../Icon/';
import { BoxProps } from '../Layout';
import { AvatarProps } from './contract';
export declare type AvatarTheme = ComponentTheme<AvatarProps, {
    Wrapper: Slot;
    Badge: Slot<BoxProps>;
    Fallback: Slot<IconProps>;
}>;
export declare const avatarTheme: AvatarTheme;
