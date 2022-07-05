import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from './types';
import { ArrowButton } from './ui-kit/ArrowButton';
import { Button } from './ui-kit/Button';
import { Title } from './ui-kit/Title';
import { Icon } from './ui-kit/Icon';
import { Img } from './ui-kit/Img';
import { useLink } from './useLink';
import { Picture } from './model/Picture';
import type { LinkContent } from './model/LinkContent';
import type { ButtonProps } from './ui-kit/ButtonProps';
import type { IconName } from './ui-kit/IconProps';

export interface CellData {
  label?: string;
  description?: string;
  icons?: IconName[];
  image?: Picture;
  buttons?: ButtonProps[];
}

export interface ColumnHeader {
  title?: string;
  icon?: IconName;
  image?: Picture;
  link?: LinkContent;
}
export interface Column {
  header?: ColumnHeader;
  data?: CellData[][];
}

export interface rowHeader {
  title?: string;
  icon?: IconName;
}

export interface ComparisonTableContent {
  title?: string;
  rowHeaders?: rowHeader[];
  columns?: Column[];
  visibleRowLength?: number;
  coloredFirstColumn?: boolean;
}

export interface ComparisonTableProps extends ComparisonTableContent, UniBlockProps {}

type Row = {
  header: rowHeader;
  data: CellData[][];
};
type RowData = Row[] | undefined;

const GRADIENT = 'bg-gradient-to-r from-main-gradient-start to-main-gradient-end';
const BORDER_CLASSES = 'border-main-stroke border-solid border';
const DIVIDER_CLASSES = 'border-main-divider border border-t-0 border-x-0';
const FIRST_CELL_CLASSES = 'w-[200px] mr-6';
const COLS_LENGTH_FOR_SCROLL = 2;
const COLUMN_WIDTH = 4 * 80 + 4 * 4; // w-80 + gap-4 = 336px

export const ComparisonTable = JSX<ComparisonTableProps>(
  ({
    className,
    context,
    title,
    rowHeaders,
    columns,
    visibleRowLength = 0,
    coloredFirstColumn = false,
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);
    const [isShowAllRow, setIsShowAllRow] = context.useState(!visibleRowLength);

    const colHeaders = columns?.map(({ header }) => header || {});
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

        {colHeaders?.length ? (
          <TableRow>
            <div className={FIRST_CELL_CLASSES} />
            <TableCarouselContainer activeCardIndex={activeCardIndex}>
              {colHeaders.map((header, i) =>
                renderHeaderCell(
                  {
                    ...header,
                    link: header.link && useLink({ router, handlerDecorator }, header.link),
                  },
                  i,
                ),
              )}
            </TableCarouselContainer>
          </TableRow>
        ) : null}

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
    <div className="flex flex-1 overflow-hidden">
      <div
        className="flex gap-4 duration-1000"
        style={{ transform: `translateX(-${activeCardIndex * COLUMN_WIDTH}px)` }}
      >
        {children}
      </div>
    </div>
  ),
);

const renderHeaderCell = ({ icon, image, title, link }: ColumnHeader, i: number) => (
  <div
    key={String(i)}
    className={`${BORDER_CLASSES} w-80 box-border flex flex-col items-center rounded-t-md border-b-0 px-7 pt-7 pb-12 ${GRADIENT}`}
  >
    {icon && !image?.src && (
      <Icon
        className="h-[63px] w-[63px] min-w-[63px] min-h-[63px] mb-4"
        name={icon}
        width="63"
        height="63"
      />
    )}
    {image?.src && <Img className="mb-4" image={image} />}
    {title && (
      <Title size="S" className="font-medium m-0 text-center text-white">
        {title}
      </Title>
    )}
    {link?.text && (
      <div className="mt-auto w-full">
        <Button
          href={link.href}
          target={link.target}
          className="mt-4 w-full text-primary-main bg-white hover:bg-secondary-hover active:bg-secondary-active"
        >
          <div className="text-xs py-[11px]">{link.text}</div>
        </Button>
      </div>
    )}
  </div>
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
        className={`text-sm py-7 ${FIRST_CELL_CLASSES} ${DIVIDER_CLASSES} ${
          !isLastRow ? 'border-solid' : ''
        }`}
      >
        {header?.title}
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

  const cellWrapperClasses = `w-80 box-border flex flex-col ${BORDER_CLASSES} ${
    !isLastRow ? 'border-y-0' : 'border-t-0 rounded-b-md'
  } ${fillGradient ? GRADIENT : ''}`;

  const cellClasses = `mx-7 h-full ${DIVIDER_CLASSES} ${
    fillGradient && isFirstRow ? 'border-t' : ''
  } ${!isLastRow ? 'border-solid' : ''}`;

  return (
    <div key={String(i)} className={cellWrapperClasses}>
      <div className={cellClasses}>
        {cell.map((item, i) => renderCellInner(item, i, fillGradient))}
      </div>
    </div>
  );
};

const renderCellInner = ({ label, description }: CellData, i: number, fillGradient: boolean) => (
  <div key={String(i)} className="first:pt-7 pt-6 last:pb-7">
    {label && (
      <h5 className={`text-xl font-medium m-0 ${fillGradient ? 'text-white' : ''}`}>{label}</h5>
    )}
    {description && (
      <div className={`text-sm opacity-80 ${fillGradient ? 'text-white' : 'text-secondary-text'}`}>
        {description}
      </div>
    )}
  </div>
);
