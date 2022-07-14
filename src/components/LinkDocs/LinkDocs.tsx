import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { LinkDocsContent } from './LinkDocsContent';
import type { LinkColumnsMode, LinkDocsTitleAlignment } from './LinkDocsContent';
import { Title } from '../../ui-kit/Title/Title';
import { Icon } from '../../ui-kit/Icon/Icon';

const titleAlignStyleMap: Record<LinkDocsTitleAlignment, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const titleMarginsStyleMap: Record<LinkColumnsMode, string> = {
  double: 'mb-8',
  single: '',
};

const linkColumnsModeStyleMap: Record<LinkColumnsMode, string> = {
  double: 'gap-x-5 gap-y-[26px] flex-wrap',
  single: 'gap-3.5 flex-col',
};

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({ className, context, title, titleAlign, documents, icon, columnsMode = 'double' }) => {
    const containerClasses = linkColumnsModeStyleMap[columnsMode];

    return (
      <section className={`p-[50px] bg-white ${className}`}>
        {title && (
          <Title
            className={`mt-0 ${titleMarginsStyleMap[columnsMode]} ${
              titleAlignStyleMap[titleAlign ?? 'center']
            }`}
          >
            {title}
          </Title>
        )}
        <div className={`flex ${containerClasses}`} role="list">
          {documents?.length
            ? documents.map(({ text, fileSize, ...linkProps }) => (
                <a
                  className={`group flex items-center text-sm
              text-sm font-sans align-middle items-center text-primary-text no-underline group hover:text-primary-main
              ${columnsMode === 'double' ? 'basis-[calc(50%-20px)]' : ''}`}
                  role="listitem"
                  {...linkProps}
                >
                  {icon && <Icon className="mr-3.5" name={icon} width="24px" height="24px" />}
                  {text}
                  <span className="text-secondary-text group-hover:text-primary-main">
                    {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
                  </span>
                </a>
              ))
            : null}
        </div>
      </section>
    );
  },
);

const getExtFromHref = (href: string) => {
  if (!href) return '';

  const lastChunk = href.split('.').pop();
  if (!lastChunk || lastChunk.includes('/')) return '';

  return lastChunk;
};

const formatSuffix = (ext?: string, fileSize?: string) => {
  const prefix = ext || fileSize ? ',' : '';
  const extension = ext ? ` ${ext}` : '';
  const size = fileSize ? ` (${fileSize})` : '';
  return prefix + extension + size;
};
