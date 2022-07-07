import type { Column, RowHeader } from '../ComparisonTable/ComparisonTableContent';

export interface TariffsTableContent {
  title?: string;
  rowHeaders?: RowHeader[];
  columns?: Column[];
  visibleRowLength?: number;
}
