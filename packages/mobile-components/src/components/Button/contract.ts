import '@avito/core'

declare module '@avito/core' {
  interface ButtonProps {
    sizex?: 's' | 'm' | 'l' | 'xl'
  }
  enum ButtonPreset {
    accent = 200,
    secondary,
    defaultOnSurface,
    defaultDark,
    outline,
    pay,
    appInstall,
    linkIncreased,
  }
}
