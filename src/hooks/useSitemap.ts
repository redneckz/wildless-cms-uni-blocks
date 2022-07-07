import type { AsyncDataHook } from '../components/ContentPage/ContentPageContext';
import type { HeaderContent } from '../components/Header/HeaderContent';
import { projectSettings } from '../ProjectSettings';

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
