export const isURL = (href?: string) => href?.includes('//');

export const withoutQuery = (href?: string) => (href || '').replace(/\/?\?.*/, '');
