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
  'DocIcon',
  'PlusIcon',
  'MinusIcon',
  'DiscountShape',
  'DocumentText',
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
