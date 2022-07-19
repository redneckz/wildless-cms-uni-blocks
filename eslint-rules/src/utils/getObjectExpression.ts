import { Variable } from '@typescript-eslint/scope-manager';

export function getObjectExpression(variable: Variable) {
  const [varDef] = variable.defs;
  if (
    varDef &&
    'node' in varDef &&
    varDef.node &&
    'init' in varDef.node &&
    varDef.node.init &&
    'properties' in varDef.node.init
  ) {
    return varDef.node.init;
  } else {
    return null;
  }
}
