import type { useRifm } from 'rifm'

type RifmArgs = typeof useRifm extends (options: infer Options) => any ? Options : never
export type Formatter = Omit<RifmArgs, 'value' | 'onChange'> & {
  parse(value: string): string
}
