import { ChangeEventHandler } from 'react';
import { Formatter } from '../formatters';
import { ChangeHandler } from '../utils';
export declare function useSyntheticChange<Value, Element extends (HTMLInputElement | HTMLTextAreaElement)>(value: Value | undefined, onChange: ChangeHandler<Value, Element>, options?: Formatter): [string, ChangeEventHandler<Element>];
