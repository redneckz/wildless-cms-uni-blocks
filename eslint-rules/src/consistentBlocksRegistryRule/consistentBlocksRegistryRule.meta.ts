import type { RuleMetaData } from '../RuleMetaData';

export type ConsistentBlocksRegistryRuleOptions = Array<{
  blocksRegistry: string;
  blocksDir: string;
  include: RegExp[];
  exclude: RegExp[];
}>;

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
    include: {
      type: 'array',
      items: {
        type: 'object',
      },
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
    blocksToRegister: 'Следующие блоки должны быть зарегистрированы: {{blocksToRegister}}',
    blocksRegistryNotFound:
      'Реестр блоков должен иметь название в соответствии с именем модуля: {{blocksRegistryName}}',
  },
  type: 'suggestion',
  schema: new Array(16).fill(schema),
};
