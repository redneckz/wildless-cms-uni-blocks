import type { LinkContent } from '../ui-kit/Link';

export type HeaderMenuItem = LinkContent;

export interface TopMenuItem extends HeaderMenuItem {
  items?: HeaderMenuItem[];
}

export interface HeaderContent {
  location?: string;
  topItems?: TopMenuItem[];
}
