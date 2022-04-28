import { JSX } from '@redneckz/uni-jsx';
import { HeaderItem, Logo, TopItem } from './ui-kit';

interface HeaderMenuItem {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  text: string;
}

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
  const activeTopItem = topItems?.find((_) => href && href.startsWith(_.href));
  const activeSubItem =
    pathname && activeTopItem?.items?.find(({ href }) => pathname.startsWith(href));
  return (
    <div className={`py-8 px-20 bg-white rounded-bl-3xl rounded-br-3xl ${className || ''}`}>
      <div className="flex items-center">
        <Logo className="mr-8" />
        {topItems?.map((_) => (
          <TopItem
            {..._}
            active={_ === activeTopItem}
            target={_ === activeTopItem ? '_self' : '_blank'}
          />
        ))}
      </div>
      {activeTopItem?.items && (
        <div className="mt-10">
          {activeTopItem.items.map((_) => (
            <HeaderItem className="mr-8" {..._} active={_ === activeSubItem} />
          ))}
        </div>
      )}
    </div>
  );
});
