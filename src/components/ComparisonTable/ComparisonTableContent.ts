import type { LinkContent } from '../../model/LinkContent';
import type { Picture } from '../../model/Picture';
import type { IconName } from '../../ui-kit/Icon/IconProps';

export type Row = {
  header: RowHeader;
  data: CellData[][];
};

export type RowData = Row[] | undefined;

export interface CellData {
  label?: string;
  description?: string;
}

export interface ColumnHeader {
  title?: string;
  icon?: IconName;
  image?: Picture;
  link?: LinkContent;
}

export interface Column {
  header?: ColumnHeader;
  data?: CellData[][];
}

export interface RowHeader {
  title?: string;
}

export interface ComparisonTableContent {
  title?: string;
  rowHeaders?: RowHeader[];
  columns?: Column[];
  visibleRowLength?: number;
  isColoredFirstColumn?: boolean;
}
