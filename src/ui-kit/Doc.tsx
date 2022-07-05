import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from '../types';
import { Icon } from './Icon';

export interface DocProps extends LinkContent {
  href: string;
}

export const Doc = JSX<DocProps>(({ href, text, target }) => {
  return (
    <a
      href={href}
      target={target}
      className="text-sm font-sans inline-flex align-middle items-center text-primary-text no-underline group hover:text-primary-main"
    >
      <Icon name="DocIcon" width="24" height="24" className="mr-2.5" />
      {text || formatHref(href)}
      <span className="text-secondary-text group-hover:text-primary-main">
        , {getFileExtension(href)}
      </span>
    </a>
  );
});

const formatHref = (href: string) => {
  const result = href.split('.');
  result.pop();
  return result;
};
const getFileExtension = (href: string) => href.split('.').pop();