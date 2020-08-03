import { cleanup } from '@testing-library/react/pure'
import { isValidElementType } from 'react-is'

afterEach(cleanup)

// Serialize component definitions to displayName
expect.addSnapshotSerializer({
  test(value) {
    return value &&
      // most strings are not components (and when they are, they serialize well enough)
      typeof value !== 'string' &&
      // not all functions are components - test for CamelCase
      (typeof value !== 'function' || /^[A-Z]/.test(value.name)) &&
      isValidElementType(value)
  },
  print(value) {
    return `#${value.displayName || value.name || 'Component'}`
  },
})
