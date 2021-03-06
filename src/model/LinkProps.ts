/**
 * @title Таргет (target)
 * @enumNames [
 *    "",
 *    "self (текущее окно или фрейм)",
 *    "blank (новое окно)",
 *    "parent (фрейм-родитель)",
 *    "top (текущее окно)"
 *  ]
 */
export type Target = '' | '_self' | '_blank' | '_parent' | '_top';

/**
 * @title Ссылка
 * @required ["text", "href"]
 */
export interface LinkProps {
  /** @title Текст */
  text?: string;
  /** @title URL (href) */
  href?: string;
  target?: Target;
}
