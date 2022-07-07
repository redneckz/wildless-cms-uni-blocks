import { JSX } from '@redneckz/uni-jsx';
import { CellData } from '../ComparisonTable/ComparisonTableContent';
import { DIVIDER_CLASSES } from './constants';
import { Icon } from '../../ui-kit/Icon/Icon';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Img } from '../../ui-kit/Img';
import { Button } from '../../ui-kit/Button/Button';

export interface TableCellProps {
  cell: CellData[];
  isLastRow: boolean;
  isFirstRow: boolean;
}

export const TableCell = JSX<TableCellProps>(({ cell, isFirstRow, isLastRow }) => {
  const cellWrapperClasses = `first:pl-0 pl-10 w-80 flex-grow flex flex-col border-solid border-main-divider border border-t-0 border-x-0 ${
    isLastRow ? 'border-t-0 rounded-b-md' : ''
  }`;

  const cellClasses = `h-full ${DIVIDER_CLASSES}`;

  return (
    <div className={cellWrapperClasses}>
      <div className={cellClasses}>{cell.map((item, i) => renderCellInner(item, i))}</div>
    </div>
  );
});

const renderCellInner = (
  { label, description, items, icons, image, buttons }: CellData,
  i: number,
) => (
  <div key={String(i)} className="first:pt-5 last:pb-5">
    {i > 0 && (
      <div className="border-main-divider border border-solid border-t-0 border-x-0 my-4" />
    )}
    {label && <h5 className="text-xl font-medium m-0">{label}</h5>}
    {description && <div className="text-sm text-secondary-text">{description}</div>}
    {icons && (
      <div>
        {icons.map((icon, idx) => (
          <Icon key={String(idx)} name={icon} width="56px" height="56px" />
        ))}
      </div>
    )}
    {items && (
      <div className="flex flex-col justify-between items-start">
        <div>
          {items?.map(({ text, version }, idx) => (
            <BlockItem key={String(idx)} text={text} version={version} />
          ))}
        </div>
      </div>
    )}
    {image && <Img image={image} />}
    {buttons &&
      buttons.map((button, idx) => (
        <Button className={`${idx > 0 ? 'ml-3' : ''}`} key={String(idx)} {...button} />
      ))}
  </div>
);
