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
  'ShieldTickIcon',
  'SignDocsIcon',
  'TelegramIcon',
  'VKIcon',
  'GlassIcon',
  'VisaIcon',
  'MirIcon',
  'UnionPayIcon',
  'JCBIcon',
  'MasterCardIcon',
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
