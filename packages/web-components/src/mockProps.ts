import { mocks as baseMocks } from '../../core/test'

export const mocks = {
  ...baseMocks,
  Button: () => baseMocks.Button({
    buttonPresets: ['primary', 'default', 'newDefault', 'success', 'warning', 'error'],
  }),
}
