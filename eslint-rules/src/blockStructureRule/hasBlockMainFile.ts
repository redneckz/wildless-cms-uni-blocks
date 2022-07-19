import { statSync } from 'fs';
import { basename, dirname, join } from 'path';

export const hasBlockMainFile = (filename: string): boolean => {
  const blockSubDir = dirname(filename);
  const blockName = basename(blockSubDir);
  try {
    const mainFileStat = statSync(join(blockSubDir, `${blockName}.tsx`));
    return mainFileStat.isFile();
  } catch (ex) {
    return false;
  }
};
