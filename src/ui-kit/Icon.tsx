import { JSX } from '@redneckz/uni-jsx';
import { projectSettings } from '../ProjectSettings';

export type IconName =
  | 'ActualBalanceIcon'
  | 'AppleIcon'
  | 'CalendarIcon'
  | 'ClockIcon'
  | 'ComfortableCompIcon'
  | 'DollarIcon'
  | 'EmptyWalletIcon'
  | 'EuroIcon'
  | 'GridIcon'
  | 'LoupeIcon'
  | 'NewDocIcon'
  | 'OkIcon'
  | 'PassSendIcon'
  | 'PercentageSquareIcon'
  | 'PlayMarketIcon'
  | 'ProfileIcon'
  | 'SignDocsIcon'
  | 'TelegramIcon'
  | 'VKIcon'
  | 'ArrowLeftIcon'
  | 'DocIcon'
  | 'PlusIcon'
  | 'MinusIcon';

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
