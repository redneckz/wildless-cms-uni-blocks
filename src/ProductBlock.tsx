import { JSX } from '@redneckz/uni-jsx';
import { ProductBlockInner } from './ProductBlockInner';
import type { ProductBlockInnerContent } from './ProductBlockInner';
import type { UniBlockProps } from './types';
import { Breadcrumb, BreadcrumbProps } from './ui-kit/Breadcrumb';
import { useLink } from './useLink';
import { joinList } from './utils/joinList';

export interface ProductBlockProps extends ProductBlockInnerContent, UniBlockProps {
  breadcrumbs?: BreadcrumbProps[];
}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const { context, className, breadcrumbs } = props;
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <section className={`font-sans bg-white pl-12 pr-[7.5rem] py-10 ${className || ''}`}>
      {breadcrumbs?.length ? (
        <div className="text-xs mb-6">
          {joinList(<span className="text-secondary-text mx-2">/</span>)(
            breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb
                key={String(i)}
                {...useLink(
                  { router, handlerDecorator },
                  { className: 'text-secondary-text', ...breadcrumb },
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
