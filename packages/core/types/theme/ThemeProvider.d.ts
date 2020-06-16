import React from 'react';
import { Tokens } from '@avito/tokens';
import { DeepPartial } from '../utils/';
import { Theme } from './contract';
declare type ProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Tokens;
    theme?: DeepPartial<Theme>;
};
export declare function ThemeProvider({ defaultTheme, theme, children }: ProviderProps): JSX.Element;
export {};
