import React from 'react'
import { bool, mockProps, maybe, girlImgSrc } from '../../../test'
import { Image } from '../Image'
import { Text } from '../Text'
import { BannerProps } from './contract'

export const bannerMock = mockProps<BannerProps>(() => [{
  column: bool,
}], {
  browserBase: {
    children: [<Text key='0'>hello</Text>, <Text key='1'>i am a card</Text>],
  },
  browserSets: [{
    column: bool,
    image: maybe(<Image height={240} src={girlImgSrc} />),
  }, {
    onClose: [() => {}],
  }],
})
