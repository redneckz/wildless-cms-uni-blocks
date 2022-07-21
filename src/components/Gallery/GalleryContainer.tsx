import { JSX } from '@redneckz/uni-jsx';
import type { GalleryVersion } from '../../model/GalleryVersion';
import { Title } from '../../ui-kit/Title/Title';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { Tile } from '../Tile/Tile';
import { cardStyleMap, cardWidthMap, galleryLengthForScrollMap } from './constants';
import { GalleryCardInner } from './GalleryCardInner';
import type { GalleryCard } from './GalleryContent';
import type { GalleryInnerProps } from './GalleryInner';

export interface GalleryContainerProps extends Omit<GalleryInnerProps, 'className'> {
  activeCardIndex: number;
}

export interface GalleryCardData {
  card: GalleryCard;
  version: GalleryVersion;
  context: ContentPageContext;
}

export const GalleryContainer = JSX<GalleryContainerProps>(
  ({ context, title, description, cards = [], version = 'normal', activeCardIndex }) => {
    return (
      <div>
        <div className="absolute top-0 left-0 bottom-0 w-[84px] bg-gradient-to-r from-white to-transparent" />
        <div className="flex flex-col items-center mb-8">
          {title ? <Title className="font-medium m-0 text-center">{title}</Title> : null}
          {description ? (
            <div className="font-normal text-base max-w-[600px] mt-2.5">{description}</div>
          ) : null}
        </div>
        <div
          className={`flex ${
            cards?.length <= galleryLengthForScrollMap[version] ? 'justify-center' : ''
          } duration-1000`}
          style={{ transform: `translateX(-${activeCardIndex * cardWidthMap[version]}px)` }}
          role="list"
        >
          {cards?.map((card, i) => renderCard({ card, version, context }, i))}
        </div>
      </div>
    );
  },
);

function renderCard({ card, version, context }: GalleryCardData, i: number) {
  return (
    <Tile
      context={context}
      className={`box-border border-solid border rounded-md border-main-divider p-7 mx-2 flex flex-col justify-between
        items-stretch ${cardStyleMap[version]} w-full col-span-4`}
      version={card.version}
      key={String(i)}
    >
      <GalleryCardInner {...card} />
    </Tile>
  );
}
