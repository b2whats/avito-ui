interface Bounds {
    left: number;
    height: number;
    top: number;
    width: number;
    bottom: number;
    x: number;
    y: number;
    right: number;
}
export declare const useMeasure: () => [Bounds | null, (node: any) => void];
export {};
