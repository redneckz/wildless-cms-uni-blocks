import { JSX } from '@redneckz/uni-jsx';
import { GalleryCard, GalleryContent } from './GalleryContent';
import type { GalleryVersion } from './model/GalleryVersion';
import type { UniBlockProps } from './types';
import { ArrowButton } from './ui-kit/ArrowButton';
import { BlockItem } from './ui-kit/BlockItem';
import { Button } from './ui-kit/Button';
import { Img } from './ui-kit/Img';
import { Title } from './ui-kit/Title';

export interface GalleryInnerProps extends GalleryContent, UniBlockProps {
  version?: GalleryVersion;
}

const cardStyleMap: Record<GalleryVersion, string> = {
  normal: 'min-w-[364px] w-[364px]',
  mini: 'min-w-[260px] w-[260px]',
};

const cardWidthMap: Record<GalleryVersion, number> = {
  normal: 380,
  mini: 276,
};

const galleryLengthForScrollMap: Record<GalleryVersion, number> = {
  normal: 3,
  mini: 4,
};

export const GalleryInner = JSX<GalleryInnerProps>(
  ({ title, description, context, cards = [], className, version = 'normal' }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    function handleNextClick() {
      setActiveCardIndex(activeCardIndex + 1);
    }

    function handlePrevClick() {
      setActiveCardIndex(activeCardIndex - 1);
    }

    const isGalleryScrollAvailable = cards?.length > galleryLengthForScrollMap[version];

    const showNextButton =
      isGalleryScrollAvailable &&
      cards?.length - activeCardIndex > galleryLengthForScrollMap[version];

    const showPrevButton = isGalleryScrollAvailable && activeCardIndex > 0;

    return (
      <section
        className={`relative font-sans text-primary-text bg-white p-12 overflow-hidden ${className}`}
      >
        <div className="flex flex-col items-center mb-8">
          {title ? <Title className="font-medium m-0 text-center">{title}</Title> : null}
          {description ? (
            <div className="font-normal text-base max-w-[600px] mt-3">{description}</div>
          ) : null}
        </div>
        <div
          // Need to place all cards at the center if count of cards less than 4
          className={`flex ${
            cards?.length <= galleryLengthForScrollMap[version] ? 'justify-center' : ''
          } duration-1000`}
          // All cards has same width
          style={{ transform: `translateX(-${activeCardIndex * cardWidthMap[version]}px)` }}
          role="list"
        >
          {cards?.map((card, i) => renderCard(card, i, version))}
        </div>
        {showPrevButton && (
          <ArrowButton
            className="absolute top-1/2 left-8 rotate-180"
            onClick={handlePrevClick}
            ariaLabel="Пролистать влево"
          />
        )}
        {showNextButton && (
          <ArrowButton
            className="absolute top-1/2 right-1 z-10"
            onClick={handleNextClick}
            ariaLabel="Пролистать вправо"
          />
        )}
        <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white"></div>
      </section>
    );
  },
);

function renderCard(card: GalleryCard, i: number, version: GalleryVersion) {
  return (
    <div
      className={`box-border border-solid border rounded-md border-main-divider p-7 mx-2 flex flex-col justify-between items-stretch ${cardStyleMap[version]} w-full`}
      role="listitem"
      key={String(i)}
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
        {card.items?.length ? (
          <section className="max-w-[308px] mt-2" role="list">
            {card.items.map(renderItem)}
          </section>
        ) : null}
      </div>
      {card.href ? (
        <Button className="mt-6" text="Подробнее" version="secondary" href={card.href} />
      ) : null}
    </div>
  );
}

function renderItem(item: string, i: number) {
  return (
    <BlockItem key={String(i)}>
      <span className="text-sm text-secondary-text">{item}</span>
    </BlockItem>
  );
}
