import { JSX } from '@redneckz/uni-jsx';
import { useComparisonTableScroll } from '../../hooks/useComparisonTableScroll';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../types';
import { ArrowButton } from '../../ui-kit/Button/ArrowButton';
import { Title } from '../../ui-kit/Title/Title';
import type { ComparisonTableContent } from './ComparisonTableContent';
import { COLS_LENGTH_FOR_SCROLL, COLUMN_WIDTH, FIRST_CELL_CLASSES } from './constants';
import { HeaderCell } from './HeaderCell';
import { TableCarouselContainer } from './TableCarouselContainer';
import { TableRow } from './TableRow';
import { TableRowContainer } from './TableRowContainer';

export interface ComparisonTableProps extends ComparisonTableContent, UniBlockProps {}

export const ComparisonTable = JSX<ComparisonTableProps>(
  ({
    className,
    context,
    title,
    rowHeaders,
    columns,
    visibleRowLength = 0,
    isColoredFirstColumn = false,
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    const [activeCardIndex, setActiveCardIndex] = context.useState(0);
    const [isShowAllRow, setIsShowAllRow] = context.useState(!visibleRowLength);

    const colHeaders = columns?.map(({ header }) => header || {});
    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders
      ?.map((header, i) => ({
        header,
        data: colData.map((col) => col?.[i] || [{}]),
      }))
      .slice(0, isShowAllRow ? rowHeaders.length : visibleRowLength);

    const { nextClick, prevClick, isScrollAvailable, showNextButton, showPrevButton } =
      useComparisonTableScroll({
        colData,
        colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
        activeCardIndex,
        setActiveCardIndex,
      });

    const showToggle = () => setIsShowAllRow(!isShowAllRow);

    return (
      <section
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${
          className || ''
        }`}
      >
        <Title className="font-medium m-0 max-w-[47rem] text-center mb-9 mx-auto">{title}</Title>
        <div role="table">
          {colHeaders?.length ? (
            <TableRowContainer>
              <div className={FIRST_CELL_CLASSES} role="columnheader" scope="col" />
              <TableCarouselContainer activeCardIndex={activeCardIndex} columnWidth={COLUMN_WIDTH}>
                {colHeaders.map((header, i) => (
                  <HeaderCell
                    key={String(i)}
                    {...header}
                    link={header.link && useLink({ router, handlerDecorator }, header.link)}
                  />
                ))}
              </TableCarouselContainer>
            </TableRowContainer>
          ) : null}

          {rowData?.length ? (
            <div className="relative">
              {rowData.map((row, i, { length }) => (
                <TableRow
                  key={String(i)}
                  row={row}
                  isFirstRow={i === 0}
                  isLastRow={i + 1 === length}
                  activeCardIndex={activeCardIndex}
                  isColoredFirstColumn={isColoredFirstColumn}
                />
              ))}
              {isScrollAvailable ? (
                <div>
                  <div className="absolute top-7 right-7 z-10">
                    <ArrowButton
                      onClick={nextClick}
                      disabled={!showNextButton}
                      ariaLabel="???????????????????? ????????????"
                    />
                    <ArrowButton
                      className="mt-4 rotate-180"
                      onClick={prevClick}
                      disabled={!showPrevButton}
                      ariaLabel="???????????????????? ??????????"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {isScrollAvailable ? (
          <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
        ) : null}

        {visibleRowLength ? (
          <div className="pr-[50px]">
            <div className="flex w-full">
              <div className={FIRST_CELL_CLASSES} />
              <button
                onClick={showToggle}
                className="mt-5 flex-1 border-main-stroke border-solid border text-primary-text bg-white hover:border-primary-main hover:text-primary-main"
              >
                <div className="font-sans font-medium text-xs py-[11px]">
                  {!isShowAllRow ? '???????????????? ?????? ??????????????????' : '????????????'}
                </div>
              </button>
            </div>
          </div>
        ) : null}
      </section>
    );
  },
);
