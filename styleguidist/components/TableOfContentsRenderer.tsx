import React from 'react'
import TableOfContentsRenderer from 'react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContentsRenderer'
import { Icon, Stack, Box } from '@avito/mobile-components'
import { store } from '../store'
import { observer } from 'mobx-react-lite'


const ThemeControl = observer(() => {
  const { theme } = store
  return (
    <Stack spacing='s' m={16} mb={0}>
      <Box width={.5}>
        <Icon name='mobile' color={ theme === 'mobile' ? 'orange200' : 'black' } onClick={() => store.setTheme('mobile')}/>
      </Box>
      <Box width={.5}>
        <Icon name='web' color={ theme === 'web' ? 'orange200' : 'black' } onClick={() => store.setTheme('web')}/>
      </Box>
    </Stack>
  )
})

export default (props: any) => (
  <>
    <ThemeControl />
    <TableOfContentsRenderer { ...props } />
  </>
)
