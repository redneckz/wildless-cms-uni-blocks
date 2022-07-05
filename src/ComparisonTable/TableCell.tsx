import { JSX } from '@redneckz/uni-jsx';
import type { CellData } from './ComparisonTableContent';
import { BORDER_CLASSES, DIVIDER_CLASSES, GRADIENT } from './constants';

export interface TableCellProps {
  cell: CellData[];
  isLastRow: boolean;
  isFirstRow: boolean;
  isFillGradient: boolean;
}

export const TableCell = JSX<TableCellProps>(({ cell, isFirstRow, isLastRow, isFillGradient }) => {
  const cellWrapperClasses = `w-80 box-border flex flex-col ${BORDER_CLASSES} ${
    !isLastRow ? 'border-y-0' : 'border-t-0 rounded-b-md'
  } ${isFillGradient ? GRADIENT : ''}`;

  const cellClasses = `mx-7 h-full ${DIVIDER_CLASSES} ${
    isFillGradient && isFirstRow ? 'border-t' : ''
  } ${!isLastRow ? 'border-solid' : ''}`;

  return (
    <div className={cellWrapperClasses} role="cell">
      <div className={cellClasses}>
        {cell.map((item, i) => renderCellInner(item, i, isFillGradient))}
      </div>
    </div>
  );
});

const renderCellInner = ({ label, description }: CellData, i: number, isFillGradient: boolean) => (
  <div key={String(i)} className="first:pt-7 pt-6 last:pb-7">
    {label && (
      <h5 className={`text-xl font-medium m-0 ${isFillGradient ? 'text-white' : ''}`}>{label}</h5>
    )}
    {description && (
      <div
        className={`text-sm opacity-80 ${isFillGradient ? 'text-white' : 'text-secondary-text'}`}
      >
        {description}
      </div>
    )}
  </div>
);
