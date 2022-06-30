import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from './types';
import { Title } from './ui-kit/Title';
import { Button, ButtonProps } from './ui-kit/Button';

export interface CellData {
  label?: string;
  description?: string;
}

export interface ColumnHeader {
  title: string;
  icon?: string;
  button?: ButtonProps;
}

export interface Column {
  header?: ColumnHeader;
  data?: CellData[][];
}

export interface ComparisonTableContent {
  title?: string;
  rowHeaders?: string[];
  columns?: Column[];
}

export interface ComparisonTableProps extends ComparisonTableContent, UniBlockProps {}

const GRADIENT = 'bg-gradient-to-r from-main-gradient-start to-main-gradient-end';
const MIN_COLUMNS_LENGTH = 3;

export const ComparisonTable = JSX<ComparisonTableProps>(
  ({ className, context, title, rowHeaders, columns }) => {
    const colHeaders = columns?.map(({ header }) => header);
    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders?.map((label, i) => [
      [{ label }],
      ...colData.map((col) => col?.[i] || []),
    ]);

    return (
      <section
        className={`bg-white font-sans flex flex-col items-center py-[50px] ${className || ''}`}
      >
        <Title className="font-medium m-0 max-w-[47rem] text-center mb-9">{title}</Title>
        {rowHeaders?.length ? (
          <table cellSpacing="0" cellPadding="0" className="border-spacing-x-4 h-1">
            <thead>
              <tr>
                <td className="w-[200px]" />
                {colHeaders?.map((header, i) => renderHeaderCell(header, i, true))}
              </tr>
            </thead>
            <tbody>{rowData?.map(renderRow)}</tbody>
          </table>
        ) : null}
      </section>
    );
  },
);

const renderHeaderCell = (header?: ColumnHeader, i?: number, setGradient = true) => (
  <td key={String(i)} className="w-80">
    <div
      className={`border-main-stroke border-b-0 border-solid rounded-t-md flex flex-col px-7 pt-7 pb-12 ${
        setGradient ? GRADIENT : ''
      }`}
    >
      <Title size="S" className="font-medium m-0 text-center text-white">
        {header?.title}
      </Title>
      {header?.button && renderButton(header.button)}
    </div>
  </td>
);

const renderRow = (row: CellData[][], i: number, { length }) => (
  <tr key={String(i)} className="h-full">
    {row.map((col, idx: number) => renderCell(col, idx, i + 1 === length))}
  </tr>
);

const renderCell = (cell: CellData[], i: number, isLastRow: boolean) => {
  const isFirstCell = i === 0;

  const cellClasses = !isFirstCell
    ? `h-full border-main-stroke border-y-0 border-solid ${
        isLastRow ? 'border-b rounded-b-md' : ''
      }`
    : '';

  const cellDivClasses = `h-full border-main-divider ${
    !isLastRow ? 'border-solid border-x-0 border-t-0' : ''
  } ${!isFirstCell ? 'mx-7' : ''}`;

  return (
    <td key={String(i)} className={cellClasses}>
      <div className={cellDivClasses}>
        {cell.map((item, i) => renderCellInner(item, i, isFirstCell))}
      </div>
    </td>
  );
};

const renderCellInner = (item: CellData, i: number, isFirstCell: boolean) => (
  <div key={String(i)} className="py-7">
    {item?.label && <h5 className="text-xl font-medium m-0">{item.label}</h5>}
    {item?.description && <div className="text-sm text-secondary-text">{item.description}</div>}
  </div>
);

const renderButton = (button: ButtonProps) => {
  const { href, text, target } = button;

  return (
    <Button href={href} target={target} version="secondary" className="mt-12">
      <div className="text-xs py-[11px]">{text}</div>
    </Button>
  );
};
