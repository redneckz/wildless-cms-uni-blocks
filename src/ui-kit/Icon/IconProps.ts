/**
 * Icons sorted by name
 */
export enum IconMap {
  'ActualBalanceIcon',
  'AppleIcon',
  'CalendarIcon',
  'ClockIcon',
  'ComfortableCompIcon',
  'DocIcon',
  'DollarIcon',
  'EmptyWalletIcon',
  'EuroIcon',
  'GlassIcon',
  'GridIcon',
  'LoupeIcon',
  'MinusIcon',
  'NewDocIcon',
  'OkIcon',
  'PassSendIcon',
  'PercentageSquareIcon',
  'PlayMarketIcon',
  'PlusIcon',
  'ProfileIcon',
  'SignDocsIcon',
  'TelegramIcon',
  'VKIcon',
  'DiscountShape',
  'DocumentText',
}

/**
 * @title Иконка
 * @enumNames [
 *    "Деньги",
 *    "Лого «Apple»",
 *    "Календарь",
 *    "Часы",
 *    "Кресло",
 *    "Документ",
 *    "Доллар",
 *    "Кошелек",
 *    "Евро",
 *    "Зеркало",
 *    "Сетка",
 *    "Лупа",
 *    "Минус",
 *    "Новый документ",
 *    "Лого «Одноклассники»",
 *    "Бизнес",
 *    "Проценты",
 *    "Лого «PlayMarket»",
 *    "Плюс",
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
  asSVG?: boolean;
}
