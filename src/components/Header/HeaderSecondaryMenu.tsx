import { JSX } from '@redneckz/uni-jsx';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import { HeaderSecondaryMenuButton } from './HeaderSecondaryMenuButton';

interface HeaderSecondaryMenuContent {
  defaultLocation?: string;
  bgColor?: BgColorVersion;
}

export interface HeaderSecondaryMenuProps extends HeaderSecondaryMenuContent, UniBlockProps {}

const COLORS_MAP: Record<BgColorVersion, string> = {
  'bg-white': 'text-primary-text hover:text-primary-main',
  transparent: 'text-white',
};
const DOP_LINKS_COLORS_MAP: Record<BgColorVersion, string> = {
  'bg-white': 'text-secondary-light hover:text-secondary-hover',
  transparent: 'text-white',
};
const DOP_LINKS_ICON_NAME_MAP: Record<BgColorVersion, IconName> = {
  'bg-white': 'GridIcon',
  transparent: 'GridIconWhite',
};

export const HeaderSecondaryMenu = JSX<HeaderSecondaryMenuProps>(
  ({ context, className, defaultLocation = '', bgColor = 'bg-white' }) => {
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
          bgColor={bgColor}
        />
        <TopItem
          className="mr-7"
          flat={true}
          href="#"
          text="Офисы и банкоматы"
          ariaLabel="Список всех доступных офисов и банкоматов"
          bgColor={bgColor}
        />
        <HeaderSecondaryMenuButton
          className={`mr-5 ${COLORS_MAP[bgColor]}`}
          ariaLabel="Поиск по сайту"
        >
          <Icon name="LoupeIcon" className="h-full" asSVG />
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton className={`mr-5 ${COLORS_MAP[bgColor]}`} ariaLabel="Профиль">
          <Icon name="ProfileIcon" className="h-full" asSVG />
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className={`${DOP_LINKS_COLORS_MAP[bgColor]} min-w-[32px] min-h-[32px]`}
          ariaLabel="Дополнительные ссылки"
        >
          <Icon name={DOP_LINKS_ICON_NAME_MAP[bgColor]} className="h-full" asSVG />
        </HeaderSecondaryMenuButton>
      </div>
    );
  },
);
