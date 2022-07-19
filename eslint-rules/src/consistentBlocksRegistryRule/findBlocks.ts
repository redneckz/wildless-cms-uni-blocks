import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { withoutExt } from '../utils/withoutExt';
import { jsBasename } from './jsBasename';

interface Options {
  include: RegExp[];
  exclude: RegExp[];
}

export function findBlocks(blocksDir: string, options: Options): string[] {
  const children = readdirSync(blocksDir);
  return children.flatMap(findBlockFiles(blocksDir, options)).map(withoutExt);
}

function findBlockFiles(blocksDir: string, { include, exclude }: Options) {
  const isIncluded = (defaultFilename: string) => (filename: string) =>
    (include.length ? include.some((_) => _.test(filename)) : filename === defaultFilename) &&
    !exclude.some((_) => _.test(filename));

  return (childName: string): string[] => {
    const blockName = jsBasename(childName);
    const blockPath = join(blocksDir, childName);

    try {
      const childStat = statSync(blockPath);
      if (childStat.isFile()) {
        return isIncluded(blockName)(blockName) ? [blockName] : [];
      }

      if (!childStat.isDirectory()) {
        return [];
      }

      const blockFiles = readdirSync(blockPath);
      return blockFiles.map(jsBasename).filter(isIncluded(blockName));
    } catch (ex) {
      return [];
    }
  };
}
