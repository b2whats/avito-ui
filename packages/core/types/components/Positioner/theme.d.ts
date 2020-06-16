import { TransitionFrom, TransitionTo } from 'react-spring';
import { PositionerProps } from './contract';
export declare type TransitionProps<T = boolean> = {
    initial: TransitionFrom<T>;
    from: TransitionFrom<T>;
    enter: TransitionTo<T>;
    leave: TransitionTo<T>;
};
export declare type PositionerTheme = {
    defaultProps?: Partial<PositionerProps>;
    transitions: {
        fade: TransitionProps;
    };
};
export declare const positionerTheme: PositionerTheme;
