module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'local-eslint-rules'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'warn',
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
};
