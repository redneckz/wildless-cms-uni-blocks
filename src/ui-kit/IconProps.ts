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
