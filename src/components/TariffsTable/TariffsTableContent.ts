import { Column, RowHeader } from '../ComparisonTable/ComparisonTableContent';
import { UniBlockProps } from '../../types';

export interface TariffsTableContent {
  title?: string;
  rowHeaders?: RowHeader[];
  columns?: Column[];
  visibleRowLength?: number;
}

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}
