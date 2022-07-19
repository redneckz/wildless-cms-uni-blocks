/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
};
