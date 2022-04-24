import glob from 'glob';
import util from 'util';
import type { ContentPageDef } from '../types.js';
import type { TransformationOptions } from './TransformationOptions.js';
import { transformContentPage } from './transformContentPage.js';

const find = util.promisify(glob);

export function ContentPageRepository({
  contentDir = 'content',
  publicDir = 'public',
}: Partial<TransformationOptions> = {}) {
  async function getAllContentPages(): Promise<ContentPageDef[]> {
    const pagePaths = await find(`${contentDir}/**/*.page.json`);
    return await Promise.all(pagePaths.map(readPage));
  }

  async function getContentPageBySlug(slug: string): Promise<ContentPageDef | undefined> {
    const pages = await getAllContentPages();
    return pages.find((content) => content.slug === slug);
  }

  const cache: Record<string, ContentPageDef> = {};
  async function readPage(filePath: string): Promise<ContentPageDef> {
    if (!(filePath in cache)) {
      cache[filePath] = await transformContentPage(filePath, {
        contentDir,
        publicDir,
      });
    }
    return cache[filePath];
  }

  return {
    getAllContentPages,
    getContentPageBySlug,
  };
}
