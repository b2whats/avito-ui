/// <reference types="cypress" />
// import 'cypress-plugin-snapshots'
import React from 'react'
import { Button, theme } from '../../'
import { buttonMock } from '../../../../core/src/components/Button/mockProps'
import { flattenSets } from '../../../../core/test/helpers'
import { imageSnapshot, withPropLabels } from '../../../../core/test/imageSnapshot'

const propSets = buttonMock({
  buttonPresets: ['primary', 'accent', 'secondary', 'default', 'defaultOnSurface', 'defaultDark', 'outline', 'pay', 'appInstall', 'linkIncreased'],
})

describe('Button', () => {
  describe('screenshots', () => {
    it('default states', imageSnapshot(
      theme,
      withPropLabels(flattenSets(propSets), props => <Button {...props} />)
    ))
  })
})
