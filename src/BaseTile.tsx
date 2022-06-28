import { JSX } from '@redneckz/uni-jsx';
import { Img } from './Img';
import type { BlockVersion, Picture, UniBlockProps, TitleSize } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { IconButtonProps } from './ui-kit/IconButton';
import { IconButton } from './ui-kit/IconButton';
import { Title } from './ui-kit/Title';
import { useLink } from './useLink';
import { getColSpan } from './utils/getColSpan';

export interface BaseTileContent {
  title?: string;
  titleSize?: TitleSize;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: IconButtonProps[];
  version?: BlockVersion;
}

export interface BaseTileProps extends BaseTileContent, UniBlockProps {}
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

function renderButton(button: IconButtonProps, i: number) {
  return button?.text ? <IconButton key={String(i)} {...button} /> : null;
}
