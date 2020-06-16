import type { useRifm } from 'rifm';
declare type RifmArgs = typeof useRifm extends (options: infer Options) => any ? Options : never;
export declare type Formatter = Omit<RifmArgs, 'value' | 'onChange'> & {
    parse(value: string): string;
};
export {};
