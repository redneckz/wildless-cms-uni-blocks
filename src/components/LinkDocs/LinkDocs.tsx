import { JSX } from '@redneckz/uni-jsx';
import { UniBlockProps } from '../../types';
import { Title } from '../../ui-kit/Title/Title';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Button } from '../../ui-kit/Button/Button';
import { LinkDocsContent } from './LinkDocsContent';
import { TITLE_CLASSES_MAP } from './constants';

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({ className, context, title, documents, columns = 'double' }) => {
    const containerClasses =
      columns === 'double' ? 'gap-x-5 gap-y-[26px] flex-wrap ' : 'gap-3.5 flex-col';

    return (
      <section className="">
        {title?.text && (
          <Title
            className={title?.align ? TITLE_CLASSES_MAP[title.align] : TITLE_CLASSES_MAP['center']}
          >
            {title.text}
          </Title>
        )}
        <div className={`flex ${containerClasses}`}>
          {documents?.length &&
            documents.map(
              ({
                text,
                icon = 'DocIcon',
                showIcon = true,
                ext,
                showExt = true,
                fileSize,
                ...linkProps
              }) => (
                <div
                  className={`group flex items-center text-sm flex hover:cursor-pointer
                              ${columns === 'double' ? 'basis-[calc(50%-20px)]' : ''}`}
                >
                  {showIcon && icon && (
                    <Icon className="mr-3.5" name={icon} width="24px" height="24px" />
                  )}
                  {text && (
                    <Button
                      className="text-primary-text group-hover:text-primary-main"
                      {...linkProps}
                    >
                      {text}
                      <span className="text-secondary-text group-hover:text-primary-main">
                        {(showExt && ext) || fileSize ? ',' : ''}
                        {`${showExt && ext ? ` ${ext}` : ''}`}
                        {fileSize ? ` (${fileSize})` : null}
                      </span>
                    </Button>
                  )}
                </div>
              ),
            )}
        </div>
      </section>
    );
  },
);
