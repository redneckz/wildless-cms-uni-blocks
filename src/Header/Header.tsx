import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from '../ContentPageContext';
import { HeaderItem } from '../ui-kit/HeaderItem';
import { Logo } from '../ui-kit/Logo';
import { TopItem } from '../ui-kit/TopItem';
import { useLink } from '../useLink';
import type { HeaderContent } from './HeaderContent';
import { HeaderSecondaryMenu } from './HeaderSecondaryMenu';
import { isSubItemActive } from './isSubItemActive';
import { isTopItemActive } from './isTopItemActive';
import { mergeTopItems } from './mergeTopItems';

export interface HeaderProps extends HeaderContent {
  className?: string;
  context: ContentPageContext;
}

export const Header = JSX<HeaderProps>(({ className, location, context, topItems }) => {
  const router = context.useRouter();
  const sitemap = context.useSitemap();
  const { handlerDecorator } = context;

  const mergedItems = mergeTopItems(sitemap.topItems, topItems);
  const activeTopItem = mergedItems.find(isTopItemActive(router));
  const subItems = activeTopItem?.items;
  const activeSubItem = subItems?.find(isSubItemActive(router));

  const topMenu = mergedItems.map((_, i) => (
    <TopItem
      key={String(i)}
      active={_ === activeTopItem}
      {...useLink({ router, handlerDecorator }, _)}
    />
  ));

  const subMenu = subItems?.map((_) => (
    <HeaderItem
      key={_.href}
      className="mr-8"
      active={_ === activeSubItem}
      {...useLink({ router, handlerDecorator }, _)}
    />
  ));

  return (
    <header className={`pt-5 pb-8 px-20 bg-white rounded-bl-3xl rounded-br-3xl ${className || ''}`}>
      <div className="flex items-center">
        <Logo className="mr-8" />
        {topMenu}
        <HeaderSecondaryMenu location={location} className="ml-auto" />
      </div>
      <div className="mt-5 h-[1px] bg-main-divider" />
      <nav className="mt-5">{subMenu}</nav>
    </header>
  );
});
