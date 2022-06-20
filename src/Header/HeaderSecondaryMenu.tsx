import { JSX } from '@redneckz/uni-jsx';
import { GridIcon, LoupeIcon, ProfileIcon } from '../Icons/index';
import { TopItem } from '../ui-kit/TopItem';
import { HeaderSecondaryMenuButton } from './HeaderSecondaryMenuButton';
import { HeaderLocationWrapper } from './HeaderLocationWrapper';
import type { UniBlockProps } from '../types';

interface HeaderSecondaryMenuContent {
  defaultLocation?: string;
  className?: string;
}

export interface HeaderSecondaryMenuProps extends HeaderSecondaryMenuContent, UniBlockProps {}

export const HeaderSecondaryMenu = JSX<HeaderSecondaryMenuProps>(
  ({ context, className, defaultLocation }) => {
    return (
      <div className={`flex items-center ${className || ''}`}>
        <HeaderLocationWrapper context={context} className="mr-5" defaultLocation={defaultLocation}>
          {({ location, ...rest }) => (
            <TopItem {...rest} flat={true} href="#" text={location} ariaLabel="Местоположение" />
          )}
        </HeaderLocationWrapper>
        <TopItem
          className="mr-7"
          flat={true}
          href="#"
          text="Офисы и банкоматы"
          ariaLabel="Список всех доступных офисов и банкоматов"
        />
        <HeaderSecondaryMenuButton
          className="mr-5 text-primary-text hover:text-primary-main"
          ariaLabel="Поиск по сайту"
        >
          {LoupeIcon({ 'aria-hidden': true })}
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className="mr-5 text-primary-text hover:text-primary-main"
          ariaLabel="Профиль"
        >
          {ProfileIcon({ 'aria-hidden': true })}
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className="mr-5 text-secondary-light hover:text-secondary-active min-w-[32px] min-h-[32px]"
          ariaLabel="Дополнительные ссылки"
        >
          {GridIcon({ 'aria-hidden': true })}
        </HeaderSecondaryMenuButton>
      </div>
    );
  },
);
