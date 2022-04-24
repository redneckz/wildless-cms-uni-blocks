import fs from 'fs';
import util from 'util';
import type { ContentPageDef, Picture } from '../types.js';
import { mapJSON } from './mapJSON.js';
import type { TransformationOptions } from './TransformationOptions.js';
import { transformMarkdown } from './transformMarkdown.js';
import { transformPicture } from './transformPicture.js';

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
