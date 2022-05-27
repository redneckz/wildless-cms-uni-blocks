import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { Img } from './Img';
import { BlockVersion, Picture } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { useLink } from './useLink';

export interface TileContent {
  title?: string;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: ButtonProps[];
}

export interface TileProps extends TileContent {
  className?: string;
  version?: BlockVersion;
  context: ContentPageContext;
}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-brand text-white',
}

export const Tile = JSX<TileProps>(({ className, context, title, description, buttons, image, items, version = 'primary' }) => {
  return (
    <section
      className={`font-sans p-9 rounded-[40px] flex justify-between items-stretch relative ${className || ''} ${tileStyleMap[version]}`}
    >
      <div className="flex flex-col">
        {title && (
          <h1 className="font-medium text-title m-0 whitespace-pre-wrap">{title}</h1>
        )}
        {description && (
          <div className="font-normal text-base max-w-[600px] mt-4">{description}</div>
        )}
        {items?.length ? (
          <section className="space-y-2.5 mt-5" role="list">
            {items.map((_, i) => (
              <BlockItem key={String(i)} text={_} version={version} />
            ))}
          </section>
        ) : null}
        {buttons?.length ? (
          <div className="flex mt-auto gap-4">
            {buttons.map((button, index) => renderButton(button, index, context))}
          </div>
        ) : null}
      </div>
      {image && <Img image={image} className="absolute bottom-9 right-9" />}
    </section>
  );
});


function renderButton(button: ButtonProps, i: number, context: ContentPageContext) {
  return button?.text ? (
    <Button
      key={String(i)}
      {...useLink(context, button)}
      className="mt-8"
      version={button.version}
    />
  ) : null;
}
