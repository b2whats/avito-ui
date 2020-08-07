module.exports = {
  setupFilesAfterEnv: ['./packages/core/test/setupReactJest'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text-summary'],
  collectCoverageFrom: [
    './packages/*/src/**/*.{ts,tsx}',
    // Typical type-only modules
    '!**/{contract.ts,types.ts}',
    // Say we onlyh have re-exports in index files
    '!**/index.ts',
    // Basically JSON configs - tested via :snap, but no trivial coverage
    '!./packages/tokens/**/*',
    '!**/components/*/theme.ts',
    '!packages/*/src/theme.ts',
    '!packages/*/src/themes/**/*',
    // Test file
    '!**/mockProps.*',
    // Icon svg
    '!**/Icon/icons/*',
  ],
}
