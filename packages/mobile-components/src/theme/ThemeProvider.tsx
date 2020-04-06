import React from 'react'
import { ThemeProvider } from '@avito/core/theme/ThemeProvider'
import { mobile } from '@avito/tokens'
import { MobileTheme } from './contract'

type ProviderProps = { children: React.ReactNode, theme?: Partial<MobileTheme> }
const Provider = (props: ProviderProps) => <ThemeProvider defaultTheme={mobile} {...props} />

export default Provider