import type { RuleMetaData } from '../RuleMetaData';

export type BlockStructureRuleOptions = [
  {
    blocksDir: string;
    exclude: RegExp[];
  },
];

const schema = {
  type: 'object',
  required: [],
  properties: {
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
    description: 'Проверка корректности файловой структуры блока',
    recommended: 'error',
  },
  messages: {
    noBlockMainFile:
      'Не найден главный модуль блока: {{blocksDir}}/{{blockName}}/{{blockName}}.tsx',
    noBlockFixtureFile:
      'Не найден файл с примерами для блока: {{blocksDir}}/{{blockName}}/{{blockName}}.fixture.tsx',
    noBlockContentFile:
      'Не найден файл типизации контента блока: {{blocksDir}}/{{blockName}}/{{blockName}}Content.ts',
    invalidBlockExport:
      'Блок должен экспортировать стрелочную функцию под именем "{{blockName}}" (других экспортов не продполагается)',
  },
  type: 'suggestion',
  schema: [schema],
};
