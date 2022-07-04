import fs from 'fs';
import util from 'util';
import type { Picture } from '../model/Picture';
import type { ContentPageDef } from '../types';
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
    const isPicture = value && isLocalPath(value.src);
    if (isMarkdown) {
      return await transformMarkdown(value);
    } else if (isPicture) {
      return await transformPicture(pagePath, value as Picture, options);
    }
    return value;
  });
}

const isLocalPath = (_: any): boolean => isString(_) && _.length < 512 && !isURL(_);

const isString = (_: any): _ is string => Boolean(_ && typeof _ === 'string');

const isURL = (src: string) => ['data:', 'https:', 'http:'].some((proto) => src.startsWith(proto));
