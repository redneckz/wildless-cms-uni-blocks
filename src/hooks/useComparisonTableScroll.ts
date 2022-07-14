export const useComparisonTableScroll = (
  colData: any[],
  colsLengthForScroll,
  activeCardIndex,
  setActiveCardIndex,
) => {
  const nextClick = () => setActiveCardIndex(activeCardIndex + 1);
  const prevClick = () => setActiveCardIndex(activeCardIndex - 1);

  const isScrollAvailable = colData?.length && colData.length > colsLengthForScroll;
  const showNextButton =
    isScrollAvailable && colData?.length - activeCardIndex > colsLengthForScroll;
  const showPrevButton = isScrollAvailable && activeCardIndex > 0;

  return { nextClick, prevClick, isScrollAvailable, showNextButton, showPrevButton };
};
