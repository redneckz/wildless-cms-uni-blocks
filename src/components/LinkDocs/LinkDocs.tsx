import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Title } from '../../ui-kit/Title/Title';
import { AlignType } from '../BaseTile/BaseTileProps';
import type { LinkColumnsMode, LinkDocsContent } from './LinkDocsContent';

const titleAlignStyleMap: Record<AlignType, string> = {
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
  ({ className, title, align, documents, icon, columnsMode = 'double' }) => {
    const containerClasses = linkColumnsModeStyleMap[columnsMode];

    return (
      <section className={`font-sans p-[50px] bg-white ${className}`}>
        {title && (
          <Title
            className={`font-medium mt-0 ${titleMarginsStyleMap[columnsMode]} ${
              titleAlignStyleMap[align ?? 'center']
            }`}
          >
            {title}
          </Title>
        )}
        <div className={`flex ${containerClasses}`} role="list">
          {documents?.length
            ? documents.map(({ text, fileSize, ...linkProps }) => (
                <a
                  className={`group flex text-sm font-sans align-middle h-fit
                   text-primary-text no-underline hover:text-primary-main
                   ${columnsMode === 'double' ? 'basis-[calc(50%-20px)]' : ''}`}
                  role="listitem"
                  {...linkProps}
                >
                  {icon && <Icon className="mr-3.5" name={icon} width="24px" height="24px" />}
                  <span className="self-center">
                    {text}
                    <span className="text-secondary-text group-hover:text-primary-main">
                      {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
                    </span>
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
