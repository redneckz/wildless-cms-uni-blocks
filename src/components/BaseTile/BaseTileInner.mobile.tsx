import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img';
import type { AlignType, BaseTileMainProps } from './BaseTileProps';
import { renderButton as mobileRenderButton } from './renderButton.mobile';
import { renderItems as mobileRenderIntems } from './renderItems.mobile';

const alignText: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export interface BaseTileInnerProps extends BaseTileMainProps, UniBlockProps {}

export const BaseTileInner = JSX<BaseTileInnerProps>(
  ({
    context,
    description,
    children,
    buttons,
    image,
    items,
    version = 'primary',
    align = 'left',
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <div>
        {description && (
          <div className={`font-normal text-base mt-3 ${alignText[align]}`}>{description}</div>
        )}
        {children}
        {items?.length && mobileRenderIntems(items, version)}
        {buttons?.length && (
          <div className="mt-5">
            {buttons.map((button, index) =>
              mobileRenderButton(useLink({ router, handlerDecorator }, button), index),
            )}
          </div>
        )}
        {image?.src && <Img className="mt-auto ml-7" image={image} />}
      </div>
    );
  },
);
