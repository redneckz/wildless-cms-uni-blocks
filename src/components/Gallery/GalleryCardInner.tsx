import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Button } from '../../ui-kit/Button/Button';
import { Img } from '../../ui-kit/Img';
import { cardVersionMap } from './constants';
import type { GalleryCard } from './GalleryContent';

export const GalleryCardInner = JSX<GalleryCard>(
  ({ title, description, image, items, button, version }) => {
    const cardVersionClasses = cardVersionMap[version ?? 'primary'];

    return (
      <div>
        <div>
          {image?.src ? (
            <div className="flex justify-center">
              <Img className="mb-6" image={image} />
            </div>
          ) : null}
          {title && renderCardTitle(title, description, items)}
          {description && (
            <div className={`font-normal text-sm mt-2 ${cardVersionClasses}`}>{description}</div>
          )}
          {items?.length ? (
            <section className={`max-w-[308px] mt-2 ${cardVersionClasses}`} role="list">
              {items.map((item, i) => renderItem(item, i, version))}
            </section>
          ) : null}
        </div>
        {button?.href && <Button className="mt-6" {...button} />}
      </div>
    );
  },
);

function renderCardTitle(title: string, description?: string, items?: string[]) {
  return (
    <div
      className={`font-medium text-xl m-0 ${!description && !items?.length ? 'text-center' : ''}`}
    >
      {title}
    </div>
  );
}

function renderItem(item: string, i: number, version?: BlockVersion) {
  return (
    <BlockItem key={String(i)} version={version ?? 'primary'}>
      <span className="text-sm">{item}</span>
    </BlockItem>
  );
}
