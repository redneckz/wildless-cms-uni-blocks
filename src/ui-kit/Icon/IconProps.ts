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
  'Profile2UserIcon',
  'ProfileIcon',
  'ShieldTickIcon',
  'SignDocsIcon',
  'TelegramIcon',
  'UnionPayIcon',
  'UserIcon',
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
