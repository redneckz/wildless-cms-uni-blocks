import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../types';
import { Logo } from '../ui-kit/Logo';
import { SearchBar } from '../ui-kit/SearchBar';
import { Contacts } from './Contacts';
import type { FooterContent } from './FooterContent';
import { HorizontalNavigation } from './HorizontalNavigation';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { TextInformation } from './TextInformation';

const LEFT_COL_WIDTH_FULL_HD = 'w-[280px]';
const LEFT_COL_WIDTH_SMALL_DESKTOP = 'xl:w-[220px]';

export interface FooterProps extends FooterContent, UniBlockProps {}

export const Footer = JSX<FooterProps>(
  ({ className, documents, relatedEnterprises, contacts, socialMedia, topItems, context }) => {
    return (
      <footer className={`${className} px-9 py-10 bg-white`}>
        <div className="flex items-stretch gap-32 pb-8 xl:gap-8">
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
