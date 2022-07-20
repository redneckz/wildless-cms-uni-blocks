import { jsBasename } from '../utils/jsBasename';
import { getBlockSubDir } from './getBlockSubDir';

export const isExcluded =
  (exclude: RegExp[]) =>
  (filename: string): boolean => {
    const blockName = jsBasename(filename);
    const blockSubDir = getBlockSubDir(filename);
    return exclude.some((_) => _.test(blockSubDir) || _.test(blockName));
  };
