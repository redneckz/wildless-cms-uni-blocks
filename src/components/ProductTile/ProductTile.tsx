import { JSX } from '@redneckz/uni-jsx';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';
import type { BlockVersion } from '../../model/BlockVersion';
import type { ProductTileContent } from './ProductTileContent';
import { Tile } from '../Tile/Tile';
import type { UniBlockProps } from '../../types';

export interface ProductTileProps extends ProductTileContent, UniBlockProps {}

export const ProductTile = JSX<ProductTileProps>((props) => {
  const { benefits, version } = props;
  return (
    <Tile {...props}>
      <div className="flex mt-5 mb-1">
        {benefits?.length ? (
          <div className="mr-8">{benefits.map(renderBenefitDescription)}</div>
        ) : null}
        {benefits?.length ? (
          <div className="pt-1">{benefits.map((_, i) => renderBenefitLabel(_, i, version))}</div>
        ) : null}
      </div>
    </Tile>
  );
});

function renderBenefitLabel(benefit: Benefit, i: number, version = 'primary') {
  const labelStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };
  return (
    <div key={String(i)} className={`text-sm ${i ? 'mt-4' : ''} ${labelStyleMap[version]}`}>
      {benefit.label}
    </div>
  );
}
function renderBenefitDescription(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className={`text-xl font-medium ${i ? 'mt-2.5' : ''}`}>
      {benefit.description}
    </div>
  );
}
