/// <reference types="cypress" />
// import 'cypress-plugin-snapshots'
import React from 'react'
import { Button, theme } from '../../'
import { flattenSets } from '../../../../core/test/helpers'
import { imageSnapshot, withPropLabels } from '../../../../core/test/imageSnapshot'
import { mocks } from '../../mockProps'

describe('Button', () => {
  describe('screenshots', () => {
    it('default states', imageSnapshot(
      theme,
      withPropLabels(flattenSets(mocks.Button()), props => <Button {...props} />)
    ))
  })
})
