import { Formatter } from './Formatter'

export function makeFormatter<Settings>(factory: (settings: Partial<Settings>) => Formatter, defSettings: Settings) {
  return {
    parse: (value: string) => value,
    ...factory(defSettings),
    setup: (settings: Partial<Settings>) => makeFormatter(factory, { ...defSettings, ...settings }),
    settings: defSettings,
    settingKeys: Object.keys(defSettings),
  }
}
