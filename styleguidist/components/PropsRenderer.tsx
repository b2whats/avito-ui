import React, { useState } from 'react'
import BasePropsRenderer from 'react-styleguidist/lib/client/rsg-components/Props/PropsRenderer'
import { Button, Stack } from '@avito/web-components'

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

  return (
    <Stack column spacing='s'>
      <BasePropsRenderer {...props} props={ownProps.concat(showStyleProps ? styleProps : [])} />
      <Button onClick={() => toggleStyleProps(!showStyleProps)}>
        { showStyleProps
          ? 'Скрыть стилевые пропы'
          : 'Показать стилевые пропы' }
      </Button>
    </Stack>
  )
}
