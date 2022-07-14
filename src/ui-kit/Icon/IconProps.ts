/**
 * Icons sorted by name
 */
export enum IconMap {
  'ActualBalanceIcon',
  'AppleIcon',
  'CalendarIcon',
  'ClockIcon',
  'ComfortableCompIcon',
  'DiscountShape',
  'DocIcon',
  'DocumentText',
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
}

/**
 * @title Иконка
 * @enumNames [
 *    "Деньги",
 *    "Лого «Apple»",
 *    "Календарь",
 *    "Часы",
 *    "Кресло",
 *    "Скидка",
 *    "Документ",
 *    "Документ с текстом"
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
