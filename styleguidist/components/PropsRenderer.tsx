import React, { useState } from 'react'
import BasePropsRenderer from 'react-styleguidist/lib/client/rsg-components/Props/PropsRenderer'
import { Button, Stack } from '@avito/web-components'

export default function PropsRenderer(props: { props: any[] }) {
  const [showStyleProps, toggleStyleProps] = useState(false)
  const isOwnProp = (prop: any) => prop.parent && prop.parent.fileName.includes('contract.ts')
  const ownProps = props.props.filter(isOwnProp)
  const styleProps = props.props.filter(prop => !isOwnProp(prop))

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
