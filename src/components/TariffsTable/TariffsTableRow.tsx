import { JSX } from '@redneckz/uni-jsx';
import { COLUMN_WIDTH, DIVIDER_CLASSES, FIRST_CELL_CLASSES } from './constants';
import { Icon } from '../../ui-kit/Icon/Icon';
import { TariffsTableCell } from './TariffsTableCell';
import { TableRowContainer } from '../ComparisonTable/TableRowContainer';
import { TableCarouselContainer } from '../ComparisonTable/TableCarouselContainer';
import type { TariffsTableRowData } from './TariffsTableContent';

export interface TariffsTableRowProps {
  className?: string;
  row: TariffsTableRowData;
  activeCardIndex: number;
  isLastRow: boolean;
}

export const TariffsTableRow = JSX<TariffsTableRowProps>(
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
              <Icon
                className="mr-[14px] max-w-6 max-h-6"
                name={header.icon}
                width="24px"
                height="24px"
              />
            )}
            {header?.title}
          </div>
        </div>
        {data?.length ? (
          <TableCarouselContainer
            activeCardIndex={activeCardIndex}
            columnWidth={COLUMN_WIDTH}
            version="tariff"
          >
            {data.map((cell, i) => (
              <TariffsTableCell key={String(i)} cell={cell} isLastRow={isLastRow} />
            ))}
          </TableCarouselContainer>
        ) : null}
      </TableRowContainer>
    );
  },
);
