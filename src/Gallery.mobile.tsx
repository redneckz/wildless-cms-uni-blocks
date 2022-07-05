import { JSX } from '@redneckz/uni-jsx';
import type { GalleryProps } from './Gallery';
import type { GalleryCard } from './GalleryContent';
import { Img } from './ui-kit/Img';
import { BlockItem } from './ui-kit/BlockItem';
import { Button } from './ui-kit/Button';
import { Title } from './ui-kit/Title';

export const Gallery = JSX<GalleryProps>(({ title, description, cards = [], className }) => {
  return (
    <section
      className={`relative font-sans text-primary-text bg-white p-4 overflow-hidden ${className}`}
    >
      <div className="flex flex-col items-center mb-8">
        <Title className="font-medium m-0 text-centers">{title}</Title>
        {description ? (
          <div className="font-normal text-base max-w-[600px] mt-3">{description}</div>
        ) : null}
      </div>
      <div className="horizontal-list no-scrollbar" role="list">
        {cards?.map(renderCard)}
      </div>
    </section>
  );
});

function renderCard(card: GalleryCard, key: number) {
  return (
    <div
      className="box-border horizontal-list-item border-solid border rounded-md border-main-divider p-4 mx-1 flex flex-col justify-between items-stretch"
      role="listitem"
      key={key}
    >
      <div>
        {card.image?.src ? (
          <div className="flex justify-center">
            <Img className="mb-6" image={card.image} />
          </div>
        ) : null}
        {card.title ? (
          <h4
            className={`font-medium text-xl m-0 ${
              !card.description && !card.items?.length ? 'text-center' : ''
            }`}
          >
            {card.title}
          </h4>
        ) : null}
        {card.description ? (
          <div className="font-normal text-sm text-secondary-text mt-2">{card.description}</div>
        ) : null}
        {card.items?.length ? renderItems(card.items) : null}
      </div>
      {card.href ? (
        <Button className="mt-6" text="Подробнее" version="secondary" href={card.href} />
      ) : null}
    </div>
  );
}

function renderItems(items: string[] = []) {
  return (
    <section className="max-w-[308px] mt-2" role="list">
      {items.map((item, i) => (
        <BlockItem key={String(i)}>
          <span className="text-sm text-secondary-text">{item}</span>
        </BlockItem>
      ))}
    </section>
  );
}
