import { JSX } from '@redneckz/uni-jsx';
import { Logo } from '../ui-kit/Logo';
import { SearchBar } from '../ui-kit/SearchBar';
import { Contacts } from './Contacts';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { HorizontalNavigation } from './HorizontalNavigation';
import { TextInformation } from './TextInformation';
import type { LinkContent } from '../ui-kit/Link';
import type { ContentPageContext } from '../ContentPageContext';

export interface FooterProps {
  documents: LinkContent[];
  context: ContentPageContext;
}

export const Footer = JSX<FooterProps>(({ documents, context }) => {
  return (
    <footer className="px-9 py-10 bg-white rounded-bl-3xl rounded-br-3xl">
      <div className="flex items-stretch">
        <Logo />
        <SearchBar />
      </div>
      <div className="flex items-stretch">
        <Contacts />
        <Sitemap />
      </div>
      <SocialMedia />
      <HorizontalNavigation />
      <TextInformation documents={documents} context={context} />
    </footer>
  );
});
