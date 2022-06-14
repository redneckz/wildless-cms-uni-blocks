import { JSX } from '@redneckz/uni-jsx';
import { Img } from './Img';
import type { BlockVersion, Picture, UniBlockProps } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { useLink } from './useLink';

export interface TileContent {
  title?: string;
  description?: string;
  image?: Picture;
  items?: string[];
  button?: ButtonProps;
  version?: BlockVersion;
}

export interface TileProps extends TileContent, UniBlockProps {}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

const TITLE_CLASSES = 'font-medium m-0 whitespace-pre-wrap max-w-[600px]';

export const Tile = JSX<TileProps>(
  ({
    className,
    context,
    title,
    description,
    children,
    button,
    image,
    items,
    version = 'primary',
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <section
        className={`flex flex-col font-sans p-9 ${className || ''} ${tileStyleMap[version]}`}
      >
        {title && renderTitle(title, className)}
        <div className="grow flex justify-between mt-6">
          <div className="flex flex-col justify-between items-start">
            {description || children ? (
              <div className="font-normal text-base max-w-[600px]">{description || children}</div>
            ) : (
              renderItems(items, version)
            )}
            {button?.text && (
              <Button
                className="mt-6"
                {...useLink({ router, handlerDecorator }, button)}
                version="secondary"
              />
            )}
          </div>
          {image?.src && <Img className="mt-auto h-[220px] w-[220px]" image={image} />}
        </div>
      </section>
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

function renderItems(items?: string[], version?: BlockVersion) {
  return items?.length ? (
    <section className="max-w-[600px]" role="list">
      {items.map((_, i) => (
        <BlockItem key={String(i)} className={i ? 'mt-2.5' : ''} text={_} version={version} />
      ))}
    </section>
  ) : null;
}
