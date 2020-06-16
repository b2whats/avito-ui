import { InputProps } from '@avito/core'

export interface SelectProps<Option = any> extends Omit<InputProps, 'clearable' | 'iconAfter' | 'renderCore'> {
  options?: Option[];
  getText?: (option: Option) => string;
  getValue?: (option: Option) => string;
  placeholderOption?: string;
  clearable?: boolean;
}
