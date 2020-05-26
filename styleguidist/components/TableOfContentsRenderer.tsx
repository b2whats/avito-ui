import React from 'react'
import TableOfContentsRenderer from 'react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContentsRenderer'
import { Group, Button, Text } from '@avito/mobile-components'
import { store } from '../store'
import { observer } from 'mobx-react-lite'
import { themes } from '../themes'


const ThemeControl = observer(() => {
  return (
    <Group p={16} pb={0} width={1}>
      { themes.map((theme) => (
        <Button
          width={1/themes.length}
          key={theme.name}
          onClick={() => store.setTheme(theme) }
          preset={ store.theme.name === theme.name ? 'primary' : 'newDefault' }
        ><Text size='xs'>{theme.title}</Text></Button>
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
