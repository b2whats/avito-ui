/// <reference types="@emotion/core" />
import { Ref } from 'react';
export declare function useRefHook<T>(...refs: Ref<T>[]): [import("react").MutableRefObject<T | null>, (node: any) => void];
