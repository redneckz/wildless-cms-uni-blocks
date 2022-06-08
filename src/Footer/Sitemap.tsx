import { JSX } from '@redneckz/uni-jsx';
import { TopMenuItem, UniBlocksComponentProps, LinkContent } from '../types';
import { mergeTopItems } from '../mergeTopItems';
import { useLink } from '../useLink';
import { ContentPageContext } from '../ContentPageContext';
export interface SitemapProps extends UniBlocksComponentProps {
  items?: TopMenuItem[];
}

export const Sitemap = JSX<SitemapProps>(({ className, items, context }) => {
  const sitemap = context.useSitemap();
  const mergedItems = mergeTopItems(sitemap.topItems, items);

  return (
    <div className={`flex items-start justify-start gap-11 xl:gap-5 ${className || ''}`}>
      {mergedItems?.map((_, i) => renderColumn(_, i, context))}
    </div>
  );
});

const renderColumn = (c: TopMenuItem, index: number, context: ContentPageContext) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
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
    className="block font-sans font-normal text-base text-secondary-text hover:text-primary-text no-underline"
    href={href}
    target={target || '_self'}
  >
    {text || `Раздел ${index}`}
  </a>
));
