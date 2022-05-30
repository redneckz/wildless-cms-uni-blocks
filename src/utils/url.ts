export const isURL = (href?: string) => href?.includes('//');

export const withoutQuery = (href?: string) => (href || '').replace(/\/?\?.*/, '');

export const getOrigin = (href?: string) => {
  if (isURL(href)) {
    const url = href!;
    const protoSeparator = '://';
    const endOfProto = url.indexOf(protoSeparator);
    const endOfOrigin = url.indexOf('/', endOfProto + protoSeparator.length);
    return endOfOrigin !== -1 ? url.substring(0, endOfOrigin) : url;
  }
  return undefined;
};

export const toRelativeHref = (href?: string, baseURL?: string) => {
  if (!href) {
    return href;
  }
  const origin = getOrigin(baseURL);
  return origin ? href.replace(origin, '') || '/' : href;
};
