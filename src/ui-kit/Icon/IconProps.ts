/**
 * Icons sorted by name
 */
export enum IconMap {
  'ActualBalanceIcon',
  'AppleIcon',
  'CalendarIcon',
  'ClockIcon',
  'ComfortableCompIcon',
  'DollarIcon',
  'EmptyWalletIcon',
  'EuroIcon',
  'GlassIcon',
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
}

/**
 * @title Иконка
 * @enumNames [
 *    "Деньги",
 *    "Лого «Apple»",
 *    "Календарь",
 *    "Часы",
 *    "Кресло",
 *    "Доллар",
 *    "Кошелек",
 *    "Евро",
 *    "Зеркало",
 *    "Сетка",
 *    "Лупа",
 *    "Новый документ",
 *    "Лого «Одноклассники»",
 *    "Бизнес",
 *    "Проценты",
 *    "Лого «PlayMarket»",
 *    "Профиль",
 *    "Подписанные документы",
 *    "Лого «Telegram»",
 *    "Лого «VK»"
 *  ]
 */
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
