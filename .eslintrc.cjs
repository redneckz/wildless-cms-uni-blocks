module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'local-eslint-rules'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'warn',
    camelcase: ['error', { allow: ['node_ids', 'node_id', 'user_name'] }],
  },
  overrides: [
    {
      files: ['src/**/*'],
      excludedFiles: ['src/**/*.fixture.tsx', 'src/**/*.spec.tsx', 'src/**/*.spec.ts'],
      rules: {
        complexity: ['warn', 7],
        'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
        'max-depth': ['error', 2],
        'max-params': ['error', 3],
        'max-statements-per-line': ['error', { max: 1 }],
        'max-nested-callbacks': ['warn', 3],
        'max-lines-per-function': ['warn', { max: 50, skipComments: true }],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'local-eslint-rules/consistent-blocks-registry': [
          'warn',
          {
            blocksRegistry: 'src/components/Blocks.ts',
            blocksDir: 'src/components',
            exclude: [/^.*Page$/, /^.*Control$/, /^Base.*$/, /^.*Content$/, /^.*Blocks$/],
          },
          {
            blocksRegistry: 'src/components/MobileBlocks.ts',
            blocksDir: 'src/components',
            include: [/^.*\.mobile$/],
          },
        ],
      },
    },
  ],
};
