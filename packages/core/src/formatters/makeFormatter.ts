import { Formatter } from './Formatter'

interface FormatterFactory<Settings>{
  (settings: Partial<Settings>): Omit<Formatter, 'parse'> & { parse?: Formatter['parse'] }
}

export function makeFormatter<Settings>(factory: FormatterFactory<Settings>, defSettings: Settings) {
  return {
    parse: (value: string) => value,
    ...factory(defSettings),
    setup: (settings: Partial<Settings>) => makeFormatter(factory, { ...defSettings, ...settings }),
    settings: defSettings,
    settingKeys: Object.keys(defSettings),
  }
}
