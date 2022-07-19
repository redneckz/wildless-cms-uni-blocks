import { ESLintUtils } from '@typescript-eslint/utils';

type RuleMetaData = Parameters<typeof ESLintUtils.RuleCreator.withoutDocs>[0]['meta'];

const schema = {
  type: 'object',
  required: [],
  properties: {
    blocksRegistry: {
      type: 'string',
    },
    blocksDir: {
      type: 'string',
    },
    exclude: {
      type: 'array',
      items: {
        type: 'object',
      },
    },
  },
};

export const meta: RuleMetaData = {
  docs: {
    description: 'Все блоки должны быть зарегистрированы в реестре Blocks',
    recommended: 'error',
  },
  messages: {
    default: 'Все блоки должны быть зарегистрированы в реестре Blocks',
    blocksToRegister: 'Следующие блоки должны быть зарегистрированы: {{blocksToRegister}}',
    blocksRegistryNotFound:
      'Реестр блоков должен иметь название в соответствии с именем модуля: {{blocksRegistryName}}',
  },
  type: 'suggestion',
  schema: new Array(16).fill(schema),
};
