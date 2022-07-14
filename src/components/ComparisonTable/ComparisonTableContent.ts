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
