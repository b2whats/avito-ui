export type ButtonTheme = {
  backgroundColor: string,
  fontSize: string,
}

type Palette = {
  red: {
    50: string
  }
}

export const buttonTheme = ({ palette }: { palette: Palette }): ButtonTheme => ({
  fontSize: '16px',
  backgroundColor: palette.red[50],
})