import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img';
import { Title } from '../../ui-kit/Title/Title';
import { getColSpan } from '../../utils/getColSpan';
import type { BaseTileCommonProps, BaseTileIconButton } from './BaseTileProps';

export interface BaseTileProps extends BaseTileCommonProps, UniBlockProps {}

const TITLE_CLASSES = 'font-medium m-0 mb-4 whitespace-pre-wrap max-w-[600px]';

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
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <div className={`font-sans flex flex-col grow h-full`}>
        {title && (
          <Title size={titleSize || getTitleSizeByClassName(className)} className={TITLE_CLASSES}>
            {title}
          </Title>
        )}
        <div className="flex grow justify-between">
          <div className="flex flex-col justify-between items-start">
            <div>
              {description ? (
                <div className="font-normal text-base max-w-[600px] mb-5">{description}</div>
              ) : null}
              {children}
              {items?.length ? renderItems(items, version) : null}
            </div>
            {buttons?.length ? (
              <div className="flex mt-9 gap-3">
                {buttons.map((button, index) =>
                  renderButton(useLink({ router, handlerDecorator }, button), index),
                )}
              </div>
            ) : null}
          </div>
          {image?.src && <Img className="mt-auto ml-7" image={image} />}
        </div>
      </div>
    );
  },
);

function getTitleSizeByClassName(className: string = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 4) {
    return 'S';
  } else if (colSpan <= 8) {
    return 'M';
  } else {
    return 'L';
  }
}

function renderItems(items: string[] = [], version?: BlockVersion) {
  return (
    <section className="max-w-[600px]" role="list">
      {items.map((_, i) => (
        <BlockItem key={String(i)} className={i ? 'mt-2.5' : ''} text={_} version={version} />
      ))}
    </section>
  );
}

function renderButton({ icon, ...button }: BaseTileIconButton, i: number) {
  if (!button?.text) return;

  if (icon)
    return (
      <Button
        key={String(i)}
        appendLeft={<Icon name={icon} width="24" height="24" />}
        {...button}
      />
    );

  return <Button key={String(i)} {...button} />;
}
