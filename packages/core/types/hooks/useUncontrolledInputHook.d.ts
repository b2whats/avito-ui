import { ChangeHandler } from '../utils';
declare type Props<Value, Element> = {
    value?: Value | null;
    onChange?: ChangeHandler<Value | null, Element>;
};
export declare const useUncontrolledInputHook: <Value, Element_1>(props: Props<Value, Element_1>) => readonly [Value | null | undefined, ChangeHandler<Value | null, Element_1>];
export {};
