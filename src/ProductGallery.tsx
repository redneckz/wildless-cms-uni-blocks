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

export interface ProductGalleryСontent {
  duration?: number;
  slides: ProductSlideContent[];
}

export interface ProductGalleryProps extends ProductGalleryСontent {
  className?: string;
  context: ContentPageContext;
}

let productGalleryInterval;

export const ProductGallery = JSX<ProductGalleryProps>(
  ({ className, context, duration = 0, slides = [] }) => {
    if (productGalleryInterval) {
      clearInterval(productGalleryInterval);
    }

    if (slides?.length) {
      const galleryNav = slides.map((s) => s.nav);
      const galleryBlocks = slides.map((s) => s.productBlock);
      const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

      if (duration) {
        productGalleryInterval = setInterval(() => {
          setActiveSlideIndex(activeSlideIndex < slides.length - 1 ? activeSlideIndex + 1 : 0);
        }, duration * 1000);
      }

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
            {galleryNav.map((_, i) =>
              renderNavButton(_, i, activeSlideIndex, setActiveSlideIndex, duration),
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

function renderNavButton(
  slide: ProductGalleryNav,
  index: number,
  activeSlideIndex,
  setActiveSlideIndex,
  duration,
) {
  const isActiveBtn = index === activeSlideIndex;
  const progressBarClassName = isActiveBtn ? 'animate-slide' : '';
  const btnTitleClassName = isActiveBtn ? 'text-primary-text' : 'text-secondary-text';
  return (
    <button
      type="button"
      key={String(index)}
      onClick={() => setActiveSlideIndex(index)}
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
        style={{ 'animation-duration': `${duration}s` }}
      ></div>
    </button>
  );
}