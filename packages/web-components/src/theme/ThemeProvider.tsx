import React from 'react'
import { ThemeProvider } from '@avito/core/theme/ThemeProvider'
import { web } from '@avito/tokens'
import { WebTheme } from './contract'

type ProviderProps = { children: React.ReactNode, theme?: Partial<WebTheme> }
const Provider = (props: ProviderProps) => <ThemeProvider defaultTheme={web} {...props} />

export default Provider