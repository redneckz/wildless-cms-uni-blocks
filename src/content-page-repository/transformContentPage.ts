import fs from 'fs';
import util from 'util';
import type { ContentPageDef, Picture } from '../types';
import { mapJSON } from './mapJSON';
import type { TransformationOptions } from './TransformationOptions';
import { transformMarkdown } from './transformMarkdown';
import { transformPicture } from './transformPicture';

const readFile = util.promisify(fs.readFile);

export async function transformContentPage(
  pagePath: string,
  options: TransformationOptions,
): Promise<ContentPageDef> {
  const content = await readFile(pagePath, 'utf8');
  return mapJSON<ContentPageDef>(JSON.parse(content), async (value: any, [key]) => {
    const isMarkdown = typeof value === 'string' && key?.endsWith('__md');
    const isPicture = value && value.src && typeof value.src === 'string';
    if (isMarkdown) {
      return await transformMarkdown(value);
    } else if (isPicture) {
      return await transformPicture(pagePath, value as Picture, options);
    }
    return value;
  });
}
