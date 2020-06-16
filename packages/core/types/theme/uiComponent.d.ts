/// <reference types="@emotion/core" />
import { MutableRefObject } from 'react';
import { Tokens } from '@avito/tokens';
import { DeepPartial } from '../utils';
import { Theme } from './contract';
declare type RefContainer<Element> = [MutableRefObject<Element | null>, (e: Element) => void];
export declare function uiComponent<ThemeType extends object>(name: keyof Theme, theme: ThemeType): <Props, RefType = HTMLElement>(render: (props: Props, theme: {
    theme: ThemeType;
    tokens: Tokens;
}, ref: RefContainer<RefType>) => JSX.Element | null) => <T extends object>(props: Props & {
    override?: DeepPartial<ThemeType> | undefined;
    ref?: ((instance: RefType | null) => void) | import("react").RefObject<RefType> | null | undefined;
} & T) => JSX.Element;
export {};
