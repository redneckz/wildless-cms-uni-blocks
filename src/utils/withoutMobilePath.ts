export const MOBILE_URL_PATH = '/mobile';

export const withoutMobilePath = (href?: string) => (href || '').replace(MOBILE_URL_PATH, '');
