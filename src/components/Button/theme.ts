import { Tokens } from '../../theme/tokens/'

export type ButtonTheme = {
  backgroundColor: string,
  fontSize: string,
}

export const buttonTheme = ({ palette }: Tokens): ButtonTheme => ({
  fontSize: '16px',
  backgroundColor: palette.red[50],
})