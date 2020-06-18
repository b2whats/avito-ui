import React, { useState } from 'react'
import BasePropsRenderer from 'react-styleguidist/lib/client/rsg-components/Props/PropsRenderer'
import { styled } from '@avito/core'
import { Button, Stack, Box, ChevronNarrowIcon } from '@avito/web-components'

const prettyType = (prop: any) => {
  const parentType = prop.parent.name
  if (['MarginProperties', 'PaddingProperties'].includes(parentType)) {
    return 'Dimension'
  }
  if (parentType === 'ColorProperties') {
    return 'Color'
  }
  if (prop.type.name.includes('ReactElement')) {
    return 'ReactElement'
  }
  return prop.type.name
}
const ScrollBox = styled('div')`overflow-x: auto;`

export default function PropsRenderer(props: { props: any[] }) {
  const [showStyleProps, toggleStyleProps] = useState(false)
  const isOwnProp = (prop: any) => /\/components\/.*\/contract.ts/.test(prop.parent.fileName)

  const prettyProps = props.props.map(prop => {
    const name = prettyType(prop)
    return name ? { ...prop, type: { ...prop.type, name } } : prop
  })
  const ownProps = prettyProps.filter(isOwnProp)
  const styleProps = prettyProps.filter(prop => prop.parent.fileName.includes('styled-system'))
    .sort((prop1, prop2) => prop1.parent.name.localeCompare(prop2.parent.name) || prop1.name.localeCompare(prop2.name))
  const hasStyleProps = styleProps.length > 0

  return (
    <Stack column>
      <ScrollBox>
        <BasePropsRenderer {...props} props={ownProps.concat(showStyleProps ? styleProps : [])} />
      </ScrollBox>
      <Box align='center' pb='s'>
        <Button
          shape='pill'
          disabled={!hasStyleProps}
          onClick={() => toggleStyleProps(!showStyleProps)}
          iconBefore={hasStyleProps ? <ChevronNarrowIcon rotate={showStyleProps ? 0 : 180} /> : null}
        >
          { hasStyleProps ? 'Cтилевые пропы' : 'Не поддерживает стилевые пропы' }
        </Button>
      </Box>
    </Stack>
  )
}
