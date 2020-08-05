/// <reference types="cypress" />
// import 'cypress-plugin-snapshots'
import React from 'react'
import { Theme } from '@avito/core'
import { describePropFuzz, girlImgSrc } from '@avito/core/test'
import * as components from '.'
import { theme, Avatar, Image, Input, UserIcon, Badge, Box, Card, Textarea, Text, Link, ListItem, SegmentButton } from '.'
import { mocks } from './mockProps'

const descibeNamedComponent = (name: keyof Theme, component = components[name]) => {
  describePropFuzz(name, component, theme, mocks[name]())
}

describe('mobile components', () => {
  descibeNamedComponent('Avatar', props => <Avatar src={girlImgSrc} {...props} />)
  descibeNamedComponent('Badge', props => (
    <Box bg='yellow300' p={10}>
      <Badge width={10} height={10} bg='green500' shape='circle' {...props} />
    </Box>
  ))
  descibeNamedComponent('Button')
  descibeNamedComponent('Card', props => <Card bg='yellow100' width={200} {...props}>hello</Card>)
  descibeNamedComponent('Image', props => <Image src={girlImgSrc} {...props} />)

  descibeNamedComponent('Icon', UserIcon)
  descibeNamedComponent('Spinner')

  descibeNamedComponent('Input', props => <Input width={200} {...props} />)
  descibeNamedComponent('Textarea', props => <Textarea width={200} {...props} />)

  descibeNamedComponent('Checkbox')
  descibeNamedComponent('Radio')
  descibeNamedComponent('Switcher')

  descibeNamedComponent('Text', props => <Text {...props}>hello<br />i am text</Text>)
  descibeNamedComponent('Link', props => <Link {...props}>hello</Link>)

  descibeNamedComponent('ListItem', props => <ListItem label='Текст лейбла' {...props} />)
  descibeNamedComponent('SegmentButton', props => <SegmentButton width={200} options={[{ value: 1, text: 'По алфавиту' }, { value: 2, text: 'По линиям' }]} {...props} />)
})
