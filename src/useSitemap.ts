import type { AsyncDataHook } from './ContentPageContext';
import type { HeaderContent } from './Header/index';
import { projectSettings } from './ProjectSettings';

export function useSitemap(useAsyncData: AsyncDataHook): HeaderContent {
  const { data } = useAsyncData(sitemapURL(), fetchSitemap);
  return data || {};
}

async function fetchSitemap(): Promise<HeaderContent> {
  const response = await fetch(sitemapURL());
  return await response.json();
}

function sitemapURL() {
  return `/wcms-resources/${projectSettings.SITEMAP || 'sitemap'}.json`;
}
