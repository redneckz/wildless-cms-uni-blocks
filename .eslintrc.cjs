const BLOCKS_DIR = 'src/components';
const BLOCKS_DIR_EXCLUSIONS = [
  /^.*Page$/,
  /^.*Control$/,
  /^Base.*$/,
  /^BlockContent$/,
  /^Blocks$/,
  /^MobileBlocks$/,
];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'local-eslint-rules'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'warn',
    camelcase: ['error', { allow: ['node_ids', 'node_id', 'user_name'] }],
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['src/**/*'],
      excludedFiles: [
        'src/**/*.fixture.tsx',
        'src/cosmos*',
        'src/**/*.spec.tsx',
        'src/**/*.spec.ts',
      ],
      rules: {
        complexity: ['warn', 7],
        'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
        'max-depth': ['error', 2],
        'max-params': ['error', 3],
        'max-statements-per-line': ['error', { max: 1 }],
        'max-nested-callbacks': ['warn', 3],
        'max-lines-per-function': ['warn', { max: 50, skipComments: true }],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'import/no-default-export': 'error',
        'import/no-unresolved': 'off',
        'local-eslint-rules/consistent-blocks-registry': [
          'warn',
          {
            blocksRegistry: 'src/components/Blocks.ts',
            blocksDir: BLOCKS_DIR,
            exclude: BLOCKS_DIR_EXCLUSIONS,
          },
          {
            blocksRegistry: 'src/components/MobileBlocks.ts',
            blocksDir: BLOCKS_DIR,
            include: [/^.*\.mobile$/],
          },
        ],
        'local-eslint-rules/block-structure': [
          'error',
          {
            blocksDir: BLOCKS_DIR,
            exclude: BLOCKS_DIR_EXCLUSIONS,
          },
        ],
        'local-eslint-rules/no-index-file': [
          'error',
          {
            exclude: [/\/src\/index\.ts$/, /\/src\/content-page-repository\/index\.ts$/],
          },
        ],
      },
    },
  ],
};
