import { DeepPartial } from '../utils/types';
export declare const mergeTheme: <T extends object>(defaultTheme: T, globalOverride?: DeepPartial<T>, localOverride?: DeepPartial<T>) => T & {
    mapProps: T extends {
        mapProps?: ((p: infer Props) => any) | undefined;
    } ? (p: Props) => Props : never;
};
