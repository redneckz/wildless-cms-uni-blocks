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
 * @hidden  //! temporary hidden, because widget to edit not exist
 */
export interface CellData {
  /** @title Заголовок */
  label?: string;
  /** @title Описание */
  description?: string;
  /** @title Иконки */
  icons?: IconName[];
  image?: Picture;
  /** @title Кнопки */
  buttons?: ButtonProps[];
}

/**
 * @title Шапка колонки
 * @hidden  //! temporary hidden, because widget to edit not exist
 */
export interface ColumnHeader {
  /** @title Заголовок */
  title?: string;
  icon?: IconName;
  image?: Picture;
  link?: LinkProps;
}

/**
 * @title Продукт
 * @hidden  //! temporary hidden, because widget to edit not exist
 */
export interface Column {
  header?: ColumnHeader;
  /** @title Данные */
  data?: CellData[][];
}

/**
 * @title Параметр
 * @hidden  //! temporary hidden, because widget to edit not exist
 */
export interface RowHeader {
  /** @title Заголовок */
  title?: string;
  icon?: IconName;
}
/**
 * @title Сравнительная таблица
 * @hidden  //! temporary hidden, because widget to edit not exist
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
