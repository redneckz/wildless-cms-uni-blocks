import { JSX } from '@redneckz/uni-jsx';
import { Img } from './Img';
import { Picture, UniBlockProps } from './types';
import { Button } from './ui-kit/Button';
import { ArrowButton } from './ui-kit/ArrowButton';
import { Title } from './ui-kit/Title';

export interface GalleryCard {
  title: string;
  description?: string;
  image: Picture;
  href?: string;
  items?: string[];
}

export interface GalleryContent {
  title?: string;
  description?: string;
  cards?: GalleryCard[];
}

export interface GalleryProps extends GalleryContent, UniBlockProps {}

const cardWidth = 384;

export const Gallery = JSX<GalleryProps>(({ title, description, context, cards = [] }) => {
  const [activeCardIndex, setActiveCardIndex] = context.useState(0);
  const [showNextButton, setShowNextButton] = context.useState(cards?.length > 3);
  const [showPrevButton, setShowPrevButton] = context.useState(false);

  function handleNextClick() {
    const newCardIndex = activeCardIndex + 1;

    // We don't want to use native DOM things
    // That's why we need this calculation and state changes
    if (newCardIndex > 0) setShowPrevButton(true);
    if (cards?.length - newCardIndex <= 3) setShowNextButton(false);

    setActiveCardIndex(newCardIndex);
  }

  function handlePrevClick() {
    const newCardIndex = activeCardIndex - 1;

    // We don't want to use native DOM things
    // That's why we need this calculation and state changes
    if (newCardIndex === 0) setShowPrevButton(false);
    if (cards?.length + newCardIndex > 3) setShowNextButton(true);

    setActiveCardIndex(newCardIndex);
  }

  return (
    <section className="relative font-sans text-primary-text bg-white p-12 overflow-hidden w-100">
      <div className="flex flex-col items-center">
        <Title className="font-medium m-0 text-centers">{title}</Title>
        {description ? (
          <div className="font-normal text-base max-w-[600px] mt-3">{description}</div>
        ) : null}
      </div>
      <div className="mb-8"></div>
      <div
        // Need to place all cards at the center if count of cards less than 4
        className={`flex {${cards?.length < 4 && 'justify-center'} duration-1000`}
        // All cards has same width
        style={{ transform: `translateX(-${activeCardIndex * cardWidth}px)` }}
        role="list"
      >
        {cards?.map((card, i) => renderCard(card, i))}
      </div>
      {showPrevButton && (
        <ArrowButton className="absolute top-1/2 left-8" onClick={handlePrevClick} />
      )}
      {showNextButton && (
        <ArrowButton
          className="absolute top-1/2 right-1 z-20 rotate-180"
          onClick={handleNextClick}
        />
      )}
      <div
        className="absolute absolute top-0 right-0 bottom-0 w-[84px]"
        style={{
          background: 'linear-gradient(270deg, #FFFFFF 34.89%, rgba(255, 255, 255, 0) 92.52%)',
        }}
      ></div>
    </section>
  );
});

function renderCard(card: GalleryCard, key: number) {
  return (
    <div
      className="border-solid border rounded-md border-main-divider p-7 mx-2 flex flex-col justify-between items-stretch min-w-[308px] w-[308px] w-full"
      key={key}
    >
      <div>
        {card.image?.src && <Img className="flex justify-center mb-6" image={card.image} />}
        {card.title && (
          <h4
            className={`font-medium text-xl m-0 ${
              !card.description && !card.items?.length && 'text-center'
            }`}
          >
            {card.title}
          </h4>
        )}
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
        <div className={`inline-block flex ${i ? 'mt-1' : ''}`} role="listitem" key={i}>
          <div className="inline-block w-2 h-2 min-w-2 min-h-2 rounded-full mt-2 bg-primary-main"></div>
          <span className="text-sm text-secondary-text ml-3">{item}</span>
        </div>
      ))}
    </section>
  );
}
