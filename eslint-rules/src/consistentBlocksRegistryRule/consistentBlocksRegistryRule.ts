import { ESLintUtils } from '@typescript-eslint/utils';
import { getObjectExpression } from '../utils/getObjectExpression';
import { defaultOptions } from './consistentBlocksRegistryRule.defaultOptions';
import { meta } from './consistentBlocksRegistryRule.meta';
import { diff } from './diff';
import { findBlocks } from './findBlocks';
import { jsBasename } from './jsBasename';

type Options = Array<{
  blocksRegistry: string;
  blocksDir: string;
  include: RegExp[];
  exclude: RegExp[];
}>;

type MessageIds = 'default' | 'blocksToRegister' | 'blocksRegistryNotFound';

export const consistentBlocksRegistryRule = ESLintUtils.RuleCreator.withoutDocs<
  Options,
  MessageIds
>({
  create(context) {
    const filename = context.getFilename();
    const options = context.options.find((_) => filename.endsWith(_.blocksRegistry));

    if (!options) {
      return {};
    }

    const { blocksRegistry, blocksDir, include = [], exclude = [] } = options;

    const requiredBlocks = findBlocks(blocksDir, { include, exclude });

    return {
      VariableDeclaration(node) {
        const vars = context.getDeclaredVariables(node);
        if (vars.length !== 1) {
          return;
        }
        const [blocksRegistryConst] = vars;
        const blocksRegistryName = jsBasename(blocksRegistry);
        if (blocksRegistryConst.name !== blocksRegistryName) {
          context.report({
            messageId: 'blocksRegistryNotFound',
            node,
            data: { blocksRegistryName },
          });
          return;
        }

        const objectExpr = getObjectExpression(blocksRegistryConst as any);
        if (!objectExpr) {
          return;
        }

        const registeredBlocks = objectExpr.properties.map((_) => _.key.name);
        const blocksToRegister = diff(requiredBlocks, registeredBlocks);

        if (blocksToRegister.length) {
          context.report({
            messageId: 'blocksToRegister',
            node,
            data: {
              blocksToRegister: blocksToRegister.join(', '),
            },
          });
        }
      },
    };
  },
  meta,
  defaultOptions: [defaultOptions],
});
