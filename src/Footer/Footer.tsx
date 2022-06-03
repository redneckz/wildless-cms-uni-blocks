import { JSX } from '@redneckz/uni-jsx';
import { Logo } from '../ui-kit/Logo';
import { SearchBar } from '../ui-kit/SearchBar';
import { Contacts } from './Contacts';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { HorizontalNavigation } from './HorizontalNavigation';
import { TextInformation } from './TextInformation';
import type { LinkContent } from '../ui-kit/Link';
import { UniBlocksComponentProps } from '../types';

export interface FooterProps extends UniBlocksComponentProps {
  documents?: LinkContent[];
  relatedEnterprises?: LinkContent[];
}

export const Footer = JSX<FooterProps>(({ documents, relatedEnterprises, context }) => {
  return (
    <footer className="px-9 py-10 bg-white rounded-bl-3xl rounded-br-3xl">
      <div className="flex items-stretch gap-[30px]">
        <Logo />
        <SearchBar context={context} className="grow" />
      </div>
      <div className="flex items-stretch">
        <Contacts />
        <Sitemap />
      </div>
      <SocialMedia />
      <HorizontalNavigation links={relatedEnterprises} context={context} />
      <TextInformation links={documents} context={context} />
    </footer>
  );
});
