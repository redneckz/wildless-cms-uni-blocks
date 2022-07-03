import { JSX } from '@redneckz/uni-jsx';
import { projectSettings } from '../ProjectSettings';

export type IconName =
  | 'ActualBalanceIcon'
  | 'AppleIcon'
  | 'CalendarCircleIcon'
  | 'CalendarIcon'
  | 'CardIcon'
  | 'CardPosIcon'
  | 'CardTickIcon'
  | 'ClockIcon'
  | 'ComfortableCompIcon'
  | 'DollarIcon'
  | 'EmptyWalletChangeIcon'
  | 'EmptyWalletIcon'
  | 'EuroIcon'
  | 'GridIcon'
  | 'LoupeIcon'
  | 'MoneyIcon'
  | 'MonitorMobileIcon'
  | 'NewDocIcon'
  | 'OkIcon'
  | 'PassSendIcon'
  | 'PercentageSquareIcon'
  | 'PlayMarketIcon'
  | 'Profile2UserIcon'
  | 'ProfileIcon'
  | 'ShieldTickIcon'
  | 'SignDocsIcon'
  | 'TelegramIcon'
  | 'UserIcon'
  | 'VKIcon'
  | 'WalletIcon'
  | 'ArrowLeftIcon';

export interface IconProps {
  className?: string;
  name: IconName;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  'aria-hidden'?: 'true';
}

export const Icon = JSX<IconProps>(
  ({ className, name, alt = `Icon ${name}`, title = alt, ...imgProps }) => (
    <img
      className={className}
      src={`${projectSettings.CDN || ''}icons/${name}.svg`}
      alt={alt}
      title={title}
      {...imgProps}
    />
  ),
);
