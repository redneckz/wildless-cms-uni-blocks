import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import { HeaderSecondaryMenuButton } from './HeaderSecondaryMenuButton';

interface HeaderSecondaryMenuContent {
  defaultLocation?: string;
  className?: string;
}

export interface HeaderSecondaryMenuProps extends HeaderSecondaryMenuContent, UniBlockProps {}

export const HeaderSecondaryMenu = JSX<HeaderSecondaryMenuProps>(
  ({ context, className, defaultLocation = '' }) => {
    const [city, getCity] = context.useGeolocation(defaultLocation);

    return (
      <div className={`flex items-center ${className || ''}`}>
        <TopItem
          className="mr-5"
          flat={true}
          href="#"
          text={city}
          ariaLabel="Местоположение"
          onClick={getCity}
        />
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
          <Icon name="LoupeIcon" aria-hidden="true" />
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className="mr-5 text-primary-text hover:text-primary-main"
          ariaLabel="Профиль"
        >
          <Icon name="ProfileIcon" aria-hidden="true" />
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className="mr-5 text-secondary-light hover:text-secondary-active min-w-[32px] min-h-[32px]"
          ariaLabel="Дополнительные ссылки"
        >
          <Icon name="GridIcon" aria-hidden="true" />
        </HeaderSecondaryMenuButton>
      </div>
    );
  },
);
