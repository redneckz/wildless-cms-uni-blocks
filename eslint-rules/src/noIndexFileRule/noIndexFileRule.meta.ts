import type { RuleMetaData } from '../RuleMetaData';

export type NoIndexFileRuleOptions = [
  {
    exclude: RegExp[];
  },
];

const schema = {
  type: 'object',
  required: [],
  properties: {
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
    description: 'Запрет на использование index файлов',
    recommended: 'error',
  },
  messages: {
    default: 'Для обеспечения совместимости с Node.js ESM API использование index файлов запрещено',
  },
  type: 'suggestion',
  schema: [schema],
};
