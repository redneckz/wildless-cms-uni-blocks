import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps, Benefit } from './types';
import { BlockVersion } from './types';
import { Tile } from './Tile';
import type { BaseTileContent } from './BaseTile';

export interface ProductTileContent extends BaseTileContent {
  benefits?: Benefit[];
}

export interface ProductTileProps extends ProductTileContent, UniBlockProps {}

export const ProductTile = JSX<ProductTileProps>(
  ({ className, context, title, description, buttons, image, benefits, version = 'primary' }) => {
    return (
      <Tile
        className={className}
        context={context}
        title={title}
        description={description}
        buttons={buttons}
        image={image}
        version={version}
      >
        <div className="flex mt-5 mb-10">
          {benefits?.length ? (
            <div className="mr-8">{benefits.map(renderBenefitDescription)}</div>
          ) : null}
          {benefits?.length ? (
            <div className="pt-1">{benefits.map((_, i) => renderBenefitLabel(_, i, version))}</div>
          ) : null}
        </div>
      </Tile>
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
