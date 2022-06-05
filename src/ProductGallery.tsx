import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { ProductBlockInner, ProductBlockInnerContent } from './ProductBlockInner';

interface ProductGalleryNav {
  title: string;
  desc: string;
}

export interface ProductSlideContent {
  nav: ProductGalleryNav;
  productBlock: ProductBlockInnerContent;
}

export interface ProductGalleryContent {
  duration?: number;
  slides?: ProductSlideContent[];
}

export interface ProductGalleryProps extends ProductGalleryContent {
  className?: string;
  context: ContentPageContext;
}

export const ProductGallery = JSX<ProductGalleryProps>(
  ({ className, context, duration = 0, slides = [] }) => {
    if (slides?.length) {
      const galleryNav = slides.map((s) => s.nav);
      const galleryBlocks = slides.map((s) => s.productBlock);
      const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

      return (
        <section
          className={`font-sans bg-white rounded-[40px] overflow-hidden w-100 ${className || ''}`}
        >
          <div
            className={`flex transition duration-1000`}
            style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          >
            {galleryBlocks.map((_, i) => renderProductBlock(_, i, context))}
          </div>

          <div
            className={`border-t border-solid border-main-divider grid grid-cols-${galleryNav.length}`}
          >
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
    }
  },
);

function renderProductBlock(block: ProductBlockInnerContent, i: number, context) {
  return (
    <section key={String(i)} className="grow-0 shrink-0 basis-full" role="list">
      <div className="p-11 pr-[7.5rem] ">
        <ProductBlockInner context={context} {...block} />
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
      className={`group relative overflow-hidden border-0 bg-inherit cursor-pointer text-left px-0 py-4`}
    >
      <div className="border-0 border-r border-solid border-main-divider px-6">
        <div className={`text-sm font-medium group-hover:text-primary-text ${btnTitleClassName}`}>
          {slide.title}
        </div>
        <div className="text-xs text-secondary-text">{slide.desc}</div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary-main -translate-x-full ${progressBarClassName}`}
        style={{ animationDuration: `${duration}s` }}
      ></div>
    </button>
  );
}
