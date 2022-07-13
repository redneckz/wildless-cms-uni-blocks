import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { LinkDocsContent } from './LinkDocsContent';
import { Title } from '../../ui-kit/Title/Title';
import { Icon } from '../../ui-kit/Icon/Icon';
import {
  LinkColumnsModeClassesMap,
  titleAlignClassesMap,
  titleColumnsModeClassesMap,
} from './constants';

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({
    className,
    context,
    title,
    titleAlign,
    documents,
    icon = 'DocIcon',
    showIcons = true,
    showExt = true,
    linkColumns = 'double',
  }) => {
    const containerClasses = LinkColumnsModeClassesMap[linkColumns];

    return (
      <section className={`p-[50px] bg-white ${className}`}>
        {title && (
          <Title
            className={`mt-0 ${titleColumnsModeClassesMap[linkColumns]} ${
              titleAlignClassesMap[titleAlign ?? 'center']
            }`}
          >
            {title}
          </Title>
        )}
        <div className={`flex ${containerClasses}`} role="list">
          {documents?.length &&
            documents.map(({ text, fileSize, ...linkProps }) => (
              <a
                className={`group flex items-center text-sm
              text-sm font-sans align-middle items-center text-primary-text no-underline group hover:text-primary-main
              ${linkColumns === 'double' ? 'basis-[calc(50%-20px)]' : ''}`}
                role="listitem"
                {...linkProps}
              >
                {showIcons && icon && (
                  <Icon className="mr-3.5" name={icon} width="24px" height="24px" />
                )}
                {text}
                <span className="text-secondary-text group-hover:text-primary-main">
                  {showExt &&
                    linkProps?.href &&
                    formatSuffix(getExtFromHref(linkProps.href), fileSize)}
                </span>
              </a>
            ))}
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
