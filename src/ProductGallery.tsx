import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { ProductBlockInner, ProductBlockInnerContent } from './ProductBlockInner';

export interface ProductSlideContent extends ProductBlockInnerContent {
  navBtnTitle: string;
  navBtnDesc?: string;
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
            className={`flex transition duration-1000 ${getActiveSlideClassName(activeSlideIndex)}`}
          >
            {slides.map((_, i) => renderGallerySlide(_, i, context))}
          </div>

          <div className="border-t border-solid border-main-divider">
            <div className={`grid ${getNavGridColumnClassName(slides.length)}`}>
              {slides.map((s, i) =>
                renderNavButton(s, i, activeSlideIndex, setActiveSlideIndex, duration),
              )}
            </div>
          </div>
        </section>
      );
    }
  },
);

function renderGallerySlide(slide: ProductSlideContent, i: number, context) {
  return (
    <section key={String(i)} className="grow-0 shrink-0 basis-full" role="list">
      <div className="p-11 pr-[7.5rem] ">
        <ProductBlockInner context={context} {...slide} />
      </div>
    </section>
  );
}

function renderNavButton(
  slide: ProductSlideContent,
  index: number,
  activeSlideIndex,
  setActiveSlideIndex,
  duration,
) {
  const isActiveBtn = index === activeSlideIndex;
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
          {slide.navBtnTitle}
        </div>
        <div className="text-xs text-secondary-text">{slide.navBtnDesc}</div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary-main -translate-x-full ${getAnimateProgressClass(
          isActiveBtn ? duration : 0,
        )}`}
      ></div>
    </button>
  );
}

function getNavGridColumnClassName(slidesLength: number = 1) {
  switch (slidesLength) {
    case 1:
      return 'grid-cols-1';
    case 2:
      return 'grid-cols-2';
    case 3:
      return 'grid-cols-3';
    case 4:
      return 'grid-cols-4';
  }
  return 'grid-cols-1';
}

function getActiveSlideClassName(activeSlideIndex: number = 0) {
  switch (activeSlideIndex) {
    case 1:
      return 'to-slide-2';
    case 2:
      return 'to-slide-3';
    case 3:
      return 'to-slide-4';
  }
  return 'to-slide-1';
}

function getAnimateProgressClass(duration: number = 0) {
  switch (duration) {
    case 1:
      return 'animate-progress-1';
    case 2:
      return 'animate-progress-2';
    case 3:
      return 'animate-progress-3';
    case 4:
      return 'animate-progress-4';
    case 5:
      return 'animate-progress-5';
    case 6:
      return 'animate-progress-6';
    case 7:
      return 'animate-progress-7';
    case 8:
      return 'animate-progress-8';
    case 9:
      return 'animate-progress-9';
    case 10:
      return 'animate-progress-10';
  }

  return '';
}
