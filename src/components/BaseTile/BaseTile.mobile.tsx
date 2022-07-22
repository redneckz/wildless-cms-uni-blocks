import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Title } from '../../ui-kit/Title/Title';
import { BaseTileInner as MobileBaseTileInner } from './BaseTileInner.mobile';
import type { AlignType, BaseTileCommonProps } from './BaseTileProps';
import { getTitleSizeByClassName } from './getTitleSizeByClassName';

const alignBlock: Record<AlignType, string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};

export interface BaseTileProps extends BaseTileCommonProps, UniBlockProps {}

const TITLE_CLASSES = 'font-medium m-0 whitespace-pre-wrap max-w-[600px]';

export const BaseTile = JSX<BaseTileProps>(
  ({
    className,
    context,
    title,
    titleSize,
    description,
    children,
    buttons,
    image,
    items,
    version = 'primary',
    align = 'left',
  }) => {
    return (
      <div className={`font-sans flex flex-col grow h-full ${alignBlock[align]}`}>
        {title && (
          <Title
            size={titleSize || getTitleSizeByClassName(className)}
            className={`${TITLE_CLASSES} ${version === 'primary' ? 'text-primary-text' : ''}`}
          >
            {title}
          </Title>
        )}
        <MobileBaseTileInner
          context={context}
          buttons={buttons}
          image={image}
          children={children}
          description={description}
          items={items}
        />
      </div>
    );
  },
);
