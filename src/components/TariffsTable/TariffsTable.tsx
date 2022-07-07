import { JSX } from '@redneckz/uni-jsx';
import { ArrowButton } from '../../ui-kit/Button/ArrowButton';
import { Title } from '../../ui-kit/Title/Title';
import { Button } from '../../ui-kit/Button/Button';
import { COLS_LENGTH_FOR_SCROLL, FIRST_CELL_CLASSES } from './constants';
import { TableRow } from './TableRow';
import type { RowData } from '../ComparisonTable/ComparisonTableContent';
import type { UniBlockProps } from '../../types';
import type { TariffsTableContent } from './TariffsTableContent';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({ className, context, title, rowHeaders, columns, visibleRowLength = 0 }) => {
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
            {rowData.map((row, i, { length }) => (
              <TableRow
                key={String(i)}
                row={row}
                isLastRow={i + 1 === length}
                activeCardIndex={activeCardIndex}
              />
            ))}
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
