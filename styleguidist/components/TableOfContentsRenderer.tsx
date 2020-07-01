import { useStore } from 'effector-react'
import React from 'react'
import TableOfContentsRenderer from 'react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContentsRenderer'
import { Group, Button, Text } from '@avito/mobile-components'
import { StyleguideStore, setTheme } from '../store'
import { themes } from '../themes'

const ThemeControl = () => {
  const { name } = useStore(StyleguideStore)

  return (
    <Group p={16} pb={0} width={1}>
      { themes.map((theme) => (
        <Button
          grow
          key={theme.name}
          onClick={() => setTheme(theme)}
          preset={name === theme.name ? 'primary' : 'newDefault'}
        ><Text size='xs'>{theme.title}</Text></Button>
      )) }
    </Group>
  )
}

export default function ThemableToC(props: any) {
  return (
    <>
      <ThemeControl />
      <TableOfContentsRenderer {...props} />
    </>
  )
}
