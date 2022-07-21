import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import { HeaderSecondaryMenuButton } from './HeaderSecondaryMenuButton';

interface HeaderSecondaryMenuContent {
  defaultLocation?: string;
  bgColorScheme?: string;
  className?: string;
}

export interface HeaderSecondaryMenuProps extends HeaderSecondaryMenuContent, UniBlockProps {}

const COLORS_SCHEME = {
  white: 'text-primary-text hover:text-primary-main',
  transparent: 'text-white',
};
const DOP_LINKS_COLORS_SCHEME = {
  white: 'fill-secondary-light hover:fill-secondary-hover',
  transparent: 'fill-white',
};
const DOP_LINKS_ICON_NAME = {
  white: 'GridIcon',
  transparent: 'GridIconWhite',
};

export const HeaderSecondaryMenu = JSX<HeaderSecondaryMenuProps>(
  ({ context, className, defaultLocation = '', bgColorScheme = 'white' }) => {
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
          bgColor={bgColorScheme}
        />
        <TopItem
          className="mr-7"
          flat={true}
          href="#"
          text="Офисы и банкоматы"
          ariaLabel="Список всех доступных офисов и банкоматов"
          bgColor={bgColorScheme}
        />
        <HeaderSecondaryMenuButton
          className={`mr-5 ${COLORS_SCHEME[bgColorScheme]}`}
          ariaLabel="Поиск по сайту"
        >
          <Icon name="LoupeIcon" aria-hidden="true" className="h-full" asSVG />
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className={`mr-5 ${COLORS_SCHEME[bgColorScheme]}`}
          ariaLabel="Профиль"
        >
          <Icon name="ProfileIcon" aria-hidden="true" className="h-full" asSVG />
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className={`${DOP_LINKS_COLORS_SCHEME[bgColorScheme]} min-w-[32px] min-h-[32px]`}
          ariaLabel="Дополнительные ссылки"
        >
          <Icon
            name={DOP_LINKS_ICON_NAME[bgColorScheme]}
            aria-hidden="true"
            className="h-full"
            asSVG
          />
        </HeaderSecondaryMenuButton>
      </div>
    );
  },
);
