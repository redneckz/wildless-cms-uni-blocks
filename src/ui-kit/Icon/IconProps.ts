export enum IconMap {
  'ActualBalanceIcon',
  'AppleIcon',
  'CalendarCircleIcon',
  'CalendarIcon',
  'CardIcon',
  'CardPosIcon',
  'CardTickIcon',
  'ClockIcon',
  'ComfortableCompIcon',
  'DollarIcon',
  'EmptyWalletChangeIcon',
  'EmptyWalletIcon',
  'EuroIcon',
  'GlassIcon',
  'GridIcon',
  'JCBIcon',
  'LoupeIcon',
  'MasterCardIcon',
  'MirIcon',
  'MoneyIcon',
  'MonitorMobileIcon',
  'NewDocIcon',
  'OkIcon',
  'PassSendIcon',
  'PercentageSquareIcon',
  'PlayMarketIcon',
  'ProfileIcon',
  'Profile2UserIcon',
  'ShieldTickIcon',
  'SignDocsIcon',
  'TelegramIcon',
  'UnionPayIcon',
  'VisaIcon',
  'VKIcon',
  'WalletIcon',
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
