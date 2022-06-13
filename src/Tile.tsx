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
        className={`font-sans p-9 flex justify-between items-stretch relative ${className || ''} ${
          tileStyleMap[version]
        }`}
      >
        <div className="flex flex-col w-full">
          {title && renderTitle(title, className)}
          <div className="flex justify-between h-full">
            <div className="flex flex-col">
              {(description || children) && (
                <div className="font-normal text-base max-w-[600px] mt-4">
                  {description || children}
                </div>
              )}
              {renderItems(items, version)}
              {button?.text && (
                <div className="mt-auto">
                  <Button
                    className="mt-8"
                    {...useLink({ router, handlerDecorator }, button)}
                    version="secondary"
                  />
                </div>
              )}
            </div>
            {image?.src && (
              <div className="mt-auto flex-none h-[220px] w-[220px]">
                <Img image={image} />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  },
);

function renderItems(items?: string[], version?: BlockVersion) {
  return items?.length ? (
    <section className="mt-5 max-w-[600px]" role="list">
      {items.map((_, i) => (
        <BlockItem key={String(i)} className="mt-2.5" text={_} version={version} />
      ))}
    </section>
  ) : null;
}

function renderTitle(title: string, className: string = '') {
  if (className.includes('col-span-4')) {
    return <h3 className={`${TITLE_CLASSES} text-title-xs`}>{title}</h3>;
  }

  if (className.includes('col-span-6') || className.includes('col-span-8')) {
    return <h3 className={`${TITLE_CLASSES} text-title-sm`}>{title}</h3>;
  }

  return <h2 className={`${TITLE_CLASSES} text-title`}>{title}</h2>;
}
