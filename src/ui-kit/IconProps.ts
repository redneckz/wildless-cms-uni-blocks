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
  'GridIcon',
  'LoupeIcon',
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
  'UserIcon',
  'VKIcon',
  'WalletIcon',
  'ArrowLeftIcon',
  'GlassIcon',
  'ArrowRight',
  'JCBIcon',
  'MasterCardIcon',
  'MirIcon',
  'UnionPayIcon',
  'VisaIcon',
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
