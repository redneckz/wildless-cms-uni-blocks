import type { IconName } from '../../ui-kit/Icon/IconProps';

/**
 * @title Шаг
 */
export interface Step {
  /** @title Название */
  label: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
}

/**
 * @title Блок шаги
 * @examples [{
 *  "title": "Шаги",
 *  "steps": [
 *    {
 *      "label": "Шаг №1",
 *      "icon": "NewDocIcon"
 *    },
 *    {
 *      "label": "Шаг №2",
 *      "icon": "PassSendIcon"
 *    },
 *    {
 *      "label": "Шаг №3",
 *      "icon": "ActualBalanceIcon"
 *    }
 *  ]
 *}]
 */
export interface StepsBlockContent {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Шаги
   * @maxItems 6
   */
  steps?: Step[];
}
