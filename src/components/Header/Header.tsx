import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { useSitemap } from '../../hooks/useSitemap';
import { mergeTopItems } from '../../mergeTopItems';
import type { UniBlockProps } from '../../types';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import { Logo } from '../../ui-kit/Logo/Logo';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import type { HeaderContent } from './HeaderContent';
import { HeaderSecondaryMenu } from './HeaderSecondaryMenu';
import { isSubItemActive } from './isSubItemActive';
import { isTopItemActive } from './isTopItemActive';

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(
  ({ className, defaultLocation, bgColorScheme = 'white', context, topItems }) => {
    const router = context.useRouter();
    const sitemap = useSitemap(context.useAsyncData);
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
        ariaLabel={_.text}
        bgColorScheme={bgColorScheme}
      />
    ));

    const subMenu = subItems?.map((_) => (
      <HeaderItem
        key={_.href}
        className="mr-8"
        active={_ === activeSubItem}
        {...useLink({ router, handlerDecorator }, _)}
        bgColorScheme={bgColorScheme}
      />
    ));

    const COLORS_SCHEME = {
      white: 'bg-white',
      transparent: 'bg-transparent',
    };
    const BORDER_COLORS_SCHEME = {
      white: 'bg-main-divider',
      transparent: 'bg-main-divider opacity-30',
    };

    return (
      <header className={`pt-5 pb-8 px-20 ${COLORS_SCHEME[bgColorScheme]} ${className || ''}`}>
        <div className="container">
          <div className="flex items-center">
            <Logo className="mr-8" bgColorScheme={bgColorScheme} />
            {topMenu}
            <HeaderSecondaryMenu
              context={context}
              className="ml-auto"
              defaultLocation={defaultLocation}
              bgColorScheme={bgColorScheme}
            />
          </div>
          <div className={`mt-5 h-[1px] ${BORDER_COLORS_SCHEME[bgColorScheme]}`} />
          <nav className="mt-5">{subMenu}</nav>
        </div>
      </header>
    );
  },
);
