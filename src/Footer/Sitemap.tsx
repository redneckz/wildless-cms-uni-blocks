import { JSX } from '@redneckz/uni-jsx';
import { TopMenuItem, UniBlocksComponentProps, LinkContent } from '../types';
import { mergeTopItems } from '../mergeTopItems';
export interface SitemapProps extends UniBlocksComponentProps {
  items?: TopMenuItem[];
}

export const Sitemap = JSX<SitemapProps>(({ className, items, context }) => {
  const router = context.useRouter();
  const sitemap = context.useSitemap();
  const { handlerDecorator } = context;

  const mergedItems = mergeTopItems(sitemap.topItems, items);

  return (
    <div className={`flex items-start justify-start gap-12 ${className || ''}`}>
      {mergedItems?.map(renderColumn)}
    </div>
  );
});

const renderColumn = (c: TopMenuItem, index: number) => {
  const { text, href, items, target } = c;

  return (
    <div key={String(index)} className="flex flex-col w-[235px] gap-[14px]">
      <a
        className="block font-sans font-medium text-text-base text-primary-text no-underline"
        href={href}
        target={target || '_self'}
      >
        {text || `Раздел ${index}`}
      </a>
      {items?.map(renderColumnItem)}
    </div>
  );
};

const renderColumnItem = (_: LinkContent, index: number) => (
  <a
    key={index}
    className="block font-sans font-normal text-base text-secondary-text hover:text-primary-text no-underline"
    href={_.href}
    target={_.target || '_self'}
  >
    {_.text || `Раздел ${index}`}
  </a>
);
