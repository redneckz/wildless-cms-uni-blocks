import { JSX } from '@redneckz/uni-jsx';
import { Logo } from '../ui-kit/Logo';
import { SearchBar } from '../ui-kit/SearchBar';
import { Contacts } from './Contacts';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { HorizontalNavigation } from './HorizontalNavigation';
import { TextInformation } from './TextInformation';
import type { LinkContent } from '../types';
import { UniBlocksComponentProps, ContactInfo } from '../types';
import { TopMenuItem } from '../types';

export interface FooterProps extends UniBlocksComponentProps {
  documents?: LinkContent[];
  relatedEnterprises?: LinkContent[];
  contacts?: ContactInfo[];
  socialMedia?: Omit<LinkContent, 'text'>[];
  topItems?: TopMenuItem[];
}

export const Footer = JSX<FooterProps>(
  ({ documents, relatedEnterprises, contacts, socialMedia, topItems, context }) => {
    return (
      <footer className="px-9 py-10 bg-white rounded-bl-3xl rounded-br-3xl">
        <div className="flex items-stretch gap-8 py-8">
          <Logo className="w-[179px]" />
          <SearchBar context={context} className="grow" />
        </div>
        <div className="flex items-stretch gap-8">
          <Contacts
            className="min-w-[179px] overflow-hidden"
            items={contacts}
            context={context}
            hasButton
          />
          <Sitemap className="pt-[3px]" context={context} items={topItems} />
        </div>
        <SocialMedia media={socialMedia} />
        <HorizontalNavigation links={relatedEnterprises} context={context} />
        <TextInformation links={documents} context={context} />
      </footer>
    );
  },
);
