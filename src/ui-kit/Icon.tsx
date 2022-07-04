import { JSX } from '@redneckz/uni-jsx';
import { projectSettings } from '../ProjectSettings';

export enum IconMap {
  'ActualBalanceIcon',
  'AppleIcon',
  'CalendarIcon',
  'ClockIcon',
  'ComfortableCompIcon',
  'DollarIcon',
  'EmptyWalletIcon',
  'EuroIcon',
  'GridIcon',
  'LoupeIcon',
  'NewDocIcon',
  'OkIcon',
  'PassSendIcon',
  'PercentageSquareIcon',
  'PlayMarketIcon',
  'ProfileIcon',
  'SignDocsIcon',
  'TelegramIcon',
  'VKIcon',
  'GlassIcon',
  'ArrowRight',
}

export type IconName = keyof typeof IconMap;

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
