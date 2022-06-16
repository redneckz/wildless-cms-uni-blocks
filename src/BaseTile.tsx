import { JSX } from '@redneckz/uni-jsx';
import { Img } from './Img';
import type { BlockVersion, Picture, UniBlockProps } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { useLink } from './useLink';

export interface BaseTileContent {
  title?: string;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: ButtonProps[];
  version?: BlockVersion;
}

export interface BaseTileProps extends BaseTileContent, UniBlockProps {}
const TITLE_CLASSES = 'font-medium m-0 mb-4 whitespace-pre-wrap max-w-[600px]';

export const BaseTile = JSX<BaseTileProps>(
  ({
    className,
    context,
    title,
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
      <div className={`font-sans flex flex-col grow h-full ${className || ''} `}>
        {title && renderTitle(title, className)}
        <div className="flex grow justify-between mt-4">
          <div className="flex flex-col justify-between items-start">
            {description ? (
              <div className="font-normal text-base max-w-[600px]">{description}</div>
            ) : (
              renderItems(items, version)
            )}
            {children}
            {buttons?.length ? (
              <div className="flex mt-6 gap-4">
                {buttons.map((button, index) =>
                  renderButton(useLink({ router, handlerDecorator }, button), index),
                )}
              </div>
            ) : null}
          </div>
          {image?.src && <Img className="mt-auto" image={image} />}
        </div>
      </div>
    );
  },
);

function renderTitle(title: string, className: string = '') {
  const colSpanPrefix = 'col-span-';
  const colSpanStr = className.split(/\s+/).find((_) => _.startsWith(colSpanPrefix));
  const colSpan = colSpanStr ? parseInt(colSpanStr.substring(colSpanPrefix.length), 10) : 12;
  if (colSpan <= 4) {
    return <h3 className={`${TITLE_CLASSES} text-title-xs`}>{title}</h3>;
  } else if (colSpan <= 8) {
    return <h3 className={`${TITLE_CLASSES} text-title-sm`}>{title}</h3>;
  } else {
    return <h2 className={`${TITLE_CLASSES} text-title`}>{title}</h2>;
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

function renderButton(button: ButtonProps, i: number) {
  return button?.text ? <Button key={String(i)} {...button} version={button.version} /> : null;
}
