import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../types';
import { Breadcrumb } from '../../ui-kit/Breadcrumb';
import { joinList } from '../../utils/joinList';
import type { ProductBlockContent } from './ProductBlockContent';
import { ProductBlockInner } from './ProductBlockInner';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const { context, className, breadcrumbs } = props;
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <section
      className={`font-sans bg-white pt-10 pl-[50px] pb-[50px] pr-[7.5rem] box-border min-h-[420px] ${
        className || ''
      }`}
    >
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
