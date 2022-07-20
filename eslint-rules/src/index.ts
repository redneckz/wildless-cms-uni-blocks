import { blockStructureRule } from './blockStructureRule';
import { consistentBlocksRegistryRule } from './consistentBlocksRegistryRule';
import { noIndexFileRule } from './noIndexFileRule/noIndexFileRule';

export const rules = {
  'consistent-blocks-registry': consistentBlocksRegistryRule,
  'block-structure': blockStructureRule,
  'no-index-file': noIndexFileRule,
};
