import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { Breadcrumb } from '../../ui-kit/Breadcrumb';
import { joinList } from '../../utils/joinList';
import type { ProductBlockContent } from './ProductBlockContent';
import { ProductBlockInner } from './ProductBlockInner';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

const productBlockStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

const breadcrumbsStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white/80',
};

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const { context, className, breadcrumbs, version = 'primary' } = props;
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <section
      className={`font-sans pt-10 pl-[50px] pb-[50px] pr-[7.5rem] box-border min-h-[420px] ${
        className || ''
      } ${productBlockStyleMap[version]}`}
    >
      {breadcrumbs?.length ? (
        <div className="text-xs mb-6">
          {joinList(<span className={`mx-2 ${breadcrumbsStyleMap[version]}`}>/</span>)(
            breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb
                key={String(i)}
                {...useLink(
                  { router, handlerDecorator },
                  { className: breadcrumbsStyleMap[version], ...breadcrumb },
                )}
              />
            )),
          )}
        </div>
      ) : null}
      <ProductBlockInner {...props} />
    </section>
  );
});
