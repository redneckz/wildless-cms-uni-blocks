import { JSX } from '@redneckz/uni-jsx';
import { useComparisonTableScroll } from '../../hooks/useComparisonTableScroll';
import type { UniBlockProps } from '../../types';
import { ArrowButton } from '../../ui-kit/Button/ArrowButton';
import { Title } from '../../ui-kit/Title/Title';
import { COLS_LENGTH_FOR_SCROLL } from './constants';
import type { TariffsTableContent } from './TariffsTableContent';
import { TariffsTableRow } from './TariffsTableRow';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({ className, context, title, rowHeaders, columns }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders?.map((header, i) => ({
      header,
      data: colData.map((col) => col?.[i] || [{}]),
    }));

    const { nextClick, prevClick, isScrollAvailable, showNextButton, showPrevButton } =
      useComparisonTableScroll({
        colData,
        colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
        activeCardIndex,
        setActiveCardIndex,
      });

    return (
      <section
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${
          className || ''
        }`}
      >
        <Title className="font-medium m-0 max-w-[47rem] text-center mb-9 mx-auto">{title}</Title>
        <div role="table">
          {rowData?.length ? (
            <div className="relative">
              {rowData.map((row, i, { length }) => (
                <TariffsTableRow
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
        </div>
      </section>
    );
  },
);
