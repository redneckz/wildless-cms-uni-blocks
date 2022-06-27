export const getColSpan = (className: string) => {
  const colSpanPrefix = 'col-span-';
  const colSpanStr = className.split(/\s+/).find((_) => _.startsWith(colSpanPrefix));
  return colSpanStr ? parseInt(colSpanStr.substring(colSpanPrefix.length), 10) : 12;
};
