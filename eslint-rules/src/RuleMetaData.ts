import { ESLintUtils } from '@typescript-eslint/utils';

export type RuleMetaData = Parameters<typeof ESLintUtils.RuleCreator.withoutDocs>[0]['meta'];
