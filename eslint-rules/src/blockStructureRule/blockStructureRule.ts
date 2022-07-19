import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';
import { jsBasename } from '../utils/jsBasename';
import { defaultOptions } from './blockStructureRule.defaultOptions';
import { BlockStructureRuleOptions, meta } from './blockStructureRule.meta';
import { getBlockSubDir } from './getBlockSubDir';
import { hasBlockMainFile } from './hasBlockMainFile';
import { isBlockMainFile } from './isBlockMainFile';
import { isExcluded } from './isExcluded';

type MessageIds = 'noBlockMainFile' | 'invalidBlockExport';

export const blockStructureRule = ESLintUtils.RuleCreator.withoutDocs<
  BlockStructureRuleOptions,
  MessageIds
>({
  create(context) {
    const filename = context.getFilename();
    const [{ blocksDir, exclude = [] }] = context.options;

    if (!filename.includes(blocksDir) || isExcluded(exclude)(filename)) {
      return {};
    }

    const blockName = jsBasename(filename);

    const assertBlockMainFilePresence = (node: TSESTree.Node): boolean => {
      if (hasBlockMainFile(filename)) {
        return true;
      }

      context.report({
        messageId: 'noBlockMainFile',
        node,
        data: { blocksDir, blockName: getBlockSubDir(filename) },
      });
      return false;
    };

    const assertExportedBlockName = (node: TSESTree.ExportNamedDeclaration): boolean => {
      if (node.declaration?.type !== 'VariableDeclaration') {
        return true;
      }

      const exportedBlockName = getExportedConstName(node.declaration);
      if (exportedBlockName === blockName) {
        return true;
      }

      context.report({
        messageId: 'invalidBlockExport',
        node,
        data: { blockName },
      });
      return false;
    };

    return {
      ExportDefaultDeclaration: assertBlockMainFilePresence,
      ExportAllDeclaration: assertBlockMainFilePresence,
      ExportSpecifier: assertBlockMainFilePresence,
      ExportNamedDeclaration(node) {
        if (!assertBlockMainFilePresence(node) || !isBlockMainFile(filename)) {
          return;
        }

        if (!assertExportedBlockName(node)) {
          return;
        }
      },
    };
  },
  meta,
  defaultOptions: [defaultOptions],
});

const getExportedConstName = ({ declarations }: TSESTree.VariableDeclaration): string | null => {
  return declarations.length === 1 && 'name' in declarations[0].id ? declarations[0].id.name : null;
};
