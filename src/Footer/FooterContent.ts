import type { LinkContent } from '../model/LinkContent';
import type { SitemapContent } from '../model/SitemapContent';

export interface ContactInfo {
  text: string;
  type: 'tel' | 'email';
  description: string;
}

export interface FooterContent extends SitemapContent {
  documents?: LinkContent[];
  relatedEnterprises?: LinkContent[];
  contacts?: ContactInfo[];
  socialMedia?: Omit<LinkContent, 'text'>[];
}
