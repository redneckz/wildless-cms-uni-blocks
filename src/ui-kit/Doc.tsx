import { JSX } from '@redneckz/uni-jsx';
import { LinkContent } from '../model/LinkContent';
import { Icon } from './Icon';

export const Doc = JSX<LinkContent>(({ href, text, target }) => {
  return (
    <a
      href={href}
      target={target}
      className="text-sm font-sans inline-flex align-middle items-center text-primary-text no-underline group hover:text-primary-main"
    >
      <Icon name="DocIcon" width="24" height="24" className="mr-2.5" />
      {text || (href && formatHref(href))}
      <span className="text-secondary-text group-hover:text-primary-main">
        , {href && getFileExtension(href)}
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
