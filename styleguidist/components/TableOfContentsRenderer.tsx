import React from 'react'
import '@avito/icons/register/mobile'
import '@avito/icons/register/web'
import TableOfContentsRenderer from 'react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContentsRenderer'
import { Icon, Stack, Box } from '@avito/mobile-components'
import { store } from '../store'
import { observer } from 'mobx-react-lite'
import { themes } from '../themes'


const ThemeControl = observer(() => {
  const platformThemes = Object.entries(themes)
  return (
    <Stack spacing='s' m={16} mb={0}>
      { platformThemes.map(([platform, spec]) => (
        <Box width={1/platformThemes.length} key={platform}>
          <Stack spacing='m' column>
            { Object.entries(spec.themes).map(([theme, { icon }]) => (
              <Icon
                key={ icon }
                name={ icon }
                color={ store.themeName === theme && store.platform === platform ? 'orange200' : 'black' }
                onClick={() => store.setTheme(platform as any, theme) }/>)) }
          </Stack>
        </Box>
      )) }
    </Stack>
  )
})

export default function ThemableToC(props: any) {
  return (
    <>
      <ThemeControl />
      <TableOfContentsRenderer { ...props } />
    </>
  )
}
