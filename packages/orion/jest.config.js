module.exports = {
  setupFilesAfterEnv: [
    'jest-canvas-mock',
    '@testing-library/react/cleanup-after-each',
    'jest-dom/extend-expect'
  ]
}
