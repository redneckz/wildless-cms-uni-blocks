import type { CellData, RowHeader } from '../ComparisonTable/ComparisonTableContent';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { BlockItemVersion } from '../../ui-kit/BlockItem/BlockItemProps';

/** @hidden */
export type ITariffsTableRow = {
  header: TariffsTableRowHeader;
  data: TariffsTableCellData[][];
};

/** @title Колонка */
export interface TariffsTableColumn {
  /** @title Данные */
  data?: TariffsTableCellData[][];
}

/** @title Список */
export interface TariffsTableList {
  /** @title Версия списка */
  version?: BlockItemVersion;
  /** @Title Маркеры */
  isDotted?: boolean;
  /** @title Элементы списка */
  items?: string[];
}

/** @title Ячейка */
export interface TariffsTableCellData extends CellData {
  /** @title Список */
  list?: TariffsTableList;
  /** @title Изображение */
  image?: Picture;
  /**
   * @hidden
   * @title Кнопки
   */
  buttons?: (ButtonWithIconProps & { icon?: IconName })[];
}

/** @title Параметр */
export interface TariffsTableRowHeader extends RowHeader {
  /** Название иконки */
  icon?: IconName;
}

/** Таблица тарифов */
export interface TariffsTableContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание параметров */
  columns?: TariffsTableColumn[];
  /** @title Параметры */
  rowHeaders?: TariffsTableRowHeader[];
}
