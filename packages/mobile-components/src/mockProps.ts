import { mocks as baseMocks } from '../../core/test'
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
