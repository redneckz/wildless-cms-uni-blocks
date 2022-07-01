import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from './types';
import { Button, ButtonProps } from './ui-kit/Button';
import { Title } from './ui-kit/Title';
import { ArrowButton } from './ui-kit/ArrowButton';

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
const COLS_LENGTH_FOR_SCROLL = 2;
const COLUMN_WIDTH = 320;

export const ComparisonTable = JSX<ComparisonTableProps>(
  ({ className, context, title, rowHeaders, columns }) => {
    const colHeaders = columns?.map(({ header }) => header);
    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders?.map((title, i) => ({
      title,
      data: colData.map((col) => col?.[i] || []),
    }));

    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    function nextClick() {
      setActiveCardIndex(activeCardIndex + 1);
    }

    function prevClick() {
      setActiveCardIndex(activeCardIndex - 1);
    }

    const isGalleryScrollAvailable = colData?.length > COLS_LENGTH_FOR_SCROLL;

    const showNextButton =
      isGalleryScrollAvailable && colData?.length - activeCardIndex > COLS_LENGTH_FOR_SCROLL;

    const showPrevButton = isGalleryScrollAvailable && activeCardIndex > 0;

    return (
      <section
        className={`bg-white relative font-sans flex flex-col items-center py-[50px] ${
          className || ''
        }`}
      >
        <Title className="font-medium m-0 max-w-[47rem] text-center mb-9">{title}</Title>
        <div>
          <div className="flex">
            <div className="w-[200px] mr-6" />
            <div className="overflow-hidden">
              <div
                className="flex gap-4 duration-1000"
                style={{ transform: `translateX(-${activeCardIndex * COLUMN_WIDTH}px)` }}
              >
                {colHeaders?.map((header, i) => renderHeaderCell(header, i, true))}
              </div>
            </div>
          </div>

          {rowData?.map((row, i, arr) => renderRow(row, i, arr, activeCardIndex))}
        </div>

        <div className="absolute top-1/2 right-1">
          <ArrowButton className="z-10" onClick={prevClick} disabled={!showPrevButton} />
          <ArrowButton
            className="z-10 mt-4 rotate-180"
            onClick={nextClick}
            disabled={!showNextButton}
          />
        </div>
      </section>
    );
  },
);

const renderRow = ({ title, data }, i: number, { length }, activeCardIndex: number) => {
  const isLastRow = i + 1 === length;

  return (
    <div key={String(i)} className="flex">
      <div
        className={`w-[200px] mr-6 border-main-divider border-t-0 border-x-0 py-7 ${
          !isLastRow ? 'border-solid' : ''
        }`}
      >
        {title}
      </div>
      <div className="flex-1 overflow-hidden">
        <div
          className="flex flex-1 gap-4 duration-1000"
          style={{ transform: `translateX(-${activeCardIndex * COLUMN_WIDTH}px)` }}
        >
          {data?.map((cell, idx) => renderCell(cell, idx, isLastRow))}
        </div>
      </div>
    </div>
  );
};

const renderCell = (cell: CellData[], i: number, isLastRow: boolean) => {
  const isFirstCell = i === 0;

  const cellWrapperClasses = `flex flex-1 border-main-stroke border-solid ${
    !isLastRow ? 'border-y-0' : 'border-t-0 rounded-b-md'
  }`;

  const cellClasses = `border-main-divider border-t-0 border-x-0 w-full mx-7 ${
    !isLastRow ? 'border-solid' : ''
  }`;

  return (
    <div key={String(i)} className={cellWrapperClasses}>
      <div className={cellClasses}>
        {cell?.map((item, i) => renderCellInner(item, i, isFirstCell))}
      </div>
    </div>
  );
};

const renderHeaderCell = (header?: ColumnHeader, i?: number, setGradient?: boolean) => {
  return (
    <div
      key={String(i)}
      className={`w-80 box-border flex flex-col rounded-t-md border-main-stroke border-solid border-b-0 px-7 pt-7 pb-12 ${
        setGradient ? GRADIENT : ''
      }`}
    >
      <Title size="S" className="font-medium m-0 text-center text-white">
        {header?.title}
      </Title>
      {header?.button && renderButton(header.button)}
    </div>
  );
};

const renderCellInner = ({ label, description }: CellData, i: number, isFirstCell: boolean) => (
  <div key={String(i)} className="first:pt-7 pt-6 last:pb-7">
    {label && isFirstCell ? (
      <div className="text-sm text-primary-text">{label}</div>
    ) : (
      <h5 className="text-xl font-medium m-0">{label}</h5>
    )}
    {description && <div className="text-sm text-secondary-text">{description}</div>}
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
