import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Навигация
 */
export interface NavigationContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список ссылок */
  buttons?: ButtonProps[];
}
