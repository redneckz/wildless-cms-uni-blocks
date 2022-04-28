import { JSX } from '@redneckz/uni-jsx';
import type { ButtonContent } from './ui-kit/Button';
import { HeaderItem } from './ui-kit/HeaderItem';
import { Logo } from './ui-kit/Logo';
import { TopItem } from './ui-kit/TopItem';

type HeaderMenuItem = ButtonContent;

interface TopMenuItem extends HeaderMenuItem {
  items?: HeaderMenuItem[];
}

export interface HeaderContent {
  topItems?: TopMenuItem[];
}

export interface HeaderProps extends HeaderContent {
  className?: string;
}

export const Header = JSX<HeaderProps>(({ className, topItems }) => {
  const { href, pathname } = globalThis.location || {};
  const activeTopItem = topItems?.find((_) => href && _.href && href.startsWith(_.href));
  const activeSubItem =
    pathname && activeTopItem?.items?.find(({ href }) => href && pathname.startsWith(href));
  return (
    <div className={`py-8 px-20 bg-white rounded-bl-3xl rounded-br-3xl ${className || ''}`}>
      <div className="flex items-center">
        <Logo className="mr-8" />
        {topItems?.map((_) => (
          <TopItem
            key={_.href}
            active={_ === activeTopItem}
            target={_ === activeTopItem ? '_self' : '_blank'}
            {..._}
          />
        ))}
      </div>
      {activeTopItem?.items && (
        <div className="mt-10">
          {activeTopItem.items.map((_) => (
            <HeaderItem key={_.href} className="mr-8" active={_ === activeSubItem} {..._} />
          ))}
        </div>
      )}
    </div>
  );
});
