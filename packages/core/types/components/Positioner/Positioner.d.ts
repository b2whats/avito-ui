import React from 'react';
import { PositionerProps } from './contract';
export declare const Positioner: <T extends object>(props: PositionerProps & {
    override?: import("../../utils").DeepPartial<import("./theme").PositionerTheme> | undefined;
    ref?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & T) => JSX.Element;
