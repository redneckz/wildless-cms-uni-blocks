import type { CellData, RowHeader } from '../ComparisonTable/ComparisonTableContent';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { Picture } from '../../model/Picture';
import type { BlockItemVersion } from '../../ui-kit/BlockItem/BlockItemProps';
import type { BaseTileIconButton } from '../BaseTile/BaseTileProps';

/**
 * @title Ряд
 */
export type TariffsTableRowData = {
  header: TariffsTableRowHeader;
  data: TariffsTableCellData[][];
};

/**
 * @title Колонка
 */
export interface TariffsTableColumn {
  /** @title Данные */
  data?: TariffsTableCellData[][];
}

/**
 * @title Список
 */
export interface TariffsTableList {
  version?: BlockItemVersion;
  /** @title Маркеры */
  isDotted?: boolean;
  /** @title Элементы списка */
  items?: string[];
}

/**
 * @title Ячейка
 */
export interface TariffsTableCellData extends CellData {
  list?: TariffsTableList;
  image?: Picture;
  /** @title Кнопки */
  buttons?: BaseTileIconButton[];
}

/**
 * @title Параметр
 */
export interface TariffsTableRowHeader extends RowHeader {
  icon?: IconName;
}

/**
 * @title Таблица тарифов
 */
export interface TariffsTableContent {
  /** @title Заголовок */
  title?: string;
  /** @title Колонки */
  columns?: TariffsTableColumn[];
  /** @title Параметры */
  rowHeaders?: TariffsTableRowHeader[];
}
