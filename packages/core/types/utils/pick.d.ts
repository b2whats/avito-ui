interface PickFn {
    <T, K extends (keyof T)[]>(obj: T, ...keys: K): {
        [K2 in Extract<keyof T, K[number]>]: T[K2];
    };
}
export declare const pick: PickFn;
export {};
