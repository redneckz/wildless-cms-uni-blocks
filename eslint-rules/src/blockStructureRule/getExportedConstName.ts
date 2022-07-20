import { TSESTree } from '@typescript-eslint/utils';

export const getExportedConstName = ({
  declarations,
}: TSESTree.VariableDeclaration): string | null => {
  return declarations.length === 1 && 'name' in declarations[0].id ? declarations[0].id.name : null;
};
