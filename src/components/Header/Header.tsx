import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import { useSitemap } from '../../services/sitemap/useSitemap';
import type { UniBlockProps } from '../../types';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import { Logo } from '../../ui-kit/Logo/Logo';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import type { HeaderContent } from './HeaderContent';
import { HeaderSecondaryMenu } from './HeaderSecondaryMenu';

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(({ className, defaultLocation, context, topItems }) => {
  const router = context.useRouter();
  const sitemap = useSitemap(context.useAsyncData);
  const { handlerDecorator } = context;

  const mergedItems = mergeTopItems(sitemap.topItems, topItems);
  const activeTopItem = mergedItems.find(isTopItemActive(router));
  const subItems = activeTopItem?.items;
  const activeSubItem = findActiveSubItem(router)(subItems);

  const topMenu = mergedItems.map((_, i) => (
    <TopItem
      key={String(i)}
      active={_ === activeTopItem}
      {...useLink({ router, handlerDecorator }, _)}
      ariaLabel={_.text}
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
    <header className={`pt-5 pb-8 px-20 bg-white ${className || ''}`}>
      <div className="container">
        <div className="flex items-center">
          <Logo className="mr-8" />
          {topMenu}
          <HeaderSecondaryMenu
            context={context}
            className="ml-auto"
            defaultLocation={defaultLocation}
          />
        </div>
        <div className="mt-5 h-[1px] bg-main-divider" />
        <nav className="mt-5">{subMenu}</nav>
      </div>
    </header>
  );
});
