import type { CellData, RowHeader } from '../ComparisonTable/ComparisonTableContent';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { BlockItemVersion } from '../../ui-kit/BlockItem/BlockItemProps';

export type ITariffsTableRow = {
  header: TariffsTableRowHeader;
  data: TariffsTableCellData[][];
};

export type TariffsTableRowData = ITariffsTableRow[] | undefined;

export interface TariffsTableColumn {
  data?: TariffsTableCellData[][];
}

export interface TariffsTableList {
  version?: BlockItemVersion;
  isDotted?: boolean;
  items?: string[];
}

export interface TariffsTableCellData extends CellData {
  list?: TariffsTableList;
  image?: Picture;
  buttons?: ButtonWithIconProps[];
}

export interface TariffsTableRowHeader extends RowHeader {
  icon?: IconName;
}

export interface TariffsTableContent {
  title?: string;
  columns?: TariffsTableColumn[];
  rowHeaders?: TariffsTableRowHeader[];
  visibleRowLength?: number;
}
