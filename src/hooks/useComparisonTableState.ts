import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';

export const useComparisonTableState = (
  context: ContentPageContext,
  activeCardInit: number,
  visibleRowLengthInit: number,
) => {
  const [activeCardIndex, setActiveCardIndex] = context.useState<number>(activeCardInit);
  const [isShowAllRow, setIsShowAllRow] = context.useState<boolean>(!visibleRowLengthInit);

  return {
    activeCardIndex,
    setActiveCardIndex,
    isShowAllRow,
    setIsShowAllRow,
  };
};
