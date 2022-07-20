import { statSync } from 'fs';
import { basename, dirname, join } from 'path';

export const hasBlockFileWithSuffix =
  (suffix: string) =>
  (filename: string): boolean => {
    const blockSubDir = dirname(filename);
    const blockName = basename(blockSubDir);
    try {
      const mainFileStat = statSync(join(blockSubDir, `${blockName}${suffix}`));
      return mainFileStat.isFile();
    } catch (ex) {
      return false;
    }
  };

export const hasBlockMainFile = hasBlockFileWithSuffix('.tsx');

export const hasBlockFixtureFile = hasBlockFileWithSuffix('.fixture.tsx');

export const hasBlockContentFile = hasBlockFileWithSuffix('Content.ts');
