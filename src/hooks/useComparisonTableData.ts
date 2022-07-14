export const useComparisonTableData = <COLUMN extends { header?: any; data?: any[][] }, ROW_HEADER>(
  isShowAllRow,
  columns?: COLUMN[],
  rowHeaders?: ROW_HEADER[],
  visibleRowLength = 0,
) => {
  const colHeaders = columns?.map(({ header }) => header || {});
  const colData = columns?.map(({ data }) => data) || [];
  const rowData = rowHeaders
    ?.map((header, i) => ({
      header,
      data: colData.map((col) => col?.[i] || [{}]),
    }))
    .slice(0, isShowAllRow ? rowHeaders.length : visibleRowLength);

  return { colHeaders, colData, rowData };
};
