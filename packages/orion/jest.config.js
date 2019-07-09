module.exports = {
  setupFilesAfterEnv: [
    'jest-canvas-mock',
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect'
  ],
  testPathIgnorePatterns: ['<rootDir>/dist/']
}
