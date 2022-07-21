/**
 * Icons sorted by name
 */
export enum IconMap {
  '',
  'ActualBalanceIcon',
  'AppleIcon',
  'CalendarCircleIcon',
  'CalendarIcon',
  'CalendarWhiteIcon',
  'CardIcon',
  'CardPosIcon',
  'CardTickIcon',
  'ClockIcon',
  'ComfortableCompIcon',
  'DiscountShape',
  'DocIcon',
  'DocumentText',
  'DollarIcon',
  'EmptyWalletChangeIcon',
  'EmptyWalletIcon',
  'EmptyWalletWhiteIcon',
  'EuroIcon',
  'GlassIcon',
  'GridIcon',
  'JCBIcon',
  'LoupeIcon',
  'MasterCardIcon',
  'MinusIcon',
  'MirIcon',
  'MoneyIcon',
  'MonitorMobileIcon',
  'NewDocIcon',
  'OkIcon',
  'PassSendIcon',
  'PercentageSquareIcon',
  'PercentageSquareWhiteIcon',
  'PlayMarketIcon',
  'PlusIcon',
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

/**
 * @title Иконка
 * @enumNames [
 *    "",
 *    "Деньги",
 *    "Лого «Apple»",
 *    "Скруглённый календарь",
 *    "Календарь",
 *    "Календарь белый",
 *    "Кред. карта",
 *    "Кред. карта под наклоном",
 *    "Кред. карта с галочкой",
 *    "Часы",
 *    "Кресло",
 *    "Скидка",
 *    "Документ",
 *    "Документ с текстом",
 *    "Доллар",
 *    "Пустой кошелёк с возвратом",
 *    "Пустой кошелёк",
 *    "Пустой кошелёк белый",
 *    "Евро",
 *    "Зеркало",
 *    "Сетка",
 *    "JCB",
 *    "Лупа",
 *    "MasterCard",
 *    "Минус",
 *    "МИР",
 *    "Деньги",
 *    "Монитор и мобильный",
 *    "Новый документ",
 *    "Лого «Одноклассники»",
 *    "Бизнес",
 *    "Проценты",
 *    "Проценты белые",
 *    "Лого «PlayMarket»",
 *    "Плюс",
 *    "Профиль, 2 персоны",
 *    "Профиль",
 *    "Безопасность",
 *    "Подписанные документы",
 *    "Лого «Telegram»",
 *    "UnionPay",
 *    "Пользователь",
 *    "Visa",
 *    "Лого «VK»",
 *    "Кошелёк",
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
