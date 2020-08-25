import { mocks as baseMocks } from '@avito/core/test/components'
import { listMock } from './components/List/mockProps'
import { segmentButtonMock } from './components/SegmentButton/mockProps'

export const mocks = {
  ...baseMocks,
  Button: () => baseMocks.Button({
    buttonPresets: ['primary', 'accent', 'secondary', 'default', 'defaultOnSurface', 'defaultDark', 'outline', 'pay', 'appInstall', 'linkIncreased'],
  }),
  ListItem: listMock,
  SegmentButton: segmentButtonMock,
}
