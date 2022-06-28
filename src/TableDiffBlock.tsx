import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from './types';

export interface TableDiffBlockContent {
  title?: string;
}

export interface TableDiffBlockProps extends TableDiffBlockContent, UniBlockProps {}

export const TableDiffBlock = JSX<TableDiffBlockProps>(({ className, context }) => {});
