import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { Img } from './Img';
import { BlockVersion, Picture } from './types';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { useLink } from './useLink';
import type { Benefit } from './BenefitsBlock';

export interface ProductTileContent {
  title?: string;
  description?: string;
  benefits?: Benefit[];
  image?: Picture;
  button?: ButtonProps;
  version?: BlockVersion;
}

export interface ProductTileProps extends ProductTileContent {
  className?: string;
  context: ContentPageContext;
}

const productTileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const ProductTile = JSX<ProductTileProps>(
  ({ className, context, title, description, button, image, benefits, version = 'primary' }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <section
        className={`font-sans p-9 rounded-[40px] ${className || ''} ${
          productTileStyleMap[version]
        }`}
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
                {benefits?.length ? (
                  <div className="mr-8">{benefits.map(renderBenefitDescription)}</div>
                ) : null}
                {benefits?.length ? (
                  <div className="pt-1">
                    {benefits.map((_, i) => renderBenefitLabel(_, i, version))}
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

function renderBenefitLabel(benefit: Benefit, i: number, version = 'primary') {
  const labelStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };
  return (
    <div key={String(i)} className={`text-sm mb-4 ${labelStyleMap[version]}`}>
      {benefit.label}
    </div>
  );
}
function renderBenefitDescription(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="text-xl font-medium mb-2.5">
      {benefit.description}
    </div>
  );
}
