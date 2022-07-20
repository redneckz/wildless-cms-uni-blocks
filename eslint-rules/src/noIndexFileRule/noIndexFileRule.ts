import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';
import { basename } from 'path';
import { withoutExt } from '../utils/withoutExt';
import { meta, NoIndexFileRuleOptions } from './noIndexFileRule.meta';

type MessageIds = 'default';

export const noIndexFileRule = ESLintUtils.RuleCreator.withoutDocs<
  NoIndexFileRuleOptions,
  MessageIds
>({
  create(context) {
    const filename = context.getFilename();
    const [{ exclude = [] } = {}] = context.options;

    const isIndexFile = withoutExt(basename(filename)) === 'index';
    if (!isIndexFile || exclude.some((_) => _.test(filename))) {
      return {};
    }

    const reportNoIndexFile = (node: TSESTree.Node) => {
      context.report({ messageId: 'default', node });
    };

    return {
      ExportAllDeclaration: reportNoIndexFile,
      ExportDefaultDeclaration: reportNoIndexFile,
      ExportNamedDeclaration: reportNoIndexFile,
    };
  },
  meta,
  defaultOptions: [
    {
      exclude: [],
    },
  ],
});
