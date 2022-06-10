import { JSX } from '@redneckz/uni-jsx';
import { Logo } from '../ui-kit/Logo';
import { SearchBar } from '../ui-kit/SearchBar';
import { Contacts } from './Contacts';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { HorizontalNavigation } from './HorizontalNavigation';
import { TextInformation } from './TextInformation';
import type { LinkContent, UniBlocksComponentProps, ContactInfo, TopMenuItem } from '../types';

const LEFT_COL_WIDTH_FULL_HD = 'w-[280px]';
const LEFT_COL_WIDTH_SMALL_DESKTOP = 'xl:w-[220px]';

interface FooterContent {
  documents?: LinkContent[];
  relatedEnterprises?: LinkContent[];
  contacts?: ContactInfo[];
  socialMedia?: Omit<LinkContent, 'text'>[];
  topItems?: TopMenuItem[];
}
export interface FooterProps extends FooterContent, UniBlocksComponentProps {}

export const Footer = JSX<FooterProps>(
  ({ className, documents, relatedEnterprises, contacts, socialMedia, topItems, context }) => {
    return (
      <footer className={`${className} px-9 py-2 bg-white rounded-bl-3xl rounded-br-3xl`}>
        <div className="flex items-stretch gap-32 py-8 xl:gap-8">
          <Logo className={`${LEFT_COL_WIDTH_FULL_HD} ${LEFT_COL_WIDTH_SMALL_DESKTOP}`} />
          <SearchBar context={context} className="grow" />
        </div>
        <div className="flex items-stretch gap-32 xl:gap-8">
          <Contacts
            className={`${LEFT_COL_WIDTH_FULL_HD} shrink-0 overflow-hidden ${LEFT_COL_WIDTH_SMALL_DESKTOP}`}
            items={contacts}
            context={context}
            hasButton
          />
          <Sitemap className="pt-[3px]" context={context} items={topItems} />
        </div>
        <SocialMedia media={socialMedia} context={context} />
        <HorizontalNavigation links={relatedEnterprises} context={context} />
        <TextInformation links={documents} context={context} />
      </footer>
    );
  },
);
