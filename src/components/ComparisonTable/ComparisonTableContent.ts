import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';

/**
 * @hidden
 */
export type Row = {
  header: RowHeader;
  data: CellData[][];
};

/**
 * @hidden
 */
export type RowData = Row[] | undefined;

/**
 * @title Ячейка
 */
export interface CellData {
  /** @title Заголовок */
  label?: string;
  /** @title Описание */
  description?: string;
  /**
   *  @title Иконки
   *  @hidden
   */
  icons?: IconName[];
  /** @hidden */
  image?: Picture;
  /**
   * @title Кнопки
   * @hidden
   */
  buttons?: ButtonProps[];
}

/**
 * @title Шапка колонки
 */
export interface ColumnHeader {
  /** @title Заголовок */
  title?: string;
  /** @hidden */
  icon?: IconName;
  /** @hidden */
  image?: Picture;
  /** @hidden */
  link?: LinkProps;
}

/**
 * @title Продукт
 */
export interface Column {
  header?: ColumnHeader;
  /** @title Данные */
  data?: CellData[][];
}

/**
 * @title Параметр
 */
export interface RowHeader {
  /** @title Заголовок */
  title?: string;
  icon?: IconName;
}
/**
 * @title Сравнительная таблица
 * @examples [{
 *   "title": "Заголовок",
 *   "rowHeaders": [
 *     {
 *       "title": "Параметр 1"
 *     },
 *     {
 *       "title": "Параметр 2"
 *     },
 *     {
 *       "title": "Параметр 3"
 *     }
 *   ],
 *   "columns": [
 *     {
 *       "header": {
 *         "title": "Продукт 1",
 *         "image": {
 *           "format": "webp",
 *           "size": {
 *             "width": 100,
 *             "height": 63
 *           }
 *         }
 *       },
 *       "data": [
 *         [
 *           {
 *             "label": "Ячейка 1"
 *           }
 *         ],
 *         [
 *           {
 *             "label": "Ячейка 2-1",
 *             "description": "Описание для ячейки 2-1"
 *           },
 *           {
 *             "label": "Ячейка 2-2",
 *             "description": "Описание для ячейки 2-2"
 *           }
 *         ],
 *         [
 *           {
 *             "label": "Ячейка 3"
 *           }
 *         ]
 *       ]
 *     },
 *     {
 *       "header": {
 *         "title": "Продукт 2",
 *         "image": {
 *           "format": "webp",
 *           "size": {
 *             "width": 100,
 *             "height": 63
 *           }
 *         }
 *       },
 *       "data": [
 *         [
 *           {
 *             "label": "Ячейка 1"
 *           }
 *         ],
 *         [
 *           {
 *             "label": "Ячейка 2-1",
 *             "description": "Описание для ячейки 2-1"
 *           },
 *           {
 *             "label": "Ячейка 2-2",
 *             "description": "Описание для ячейки 2-2"
 *           }
 *         ],
 *         [
 *           {
 *             "label": "Ячейка 3"
 *           }
 *         ]
 *       ]
 *     }
 *   ]
 * }]
 */
export interface ComparisonTableContent {
  /** @title Заголовок */
  title?: string;
  /** @title Параметры */
  rowHeaders?: RowHeader[];
  /** @title Продукты */
  columns?: Column[];
  /** @title Отображать заданное количество строк */
  visibleRowLength?: number;
  /** @title Закрасить первую колонку */
  isColoredFirstColumn?: boolean;
}
