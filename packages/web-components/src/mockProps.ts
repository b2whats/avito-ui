import { mocks as baseMocks } from '../../core/test/components'

export const mocks = {
  ...baseMocks,
  Button: () => baseMocks.Button({
    buttonPresets: ['primary', 'default', 'newDefault', 'success', 'warning', 'error'],
  }),
}
