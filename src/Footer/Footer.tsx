import { JSX } from '@redneckz/uni-jsx';
import { Logo } from '../ui-kit/Logo';
import { SearchBar } from '../ui-kit/SearchBar';
import { Contacts } from './Contacts';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { HorizontalNavigation } from './HorizontalNavigation';
import { TextInformation } from './TextInformation';
import type { LinkContent } from '../ui-kit/Link';
import { UniBlocksComponentProps, ContactInfo } from '../types';

export interface FooterProps extends UniBlocksComponentProps {
  documents?: LinkContent[];
  relatedEnterprises?: LinkContent[];
  contacts?: ContactInfo[];
  socialMedia?: Omit<LinkContent, 'text'>[];
}

export const Footer = JSX<FooterProps>(
  ({ documents, relatedEnterprises, contacts, socialMedia, context }) => {
    return (
      <footer className="px-9 py-10 bg-white rounded-bl-3xl rounded-br-3xl">
        <div className="flex items-stretch gap-8">
          <Logo className="w-[179px]" />
          <SearchBar context={context} className="grow" />
        </div>
        <div className="flex items-stretch gap-8">
          <Contacts className="w-[179px]" items={contacts} context={context} hasButton />
          <Sitemap />
        </div>
        <SocialMedia media={socialMedia} />
        <HorizontalNavigation links={relatedEnterprises} context={context} />
        <TextInformation links={documents} context={context} />
      </footer>
    );
  },
);
