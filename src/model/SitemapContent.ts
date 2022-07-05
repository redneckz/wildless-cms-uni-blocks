import { LinkContent } from '../model/LinkContent';

export interface TopMenuItem extends LinkContent {
  items?: LinkContent[];
}

export interface SitemapContent {
  topItems?: TopMenuItem[];
}
