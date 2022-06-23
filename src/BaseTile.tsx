import { JSX } from '@redneckz/uni-jsx';
import { Img } from './Img';
import type { BlockVersion, Picture, UniBlockProps, TitleSize } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonIconProps } from './ui-kit/ButtonIcon';
import { ButtonIcon } from './ui-kit/ButtonIcon';
import { useLink } from './useLink';

export interface BaseTileContent {
  title?: string;
  titleSize?: TitleSize;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: ButtonIconProps[];
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
        {title && renderTitle(title, titleSize || getTitleSizeByClassName(className))}
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

function renderTitle(title: string, titleSize: TitleSize) {
  switch (titleSize) {
    case 'XL':
      return <TitleXL>{title}</TitleXL>;
    case 'L':
      return <TitleL>{title}</TitleL>;
    case 'M':
      return <TitleM>{title}</TitleM>;
    case 'S':
      return <TitleS>{title}</TitleS>;
    default:
      return <TitleL>{title}</TitleL>;
  }
}

function getTitleSizeByClassName(className: string = '') {
  const colSpanPrefix = 'col-span-';
  const colSpanStr = className.split(/\s+/).find((_) => _.startsWith(colSpanPrefix));
  const colSpan = colSpanStr ? parseInt(colSpanStr.substring(colSpanPrefix.length), 10) : 12;
  if (colSpan <= 4) {
    return 'S';
  } else if (colSpan <= 8) {
    return 'M';
  } else {
    return 'L';
  }
}

const TitleXL = JSX<{ className?: string }>(({ children }) => (
  <h1 className={`${TITLE_CLASSES} text-title-lg`}>{children}</h1>
));
const TitleL = JSX<{ className?: string }>(({ children }) => (
  <h2 className={`${TITLE_CLASSES} text-title`}>{children}</h2>
));
const TitleM = JSX<{ className?: string }>(({ children }) => (
  <h2 className={`${TITLE_CLASSES} text-title-sm`}>{children}</h2>
));
const TitleS = JSX<{ className?: string }>(({ children }) => (
  <h2 className={`${TITLE_CLASSES} text-title-xs`}>{children}</h2>
));

function renderItems(items: string[] = [], version?: BlockVersion) {
  return (
    <section className="max-w-[600px]" role="list">
      {items.map((_, i) => (
        <BlockItem key={String(i)} className={i ? 'mt-2.5' : ''} text={_} version={version} />
      ))}
    </section>
  );
}

function renderButton(button: ButtonIconProps, i: number) {
  return button?.text ? <ButtonIcon key={String(i)} {...button} /> : null;
}
