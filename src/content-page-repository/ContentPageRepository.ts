import glob from 'glob';
import util from 'util';
import { toMobilePage } from '../components/ContentPage/toMobilePage';
import type { ContentPageDef } from '../types';
import type { TransformationOptions } from './TransformationOptions';
import { transformContentPage } from './transformContentPage';

const INDEX_PAGE_SLUG = 'index';
const find = util.promisify(glob);

// eslint-disable-next-line max-lines-per-function
export function ContentPageRepository({
  contentDir = 'content',
  publicDir = 'public',
}: Partial<TransformationOptions> = {}) {
  async function getAllContentPages(): Promise<ContentPageDef[]> {
    const pagePaths = await find(`${contentDir}/**/*.page.json`);
    return await Promise.all(pagePaths.map(readPage));
  }

  async function getSecondaryContentPages() {
    const pages = await getAllContentPages();
    return pages.filter((content) => content.slug !== INDEX_PAGE_SLUG);
  }

  async function getContentPageBySlug(slug: string): Promise<ContentPageDef | undefined> {
    const pages = await getAllContentPages();
    return pages.find((content) => content.slug === slug);
  }

  async function getMobilePageBySlug(slug: string): Promise<ContentPageDef | undefined> {
    const page = await getContentPageBySlug(slug);
    return page && toMobilePage(page);
  }

  async function getIndexPage() {
    return await getContentPageBySlug(INDEX_PAGE_SLUG);
  }

  async function getIndexMobilePage() {
    return await getMobilePageBySlug(INDEX_PAGE_SLUG);
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
    getMobilePageBySlug,
    getSecondaryContentPages,
    getIndexPage,
    getIndexMobilePage,
  };
}
