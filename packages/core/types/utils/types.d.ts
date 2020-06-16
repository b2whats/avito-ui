declare type IsFunction<T> = T extends Function ? true : false;
export declare type DeepPartial<T> = {
    [K in keyof T]?: (IsFunction<T[K]>) extends false ? DeepPartial<T[K]> : T[K];
};
export interface ChangePayload<Value, Element> {
    name?: string;
    value?: Value;
    target: Element;
}
export declare type ChangeHandler<Data = string, Element = null> = (payload: ChangePayload<Data, Element>) => any;
export {};
