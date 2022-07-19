import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { ProductBlockInnerCommonProps } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import type { ProductGalleryContent } from './ProductGalleryContent';

export interface ProductGalleryProps extends ProductGalleryContent, UniBlockProps {}

export const ProductGallery = JSX<ProductGalleryProps>(
  ({ className, context, duration = 0, slides = [] }) => {
    const galleryNav = slides.map((s) => s.nav);
    const galleryBlocks = slides.map((s) => s.productBlock);
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

    return (
      <section className={`font-sans bg-white overflow-hidden w-100 ${className || ''}`}>
        <div
          className={`flex duration-1000`}
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {galleryBlocks.map((_, i) => renderProductBlock(_, i, context))}
        </div>

        <div className="flex">
          {galleryNav.map((slide, i) =>
            renderNavButton({
              slide,
              i,
              activeSlideIndex,
              onClick: () => setActiveSlideIndex(i),
              duration,
            }),
          )}
        </div>
      </section>
    );
  },
);

function renderProductBlock(block: ProductBlockInnerCommonProps, i: number, context) {
  return (
    <section key={String(i)} className="flex grow-0 shrink-0 basis-full" role="listitem">
      <div className="p-10 flex grow">
        <ProductBlockInner
          className="pl-2.5 pt-2.5 pb-1.5 pr-[6.25rem]"
          context={context}
          {...block}
        />
      </div>
    </section>
  );
}

function renderNavButton({ slide, i, activeSlideIndex, onClick, duration }) {
  const isActiveBtn = i === activeSlideIndex;
  const progressBarClassName = isActiveBtn ? 'animate-slide' : '';
  const btnTitleClassName = isActiveBtn ? 'text-primary-text' : 'text-secondary-text';
  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      className={`font-sans group relative overflow-hidden border-0 bg-inherit cursor-pointer text-left px-0 pt-4 pb-5 grow basis-0`}
    >
      <div className="border-0 border-r border-solid border-main-divider px-6">
        <div
          className={`text-sm font-medium pb-1 group-hover:text-primary-text ${btnTitleClassName}`}
        >
          {slide?.title}
        </div>
        <div className="text-xs text-secondary-text pb-[2px]">{slide.desc}</div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary-main -translate-x-full ${progressBarClassName}`}
        style={{ animationDuration: `${duration}s`, animationFillMode: 'forwards' }}
      ></div>
    </button>
  );
}
