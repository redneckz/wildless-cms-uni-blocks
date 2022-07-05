import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from './types';
import { ArrowButton } from './ui-kit/ArrowButton';
import { Icon } from './ui-kit/Icon';
import { Button } from './ui-kit/Button';
import { Img } from './ui-kit/Img';
import { Title } from './ui-kit/Title';
import type { CellData, Column, rowHeader } from './ComparisonTable';

export interface TariffsTableContent {
  title?: string;
  rowHeaders?: rowHeader[];
  columns?: Column[];
  visibleRowLength?: number;
  coloredFirstColumn?: boolean;
}

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

type Row = {
  header: rowHeader;
  data: CellData[][];
};
type RowData = Row[] | undefined;

const GRADIENT = 'bg-gradient-to-r from-main-gradient-start to-main-gradient-end';
const BORDER_CLASSES = '';
const DIVIDER_CLASSES = 'border-main-divider border border-t-0 border-x-0';
const FIRST_CELL_CLASSES = 'w-[354px] flex-shrink-0';
const COLS_LENGTH_FOR_SCROLL = 2;
const COLUMN_WIDTH = 4 * 80; // w-80 = 320px

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({
    className,
    context,
    title,
    rowHeaders,
    columns,
    visibleRowLength = 0,
    coloredFirstColumn = false,
  }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);
    const [isShowAllRow, setIsShowAllRow] = context.useState(!visibleRowLength);

    const colData = columns?.map(({ data }) => data) || [];
    const rowData: RowData = rowHeaders
      ?.map((header, i) => ({
        header,
        data: colData.map((col) => col?.[i] || [{}]),
      }))
      .slice(0, isShowAllRow ? rowHeaders.length : visibleRowLength);

    const nextClick = () => setActiveCardIndex(activeCardIndex + 1);
    const prevClick = () => setActiveCardIndex(activeCardIndex - 1);
    const showToggle = () => setIsShowAllRow(!isShowAllRow);

    const isScrollAvailable = colData?.length && colData.length > COLS_LENGTH_FOR_SCROLL;
    const showNextButton =
      isScrollAvailable && colData?.length - activeCardIndex > COLS_LENGTH_FOR_SCROLL;
    const showPrevButton = isScrollAvailable && activeCardIndex > 0;

    return (
      <section
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${
          className || ''
        }`}
      >
        <Title className="font-medium m-0 max-w-[47rem] text-center mb-9 mx-auto">{title}</Title>
        {rowData?.length ? (
          <div className="relative">
            {rowData.map((...mapProps) => renderRow(mapProps, activeCardIndex, coloredFirstColumn))}
            {isScrollAvailable ? (
              <div>
                <div className="absolute top-7 right-7 z-10">
                  <ArrowButton
                    onClick={nextClick}
                    disabled={!showNextButton}
                    ariaLabel="Пролистать вправо"
                  />
                  <ArrowButton
                    className="mt-4 rotate-180"
                    onClick={prevClick}
                    disabled={!showPrevButton}
                    ariaLabel="Пролистать влево"
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        {isScrollAvailable ? (
          <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
        ) : null}
        {visibleRowLength ? (
          <div className="pr-[50px]">
            <div className="flex w-full">
              <div className={FIRST_CELL_CLASSES} />
              <Button
                onClick={showToggle}
                className="mt-5 flex-1 border-main-stroke border-solid border text-primary-text bg-white hover:border-primary-main hover:text-primary-main"
              >
                <div className="text-xs py-[11px]">
                  {!isShowAllRow ? 'Показать все параметры' : 'Скрыть'}
                </div>
              </Button>
            </div>
          </div>
        ) : null}
      </section>
    );
  },
);

export const TableRow = JSX(({ children }) => (
  <div className="self-start flex flex-col">
    <div className="flex">{children}</div>
  </div>
));

export const TableCarouselContainer = JSX<{ activeCardIndex: number }>(
  ({ children, activeCardIndex }) => (
    <div className="flex flex-grow overflow-hidden ">
      <div
        className="flex flex-grow duration-1000"
        style={{ transform: `translateX(-${activeCardIndex * COLUMN_WIDTH}px)` }}
      >
        {children}
      </div>
    </div>
  ),
);

const renderRow = (
  [{ header, data }, i, { length }]: [Row, number, Row[]],
  activeCardIndex: number,
  coloredFirstColumn: boolean,
) => {
  const isLastRow = i + 1 === length;

  return (
    <TableRow key={String(i)}>
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
      <TableCarouselContainer activeCardIndex={activeCardIndex}>
        {data.map((cell, idx) => renderCell(cell, idx, isLastRow, i === 0, coloredFirstColumn))}
      </TableCarouselContainer>
    </TableRow>
  );
};

const renderCell = (
  cell: CellData[],
  i: number,
  isLastRow: boolean,
  isFirstRow: boolean,
  coloredFirstColumn: boolean,
) => {
  const fillGradient = coloredFirstColumn && i === 0;

  const cellWrapperClasses = `w-80 flex-grow box-border flex flex-col ${BORDER_CLASSES} ${
    !isLastRow ? 'border-y-0' : 'border-t-0 rounded-b-md'
  } ${fillGradient ? GRADIENT : ''}`;

  const cellClasses = `h-full ${DIVIDER_CLASSES} ${fillGradient && isFirstRow ? 'border-t' : ''} ${
    !isLastRow ? 'border-solid' : ''
  }`;

  return (
    <div key={String(i)} className={cellWrapperClasses}>
      <div className={cellClasses}>
        {cell.map((item, i) => renderCellInner(item, i, fillGradient))}
      </div>
    </div>
  );
};

const renderCellInner = (
  { label, description, icons, image, buttons }: CellData,
  i: number,
  fillGradient: boolean,
) => (
  <div key={String(i)} className="first:pt-5 last:pb-5">
    {i > 0 && (
      <div className="border-main-divider border border-solid border-t-0 border-x-0 my-4" />
    )}
    {label && (
      <h5 className={`text-xl font-medium m-0 ${fillGradient ? 'text-white' : ''}`}>{label}</h5>
    )}
    {description && (
      <div className={`text-sm opacity-80 ${fillGradient ? 'text-white' : 'text-secondary-text'}`}>
        {description}
      </div>
    )}
    {icons && (
      <div>
        {icons.map((icon, idx) => (
          <Icon key={String(idx)} name={icon} width="56px" height="56px" />
        ))}
      </div>
    )}
    {image && <Img image={image} />}
    {buttons &&
      buttons.map((button, idx) => (
        <Button className={`${idx > 0 ? 'ml-3' : ''}`} key={String(idx)} {...button} />
      ))}
  </div>
);
