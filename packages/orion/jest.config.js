module.exports = {
  setupFilesAfterEnv: [
    'jest-canvas-mock',
    '@testing-library/jest-dom/extend-expect'
  ],
  testPathIgnorePatterns: ['<rootDir>/dist/']
}
