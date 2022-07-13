import { LinkColumnsMode, LinkDocsTitleAlignment } from './LinkDocsContent';

export const titleAlignClassesMap: Record<LinkDocsTitleAlignment, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const titleColumnsModeClassesMap: Record<LinkColumnsMode, string> = {
  double: 'mb-8',
  single: '',
};

export const LinkColumnsModeClassesMap: Record<LinkColumnsMode, string> = {
  double: 'gap-x-5 gap-y-[26px] flex-wrap',
  single: 'gap-3.5 flex-col',
};
