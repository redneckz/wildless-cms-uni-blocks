import { jsBasename } from '../utils/jsBasename';
import { getBlockSubDir } from './getBlockSubDir';

export const isBlockMainFile = (filename: string): boolean =>
  jsBasename(filename) === getBlockSubDir(filename);
