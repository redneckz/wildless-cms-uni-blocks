import { JSX } from '@redneckz/uni-jsx';
import { mergeTopItems } from '../mergeTopItems';
import type { LinkContent } from '../model/LinkContent';
import type { TopMenuItem } from '../model/SitemapContent';
import type { UniBlockProps } from '../types';
import { useLink } from '../useLink';
import { useSitemap } from '../useSitemap';
export interface SitemapProps extends UniBlockProps {
  items?: TopMenuItem[];
}

export const Sitemap = JSX<SitemapProps>(({ className, items, context }) => {
  const sitemap = useSitemap(context.useAsyncData);
  const mergedItems = mergeTopItems(sitemap.topItems, items);
  const linkParams = {
    router: context.useRouter(),
    handlerDecorator: context.handlerDecorator,
  };

  return (
    <div className={`flex items-start justify-start gap-11 xl:gap-5 ${className || ''}`}>
      {mergedItems?.map((_, i) => renderColumn(_, i, linkParams))}
    </div>
  );
});

const renderColumn = (c: TopMenuItem, index: number, { router, handlerDecorator }) => {
  const { text, href, items, target } = c;

  return (
    <div key={String(index)} className="flex flex-col w-[235px] gap-[14px]">
      <a
        className="block font-sans font-medium text-base text-primary-text no-underline"
        href={href}
        target={target || '_self'}
      >
        {text || `Раздел ${index}`}
      </a>
      {items?.map((_, i) => (
        <ColumnItem key={String(i)} {...useLink({ router, handlerDecorator }, _)} />
      ))}
    </div>
  );
};

interface ColumnItemProps extends LinkContent {
  index?: number;
}

const ColumnItem = JSX<ColumnItemProps>(({ text, href, target, index }) => (
  <a
    className="block font-sans font-normal text-base text-secondary-text hover:text-primary-main no-underline"
    href={href}
    target={target || '_self'}
  >
    {text || `Раздел ${index}`}
  </a>
));
