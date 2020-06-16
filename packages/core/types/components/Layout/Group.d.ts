import React from 'react';
import { GroupProps } from './contract';
declare type GroupContext = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
    checked?: (string | number | undefined | null)[];
    block?: boolean;
    spacing?: boolean;
    disabled?: boolean;
    mode?: 'radio' | 'checkbox';
    elements: React.MutableRefObject<any[]>;
    orientation: 'horizontal' | 'vertical';
};
declare type GroupTargetHook = {
    grow?: boolean;
    role?: 'radio' | 'checkbox';
    tabIndex?: number;
    disabled?: boolean;
    'data-group'?: string;
    checked?: boolean;
    onClick?: (event: any) => void;
    onKeyDown?: (event: any) => void;
    [key: string]: any;
};
export declare const GroupContext: React.Context<GroupContext | null>;
export declare function useGroupHook<T extends GroupTargetHook>(ref: React.MutableRefObject<HTMLElement | null>, targetProps: T): T & GroupTargetHook;
export declare const Group: ({ children, block, mode, value, name, disabled, onChange, ...props }: GroupProps) => JSX.Element;
export {};
