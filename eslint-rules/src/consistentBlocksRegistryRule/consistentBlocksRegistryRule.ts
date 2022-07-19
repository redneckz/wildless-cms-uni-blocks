import { ESLintUtils } from '@typescript-eslint/utils';
import { getObjectExpression } from '../utils/getObjectExpression';
import { jsBasename } from '../utils/jsBasename';
import { defaultOptions } from './consistentBlocksRegistryRule.defaultOptions';
import { ConsistentBlocksRegistryRuleOptions, meta } from './consistentBlocksRegistryRule.meta';
import { diff } from './diff';
import { findBlocks } from './findBlocks';

type MessageIds = 'blocksToRegister' | 'blocksRegistryNotFound';

export const consistentBlocksRegistryRule = ESLintUtils.RuleCreator.withoutDocs<
  ConsistentBlocksRegistryRuleOptions,
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
