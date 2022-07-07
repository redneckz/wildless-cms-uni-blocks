import { JSX } from '@redneckz/uni-jsx';
import type { Row } from '../ComparisonTable/ComparisonTableContent';
import { DIVIDER_CLASSES, FIRST_CELL_CLASSES } from './constants';
import { Icon } from '../../ui-kit/Icon/Icon';
import { TableCarouselContainer } from './TableCarouselContainer';
import { TableRowContainer } from './TableRowContainer';
import { TableCell } from './TableCell';

export interface TableRowProps {
  className?: string;
  row: Row;
  activeCardIndex: number;
  isLastRow: boolean;
}

export const TableRow = JSX<TableRowProps>(
  ({ row: { header, data }, activeCardIndex, isLastRow }) => {
    return (
      <TableRowContainer>
        <div
          className={`text-sm py-5 ${FIRST_CELL_CLASSES} ${DIVIDER_CLASSES} ${
            !isLastRow ? 'border-solid' : ''
          }`}
        >
          <div className="flex items-center text-primary-text">
            {header?.icon && (
              <Icon className="pr-[14px]" name={header.icon} width="24px" height="24px" />
            )}
            {header?.title}
          </div>
        </div>
        {data?.length ? (
          <TableCarouselContainer activeCardIndex={activeCardIndex}>
            {data.map((cell, i) => (
              <TableCell key={String(i)} cell={cell} isLastRow={isLastRow} />
            ))}
          </TableCarouselContainer>
        ) : null}
      </TableRowContainer>
    );
  },
);
