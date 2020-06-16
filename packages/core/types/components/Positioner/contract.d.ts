/// <reference types="react" />
import { Placement, StrictModifiers } from '@popperjs/core';
import { TransitionProps } from './theme';
declare type Modifiers = StrictModifiers extends object ? Required<StrictModifiers> : never;
declare type FindByName<Union, Name> = Union extends {
    name: Name;
    options: any;
} ? Union['options'] | false : never;
declare type TargetProps = {
    close: () => void;
};
declare type TargetWidth = 'reference' | number;
export interface PositionerProps {
    children: React.ReactElement;
    target?: React.ReactNode | ((props: TargetProps) => React.ReactNode);
    placement?: Placement;
    offset?: FindByName<Modifiers, 'offset'>;
    flip?: FindByName<Modifiers, 'flip'>;
    arrow?: FindByName<Modifiers, 'arrow'>;
    width?: TargetWidth;
    minWidth?: TargetWidth;
    maxWidth?: TargetWidth;
    preventOverflow?: FindByName<Modifiers, 'preventOverflow'>;
    hide?: FindByName<Modifiers, 'hide'>;
    strategy?: 'fixed' | 'absolute';
    usePortal?: boolean;
    trigger?: 'click' | 'hover';
    open?: boolean;
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnClick?: boolean;
    closeOnScroll?: boolean;
    delayIn?: number;
    delayOut?: number;
    animation?: 'fade' | TransitionProps;
    onOpen?: () => void;
    onClose?: () => void;
}
export {};
