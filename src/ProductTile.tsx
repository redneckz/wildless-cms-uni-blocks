import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { Img } from './Img';
import { Picture } from './types';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { useLink } from './useLink';

interface ProductAdvantage {
  key: string;
  value: string;
}

export interface ProductTileContent {
  title?: string;
  description?: string;
  advantages?: ProductAdvantage[];
  image?: Picture;
  button?: ButtonProps;
}

export interface ProductTileProps extends ProductTileContent {
  className?: string;
  context: ContentPageContext;
}

export const ProductTile = JSX<ProductTileProps>(
  ({ className, context, title, description, button, image, advantages }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <section
        className={`font-sans p-9 rounded-[40px] bg-white text-primary-text ${className || ''}`}
      >
        <div className="flex flex-col w-full">
          {title && (
            <h3 className="font-medium text-title-sm m-0 whitespace-pre-wrap max-w-[600px]">
              {title}
            </h3>
          )}
          {description && (
            <div className="font-normal text-base max-w-[600px] mt-4">{description}</div>
          )}
          <div className="flex mt-5">
            <div className="grow flex flex-col">
              <div className="flex">
                {advantages?.length ? (
                  <div className="flex flex-col justify-between mr-8">
                    {advantages.map(renderAdvantageValue)}
                  </div>
                ) : null}
                {advantages?.length ? (
                  <div className="flex flex-col justify-between py-1">
                    {advantages.map(renderAdvantageKey)}
                  </div>
                ) : null}
              </div>
              {button?.text && (
                <div className="mt-auto">
                  <Button
                    className="mt-8"
                    {...useLink({ router, handlerDecorator }, button)}
                    version="secondary"
                  />
                </div>
              )}
            </div>
            {image && (
              <div className="mt-auto flex-none h-[220px] w-[220px]">
                <Img image={image} />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  },
);

function renderAdvantageKey(advantage: ProductAdvantage, i: number) {
  return (
    <div key={String(i)} className="text-sm text-secondary-text">
      {advantage.key}
    </div>
  );
}
function renderAdvantageValue(advantage: ProductAdvantage, i: number) {
  return (
    <div key={String(i)} className="text-xl font-medium">
      {advantage.value}
    </div>
  );
}