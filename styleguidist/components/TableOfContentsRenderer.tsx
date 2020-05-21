import React from 'react'
import TableOfContentsRenderer from 'react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContentsRenderer'
import { Group, Button } from '@avito/mobile-components'
import { store } from '../store'
import { observer } from 'mobx-react-lite'
import { themes } from '../themes'


const ThemeControl = observer(() => {
  return (
    <Group m={16} mb={0}>
      { themes.map((theme) => (
        <Button
          width={1/themes.length}
          key={theme.name}
          onClick={() => store.setTheme(theme) }
          color={ store.theme.name === theme.name ? 'orange200' : 'black' }
        >
          <theme.Icon />
        </Button>
      )) }
    </Group>
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
