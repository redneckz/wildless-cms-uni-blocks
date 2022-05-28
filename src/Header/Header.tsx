import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from '../ui-kit/Link';
import { HeaderItem } from '../ui-kit/HeaderItem';
import { Logo } from '../ui-kit/Logo';
import { TopItem } from '../ui-kit/TopItem';
import type { Router, ContentPageContext } from '../ContentPageContext';
import { useLink } from '../useLink';
import { HeaderSecondaryMenu } from './HeaderSecondaryMenu';

type HeaderMenuItem = LinkContent;

interface TopMenuItem extends HeaderMenuItem {
  items?: HeaderMenuItem[];
}

export interface HeaderContent {
  location?: string;
  topItems?: TopMenuItem[];
}

export interface HeaderProps extends HeaderContent {
  className?: string;
  context: ContentPageContext;
}

export const Header = JSX<HeaderProps>(({ className, location, context, topItems }) => {
  const router = context.useRouter();

  const activeTopItem = topItems?.find(isTopItemActive(router));
  const activeSubItem = activeTopItem?.items?.find(isSubItemActive(router));
  return (
    <div className={`pt-5 pb-8 px-20 bg-white rounded-bl-3xl rounded-br-3xl ${className || ''}`}>
      <div className="flex items-center">
        <Logo className="mr-8" />
        {topItems?.length
          ? topItems.map((_, i) => (
              <TopItem key={String(i)} active={_ === activeTopItem} {...useLink(context, _)} />
            ))
          : null}
        <HeaderSecondaryMenu location={location} className="ml-auto" />
      </div>
      <div className="mt-5 h-[1px] bg-main-divider" />
      {activeTopItem?.items?.length ? (
        <div className="mt-5">
          {activeTopItem.items.map((_) => (
            <HeaderItem
              key={_.href}
              className="mr-8"
              active={_ === activeSubItem}
              {...useLink(context, _)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});

const isURL = (href?: string) => href?.includes('//');

const withoutQuery = (href?: string) => (href || '').replace(/\/?\?.*/, '');

function isTopItemActive({ href, pathname }: Router): (item: HeaderMenuItem) => boolean {
  return (item) => {
    const itemHref = withoutQuery(item.href);
    if (isURL(itemHref)) {
      return Boolean(href && href.startsWith(itemHref));
    }
    return Boolean(itemHref && pathname.startsWith(itemHref));
  };
}

function isSubItemActive({ href, pathname }: Router): (item: HeaderMenuItem) => boolean {
  return (item) => {
    return withoutQuery(item.href) === (isURL(item.href) ? withoutQuery(href) : pathname);
  };
}
