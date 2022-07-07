import { JSX } from '@redneckz/uni-jsx';
import type { Row } from './ComparisonTableContent';
import { DIVIDER_CLASSES, FIRST_CELL_CLASSES } from './constants';
import { TableCarouselContainer } from './TableCarouselContainer';
import { TableCell } from './TableCell';
import { TableRowContainer } from './TableRowContainer';

export interface TableRowProps {
  className?: string;
  row: Row;
  activeCardIndex: number;
  isColoredFirstColumn: boolean;
  isFirstRow: boolean;
  isLastRow: boolean;
}

export const TableRow = JSX<TableRowProps>(
  ({ row: { header, data }, activeCardIndex, isColoredFirstColumn, isFirstRow, isLastRow }) => (
    <TableRowContainer>
      {header?.title ? (
        <div
          className={`text-sm py-7 ${DIVIDER_CLASSES} ${FIRST_CELL_CLASSES} ${
            !isLastRow ? 'border-solid' : ''
          }`}
        >
          {header.title}
        </div>
      ) : null}
      {data?.length ? (
        <TableCarouselContainer activeCardIndex={activeCardIndex}>
          {data.map((cell, i) => (
            <TableCell
              key={String(i)}
              cell={cell}
              isFirstRow={isFirstRow}
              isLastRow={isLastRow}
              isFillGradient={isColoredFirstColumn && i === 0}
            />
          ))}
        </TableCarouselContainer>
      ) : null}
    </TableRowContainer>
  ),
);
