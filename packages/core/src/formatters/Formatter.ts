import type { useRifm } from 'rifm'

type RifmArgs = typeof useRifm extends (options: infer Options) => any ? Options : never
export type Formatter = Omit<RifmArgs, 'value' | 'onChange'> & {
  parse(value: string): string
}

export function makeFormatter<Settings>(factory: (settings: Partial<Settings>) => Formatter, defSettings: Settings) {
  const factoryWithDefaults = (settings: Partial<Settings> = {}) => factory({ ...defSettings, ...settings })
  return {
    parse: (value: string) => value,
    ...factoryWithDefaults(),
    setup: (settings: Partial<Settings>) => makeFormatter(factory, { ...defSettings, ...settings }),
  }
}
